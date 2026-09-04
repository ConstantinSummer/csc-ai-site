"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { servicePillars } from "@/lib/site";

type QuestionType = "text" | "textarea" | "select";

type Question = {
  id: string;
  label: string;
  type: QuestionType;
  placeholder?: string;
  options?: string[];
  optional?: boolean;
};

// One short, targeted question set per service — this is what makes the
// wizard feel tailored instead of generic. Kept local to this component
// since it's presentation/flow content, not core site data.
const SERVICE_QUESTIONS: Record<string, Question[]> = {
  "ai-development": [
    {
      id: "goal",
      type: "textarea",
      label: "Τι θα θέλατε να κάνει αυτόματα το σύστημα;",
      placeholder:
        "π.χ. να απαντά σε ερωτήσεις πελατών, να συμπληρώνει φόρμες, να ενημερώνει το CRM…",
    },
    {
      id: "systems",
      type: "text",
      label: "Υπάρχουν συστήματα (CRM, ERP, site) που πρέπει να συνδεθούν;",
      placeholder: "π.χ. δεν έχουμε ακόμα / Salesforce / το δικό μας site",
      optional: true,
    },
    {
      id: "users",
      type: "select",
      label: "Πόσα άτομα περίπου θα το χρησιμοποιούν;",
      options: ["1–5", "6–20", "20+", "Δεν είμαι σίγουρος/η"],
    },
  ],
  "ai-readiness-audit": [
    {
      id: "size",
      type: "select",
      label: "Πόσα άτομα απασχολεί περίπου η επιχείρησή σας;",
      options: ["1–10", "11–50", "50+"],
    },
    {
      id: "aiUsage",
      type: "select",
      label: "Χρησιμοποιείτε ήδη κάποιο εργαλείο AI στην επιχείρηση;",
      options: ["Όχι ακόμα", "Λίγο, δοκιμαστικά", "Ναι, αρκετά"],
    },
    {
      id: "bottleneck",
      type: "textarea",
      label:
        "Ποιο θεωρείτε το πιο χρονοβόρο, επαναλαμβανόμενο κομμάτι της δουλειάς σας σήμερα;",
      placeholder: "π.χ. καταχώρηση παραστατικών, απαντήσεις σε email…",
    },
  ],
  "geo-aeo-visibility": [
    {
      id: "website",
      type: "text",
      label: "Ποιο είναι το site της επιχείρησής σας;",
      placeholder: "https://…",
    },
    {
      id: "checked",
      type: "select",
      label:
        "Έχετε ελέγξει αν εμφανίζεστε όταν κάποιος ρωτάει εργαλεία AI (ChatGPT κ.ά.) για τον κλάδο σας;",
      options: ["Ναι, εμφανιζόμαστε", "Ναι, αλλά όχι", "Δεν έχω ελέγξει"],
    },
  ],
  "team-training": [
    {
      id: "size",
      type: "select",
      label: "Πόσα άτομα θα συμμετάσχουν περίπου στην εκπαίδευση;",
      options: ["1–5", "6–15", "15+"],
    },
    {
      id: "level",
      type: "select",
      label: "Ποιο είναι το τρέχον επίπεδο εξοικείωσής τους με το AI;",
      options: ["Αρχάριοι", "Μέτριο", "Προχωρημένο", "Μεικτό επίπεδο"],
    },
    {
      id: "tool",
      type: "text",
      label: "Υπάρχει συγκεκριμένο εργαλείο AI που θέλετε να μάθουν να χρησιμοποιούν;",
      placeholder: "π.χ. ChatGPT, Copilot… (προαιρετικό)",
      optional: true,
    },
  ],
};

const OTHER_QUESTIONS: Question[] = [
  {
    id: "message",
    type: "textarea",
    label: "Πώς μπορούμε να σας βοηθήσουμε;",
    placeholder: "Περιγράψτε ελεύθερα τι χρειάζεστε.",
  },
];

const OTHER_SLUG = "other";

type Phase = "service" | "questions" | "contact" | "summary" | "success";
type Status = "idle" | "submitting" | "error";

// Renders one text/textarea/select question. Keyed by the parent on the
// question's identity so switching questions remounts this component and
// resets `value` fresh from `initialValue` — no effect needed to keep it
// in sync with the current step.
function QuestionStep({
  question,
  initialValue,
  onSubmit,
}: {
  question: Question;
  initialValue: string;
  onSubmit: (value: string) => void;
}) {
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground">
        {question.label}
      </h3>
      {question.optional && (
        <p className="mt-1 text-xs text-muted">Προαιρετικό</p>
      )}

      {question.type === "select" && (
        <div className="mt-6 space-y-3">
          {question.options?.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onSubmit(opt)}
              className="block w-full rounded-xl border border-border bg-background px-4 py-3 text-left text-sm text-foreground transition-colors hover:border-accent-blue"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {question.type === "text" && (
        <div className="mt-6">
          <input
            type="text"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (value.trim() || question.optional)) {
                onSubmit(value.trim());
              }
            }}
            maxLength={200}
            placeholder={question.placeholder}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent-blue"
          />
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              disabled={!value.trim() && !question.optional}
              onClick={() => onSubmit(value.trim())}
              className="whitespace-nowrap rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Επόμενο →
            </button>
            {question.optional && (
              <button
                type="button"
                onClick={() => onSubmit("")}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Παράλειψη
              </button>
            )}
          </div>
        </div>
      )}

      {question.type === "textarea" && (
        <div className="mt-6">
          <textarea
            autoFocus
            rows={5}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={2000}
            placeholder={question.placeholder}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent-blue"
          />
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              disabled={!value.trim() && !question.optional}
              onClick={() => onSubmit(value.trim())}
              className="whitespace-nowrap rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Επόμενο →
            </button>
            {question.optional && (
              <button
                type="button"
                onClick={() => onSubmit("")}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Παράλειψη
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function IntakeWizard() {
  const searchParams = useSearchParams();
  const prefillTopic = searchParams.get("topic");

  const prefillMatch = servicePillars.find((p) => p.slug === prefillTopic);
  const [skipServiceStep] = useState(Boolean(prefillMatch));
  const [selectedSlug, setSelectedSlug] = useState<string | null>(
    prefillMatch ? prefillMatch.slug : null
  );
  const [phase, setPhase] = useState<Phase>(prefillMatch ? "questions" : "service");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [contactError, setContactError] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const formLoadedAtRef = useRef<number | null>(null);
  useEffect(() => {
    formLoadedAtRef.current = Date.now();
  }, []);

  const questions =
    selectedSlug && selectedSlug !== OTHER_SLUG
      ? SERVICE_QUESTIONS[selectedSlug] ?? []
      : OTHER_QUESTIONS;

  const pillar = servicePillars.find((p) => p.slug === selectedSlug);
  const topicLabel = pillar ? pillar.title : "Γενικό ενδιαφέρον";

  const stepsBeforeQuestions = skipServiceStep ? 0 : 1;
  const totalSteps = stepsBeforeQuestions + questions.length + 2; // + contact + summary
  const currentStepNumber =
    phase === "service"
      ? 1
      : phase === "questions"
        ? stepsBeforeQuestions + questionIndex + 1
        : phase === "contact"
          ? stepsBeforeQuestions + questions.length + 1
          : stepsBeforeQuestions + questions.length + 2;

  function selectService(slug: string) {
    setSelectedSlug(slug);
    setAnswers({});
    setQuestionIndex(0);
    setPhase("questions");
  }

  function goBack() {
    if (phase === "questions") {
      if (questionIndex > 0) {
        setQuestionIndex((i) => i - 1);
      } else if (!skipServiceStep) {
        setPhase("service");
      }
    } else if (phase === "contact") {
      setPhase("questions");
      setQuestionIndex(questions.length - 1);
    } else if (phase === "summary") {
      setPhase("contact");
    }
  }

  function submitAnswer(value: string) {
    const q = questions[questionIndex];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex((i) => i + 1);
    } else {
      setPhase("contact");
    }
  }

  function handleContactContinue() {
    if (!name.trim()) {
      setContactError("Συμπληρώστε το ονοματεπώνυμό σας.");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setContactError("Συμπληρώστε τηλέφωνο ή email επικοινωνίας.");
      return;
    }
    setContactError("");
    setPhase("summary");
  }

  function buildRecapLines(): { label: string; value: string }[] {
    return questions
      .map((q) => ({ label: q.label, value: answers[q.id] ?? "" }))
      .filter((line) => line.value);
  }

  function buildMessage(): string {
    return buildRecapLines()
      .map((l) => `${l.label}\n${l.value}`)
      .join("\n\n");
  }

  function buildSummaryText(): string {
    const parts = [
      `Υπηρεσία: ${topicLabel}`,
      buildMessage(),
      `Στοιχεία επικοινωνίας:\nΌνομα: ${name}\nEmail: ${email || "—"}\nΤηλέφωνο: ${phone || "—"}`,
    ].filter(Boolean);
    return parts.join("\n\n");
  }

  async function handleSubmit() {
    setStatus("submitting");
    setErrorMsg("");

    const payload = {
      name,
      phone,
      email,
      topic: selectedSlug === OTHER_SLUG ? "other" : topicLabel,
      otherTopic:
        selectedSlug === OTHER_SLUG ? "Γενικό ενδιαφέρον (οδηγός επικοινωνίας)" : "",
      message: buildMessage() || "(δεν δόθηκαν επιπλέον στοιχεία)",
      website: honeypot,
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

      setStatus("idle");
      setPhase("success");
    } catch {
      setStatus("error");
      setErrorMsg("Πρόβλημα σύνδεσης. Ελέγξτε το internet σας και δοκιμάστε ξανά.");
    }
  }

  const mailtoHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    "Η σύνοψη του αιτήματός μου προς CSC AI Solutions"
  )}&body=${encodeURIComponent(buildSummaryText())}`;

  if (phase === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">
          Ευχαριστούμε για το ενδιαφέρον σας!
        </h3>
        <p className="mt-3 text-sm text-muted">
          Λάβαμε όλα τα στοιχεία που μας δώσατε και θα επικοινωνήσουμε μαζί
          σας το συντομότερο δυνατό.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      {phase !== "service" && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>
              Βήμα {currentStepNumber} από {totalSteps}
            </span>
            {!(phase === "questions" && questionIndex === 0 && skipServiceStep) && (
              <button
                type="button"
                onClick={goBack}
                className="text-muted transition-colors hover:text-foreground"
              >
                ← Πίσω
              </button>
            )}
          </div>
          <div className="mt-2 h-1 w-full rounded-full bg-background">
            <div
              className="h-1 rounded-full bg-accent-cyan transition-all"
              style={{ width: `${(currentStepNumber / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {phase === "service" && (
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Ποια υπηρεσία σας ενδιαφέρει;
          </h3>
          <p className="mt-1 text-sm text-muted">
            Θα σας κάνουμε 2-3 σύντομες ερωτήσεις προσαρμοσμένες σε αυτήν,
            ώστε να σας εξυπηρετήσουμε καλύτερα.
          </p>
          <div className="mt-6 space-y-3">
            {servicePillars.map((p) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => selectService(p.slug)}
                className="block w-full rounded-xl border border-border bg-background px-4 py-3 text-left text-sm transition-colors hover:border-accent-blue"
              >
                <span className="font-medium text-foreground">{p.title}</span>
                <span className="mt-0.5 block text-xs text-muted">
                  {p.shortDescription}
                </span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => selectService(OTHER_SLUG)}
              className="block w-full rounded-xl border border-dashed border-border bg-background px-4 py-3 text-left text-sm text-muted transition-colors hover:border-accent-blue hover:text-foreground"
            >
              Κάτι άλλο / Δεν είμαι σίγουρος/η ακόμα
            </button>
          </div>
        </div>
      )}

      {phase === "questions" &&
        (() => {
          const q = questions[questionIndex];
          if (!q) return null;
          return (
            <QuestionStep
              key={`${selectedSlug}-${q.id}`}
              question={q}
              initialValue={answers[q.id] ?? ""}
              onSubmit={submitAnswer}
            />
          );
        })()}

      {phase === "contact" && (
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Πώς μπορούμε να επικοινωνήσουμε μαζί σας;
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wizard-name"
                className="text-sm font-medium text-foreground"
              >
                Ονοματεπώνυμο <span className="text-accent-cyan">*</span>
              </label>
              <input
                id="wizard-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={200}
                placeholder="Το όνομά σας"
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent-blue"
              />
            </div>
            <div>
              <label
                htmlFor="wizard-phone"
                className="text-sm font-medium text-foreground"
              >
                Κινητό τηλέφωνο
              </label>
              <input
                id="wizard-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={40}
                placeholder="69XX XXX XXX"
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent-blue"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="wizard-email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="wizard-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={254}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors focus:border-accent-blue"
            />
            <p className="mt-1.5 text-xs text-muted">
              Συμπληρώστε τουλάχιστον ένα από τα δύο: τηλέφωνο ή email.
            </p>
          </div>

          {/* Honeypot — hidden from real visitors */}
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
            <label htmlFor="wizard-website">Website</label>
            <input
              type="text"
              id="wizard-website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {contactError && (
            <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {contactError}
            </p>
          )}

          <button
            type="button"
            onClick={handleContactContinue}
            className="mt-6 whitespace-nowrap rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Επόμενο →
          </button>
        </div>
      )}

      {phase === "summary" && (
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Ελέγξτε τα στοιχεία σας
          </h3>
          <p className="mt-1 text-sm text-muted">
            Αυτά είναι όσα μας δώσατε συνολικά — μπορείτε να τα στείλετε και
            στο δικό σας email για αναφορά.
          </p>

          <dl className="mt-6 space-y-4 rounded-xl border border-border bg-background p-5 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                Υπηρεσία
              </dt>
              <dd className="mt-1 text-foreground">{topicLabel}</dd>
            </div>
            {buildRecapLines().map((line) => (
              <div key={line.label}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                  {line.label}
                </dt>
                <dd className="mt-1 whitespace-pre-wrap text-muted">
                  {line.value}
                </dd>
              </div>
            ))}
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                Στοιχεία επικοινωνίας
              </dt>
              <dd className="mt-1 text-muted">
                {name}
                {email ? ` · ${email}` : ""}
                {phone ? ` · ${phone}` : ""}
              </dd>
            </div>
          </dl>

          {status === "error" && (
            <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {errorMsg}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={status === "submitting"}
              onClick={handleSubmit}
              className="whitespace-nowrap rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "submitting" ? "Αποστολή…" : "Αποστολή στην CSC →"}
            </button>
            <a
              href={mailtoHref}
              className="whitespace-nowrap rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-blue"
            >
              Στείλτε αντίγραφο στο email σας
            </a>
          </div>
          <p className="mt-3 text-xs text-muted">
            Χρησιμοποιούμε τα στοιχεία αυτής της φόρμας μόνο για να σας
            απαντήσουμε — δείτε την{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Πολιτική Απορρήτου
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
