import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const TO_EMAIL = "x.dna.me@gmail.com";
const MIN_SUBMIT_MS = 3000; // reject submissions faster than this (bots)
const MAX_MESSAGE_LEN = 5000;
const MAX_FIELD_LEN = 200;

// Very small in-memory rate limiter. This resets whenever the serverless
// instance recycles, so it is a soft speed bump against bursts from the
// same IP within one warm instance — not a durable, cross-instance limit.
const rateLimitBuckets = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitBuckets.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  hits.push(now);
  rateLimitBuckets.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

function clean(value: unknown, maxLen = MAX_FIELD_LEN): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Πολλές υποβολές. Δοκιμάστε ξανά αργότερα." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Μη έγκυρα δεδομένα." },
        { status: 400 }
      );
    }

    // Honeypot: real visitors never fill this hidden field.
    const honeypot = clean(body.website);
    if (honeypot) {
      // Silently "succeed" so bots don't learn the honeypot was tripped.
      return NextResponse.json({ ok: true });
    }

    // Timing check: a human takes at least a few seconds to fill the form.
    const formLoadedAt = Number(body.formLoadedAt);
    if (!Number.isFinite(formLoadedAt) || Date.now() - formLoadedAt < MIN_SUBMIT_MS) {
      return NextResponse.json(
        { ok: false, error: "Η φόρμα υποβλήθηκε πολύ γρήγορα. Δοκιμάστε ξανά." },
        { status: 400 }
      );
    }

    const name = clean(body.name);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 254);
    const topic = clean(body.topic, 120);
    const otherTopic = clean(body.otherTopic, 200);
    const message = clean(body.message, MAX_MESSAGE_LEN);

    if (!name || !phone || !topic || !message) {
      return NextResponse.json(
        { ok: false, error: "Συμπληρώστε όλα τα υποχρεωτικά πεδία." },
        { status: 400 }
      );
    }
    if (topic === "other" && !otherTopic) {
      return NextResponse.json(
        { ok: false, error: "Περιγράψτε το θέμα σας." },
        { status: 400 }
      );
    }
    // Very light phone sanity check (digits, spaces, +, -, at least 8 digits)
    const digitCount = phone.replace(/\D/g, "").length;
    if (digitCount < 8) {
      return NextResponse.json(
        { ok: false, error: "Το τηλέφωνο δεν φαίνεται έγκυρο." },
        { status: 400 }
      );
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Το email δεν φαίνεται έγκυρο." },
        { status: 400 }
      );
    }

    const topicLabel = topic === "other" ? otherTopic : topic;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { ok: false, error: "Η αποστολή δεν είναι διαθέσιμη αυτή τη στιγμή." },
        { status: 500 }
      );
    }

    const subject = `Νέο ενδιαφέρον από csc.com.gr — ${topicLabel}`;
    const html = `
      <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6;">
        <h2>Νέα υποβολή φόρμας ενδιαφέροντος</h2>
        <p><strong>Όνομα:</strong> ${escapeHtml(name)}</p>
        <p><strong>Κινητό:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${email ? escapeHtml(email) : "(δεν δόθηκε)"}</p>
        <p><strong>Θέμα:</strong> ${escapeHtml(topicLabel)}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr />
        <p style="color:#888; font-size:12px;">IP: ${escapeHtml(ip)}</p>
      </div>
    `.trim();

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CSC AI Solutions <info@csc.com.gr>",
        to: [TO_EMAIL],
        reply_to: email || undefined,
        subject,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text().catch(() => "");
      console.error("Resend API error:", resendRes.status, errText);
      return NextResponse.json(
        { ok: false, error: "Η αποστολή απέτυχε. Δοκιμάστε ξανά αργότερα." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Κάτι πήγε στραβά. Δοκιμάστε ξανά." },
      { status: 500 }
    );
  }
}
