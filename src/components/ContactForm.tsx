"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { servicePillars } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillTopic = searchParams.get("topic");

  const [topic, setTopic] = useState(() => {
    const match = servicePillars.find((p) => p.slug === prefillTopic);
    return match ? match.title : "";
  });
  const [otherTopic, setOtherTopic] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formLoadedAtRef = useRef<number | null>(null);
  useEffect(() => {
    formLoadedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      otherTopic: String(formData.get("otherTopic") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""), // honeypot
      formLoadedAt: formLoadedAtRef.current,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({ ok: false }));

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Κάτι πήγε στραβά. Δοκιμάστε ξανά.");
        return;
      }

      setStatus("success");
      form.reset();
      setTopic("");
      setOtherTopic("");
    } catch {
      setStatus("error");
      setErrorMsg("Πρόβλημα σύνδεσης. Ελέγξτε το internet σας και δοκιμάστε ξανά.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">
          Ευχαριστούμε για το μήνυμά σας!
        </h3>
        <p className="mt-3 text-sm text-muted">
          Λάβαμε το ενδιαφέρον σας και θα επικοινωνήσουμε μαζί σας το
          συντομότερο δυνατό.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field — hidden from real visitors, invisible bait for bots */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-5000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Ονοματεπώνυμο <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={200}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
            placeholder="Το όνομά σας"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Κινητό τηλέφωνο <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            maxLength={40}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
            placeholder="69XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email <span className="text-muted">(προαιρετικό)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          maxLength={254}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="topic" className="text-sm font-medium text-foreground">
          Θέμα <span className="text-accent-cyan">*</span>
        </label>
        <select
          id="topic"
          name="topic"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
        >
          <option value="" disabled>
            Επιλέξτε θέμα…
          </option>
          {servicePillars.map((pillar) => (
            <option key={pillar.slug} value={pillar.title}>
              {pillar.title}
            </option>
          ))}
          <option value="other">Άλλο θέμα</option>
        </select>
      </div>

      {topic === "other" && (
        <div>
          <label
            htmlFor="otherTopic"
            className="text-sm font-medium text-foreground"
          >
            Περιγράψτε το θέμα σας <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="text"
            id="otherTopic"
            name="otherTopic"
            required
            maxLength={200}
            value={otherTopic}
            onChange={(e) => setOtherTopic(e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
            placeholder="π.χ. Συνεργασία, ερώτηση κ.λπ."
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Μήνυμα <span className="text-accent-cyan">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent-blue"
          placeholder="Περιγράψτε όσο πιο αναλυτικά μπορείτε τι χρειάζεστε — τι θα θέλατε να πετύχετε, ποιο πρόβλημα προσπαθείτε να λύσετε, ή οτιδήποτε θεωρείτε χρήσιμο."
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full whitespace-nowrap rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? "Αποστολή…" : "Αποστολή μηνύματος"}
      </button>
    </form>
  );
}
