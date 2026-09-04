import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import GlowOrb from "@/components/GlowOrb";
import PillarIcon from "@/components/PillarIcon";
import Reveal from "@/components/Reveal";
import { credentials, servicePillars } from "@/lib/site";

const collaborationSteps = [
  {
    title: "Διερευνητική συνάντηση",
    description:
      "Γνωριζόμαστε, ακούμε το πρόβλημα ή τον στόχο σας και εξηγούμε πώς δουλεύουμε.",
  },
  {
    title: "Αξιολόγηση και σχεδιασμός λύσης",
    description:
      "Αναλύουμε τις ανάγκες και τα υπάρχοντα συστήματά σας και σχεδιάζουμε τη λύση που ταιριάζει.",
  },
  {
    title: "Prototype και υλοποίηση",
    description:
      "Χτίζουμε ένα πρώτο λειτουργικό prototype και προχωράμε στην πλήρη υλοποίηση.",
  },
  {
    title: "Μέτρηση αποτελεσμάτων και υποστήριξη",
    description:
      "Παρακολουθούμε τα πραγματικά αποτελέσματα και παραμένουμε δίπλα σας για συνεχή υποστήριξη.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <GlowOrb
          color="var(--accent-blue)"
          className="-left-24 -top-24 h-96 w-96"
        />
        <GlowOrb
          color="var(--accent-violet)"
          className="right-0 top-10 h-[28rem] w-[28rem]"
        />
        <HeroCanvas />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/45 to-background"
        />
        <div className="container-page relative py-28 sm:py-36">
          <Reveal>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Τεχνητή Νοημοσύνη που{" "}
              <span className="gradient-text">δουλεύει</span> για την
              επιχείρησή σας — όχι hype.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Σχεδιάζουμε, αναπτύσσουμε και ενσωματώνουμε λύσεις Τεχνητής
              Νοημοσύνης σε πραγματικές επιχειρηματικές διαδικασίες. Από τη
              στρατηγική μέχρι τον κώδικα.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="whitespace-nowrap rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Αιτηθείτε ένα πρώτο ραντεβού →
              </Link>
              <Link
                href="/services"
                className="whitespace-nowrap rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-blue"
              >
                Δείτε τις υπηρεσίες
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-6 py-10 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => (
            <p key={item} className="leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Τι κάνουμε
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Τέσσερις τρόποι να φέρουμε το{" "}
            <span className="gradient-text">AI</span> στην επιχείρησή σας
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {servicePillars.map((pillar, index) => (
            <Reveal key={pillar.slug} delayMs={index * 80}>
              <Link
                href={`/services#${pillar.slug}`}
                className="card-surface group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-accent-blue"
              >
                <PillarIcon slug={pillar.slug} size="sm" />
                <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted">
                  {pillar.shortDescription}
                </p>
                <span className="mt-4 inline-flex text-sm font-medium text-accent-blue">
                  Μάθετε περισσότερα →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dubai case study highlight */}
      <section className="border-y border-border bg-surface">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Case Study
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Αποδεδειγμένο έργο{" "}
              <span className="gradient-text">Τεχνητής Νοημοσύνης</span> στο
              Dubai
            </p>
            <Link
              href="/case-studies/dubai-taxi-ai"
              className="mt-8 inline-flex whitespace-nowrap rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Δείτε τη μελέτη περίπτωσης →
            </Link>
          </Reveal>
          <Reveal delayMs={120} className="card-surface grid grid-cols-2 gap-6 rounded-2xl p-8">
            <Stat value="58" label="σχεδιασμένες ευφυείς υπηρεσίες" />
            <Stat value="8–10%" label="μετρημένη μείωση κατανάλωσης καυσίμου" />
            <Stat value="9 μήνες" label="εκτιμώμενος χρόνος απόσβεσης" />
            <Stat
              value="15"
              label="άτομα σε διεθνή διεπιστημονική ομάδα"
            />
          </Reveal>
        </div>
      </section>

      {/* Why now */}
      <section className="relative overflow-hidden border-y border-border bg-surface">
        <GlowOrb
          color="var(--accent-cyan)"
          className="left-1/2 top-0 h-96 w-96 -translate-x-1/2"
        />
        <div className="container-page relative grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Γιατί τώρα
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Το κενό ανάμεσα σε ενδιαφέρον και{" "}
              <span className="gradient-text">υλοποίηση</span> είναι η
              ευκαιρία σας
            </p>
            <p className="mt-6 text-muted">
              Μόνο ένα μικρό ποσοστό των ελληνικών επιχειρήσεων χρησιμοποιεί
              σήμερα το AI σε πραγματικό βάθος — οι περισσότερες μένουν σε
              επιφανειακή ή σποραδική χρήση. Οι επιχειρήσεις που κινούνται
              τώρα, με σαφές σχέδιο, αποκτούν σημαντικό προβάδισμα απέναντι
              στον ανταγωνισμό τους μέσα στα επόμενα λίγα χρόνια.
            </p>
          </Reveal>
          <Reveal delayMs={120} className="card-surface grid grid-cols-2 gap-6 rounded-2xl p-8">
            <Stat value="12%" label="χρησιμοποιούν AI σε πραγματικό βάθος, σύμφωνα με πρόσφατη έρευνα" />
            <Stat
              value="~10%"
              label="των επενδύσεων ελληνικών επιχειρήσεων κατευθύνεται πλέον σε AI"
            />
            <Stat
              value="18%"
              label="υιοθέτηση AI στις μικρές μεταποιητικές επιχειρήσεις"
            />
            <Stat
              value="66%"
              label="υιοθέτηση AI στις μεγάλες βιομηχανικές επιχειρήσεις"
            />
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="container-page py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Πώς συνεργαζόμαστε
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Τέσσερα απλά <span className="gradient-text">βήματα</span>
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationSteps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 80}>
              <li className="card-surface flex h-full flex-col rounded-2xl p-6">
                <span className="gradient-text text-3xl font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Final CTA */}
      <Reveal className="container-page py-24 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Ας μιλήσουμε για το πού μπορεί το{" "}
          <span className="gradient-text">AI</span> να κάνει πραγματική
          διαφορά στην επιχείρησή σας.
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Επικοινωνήστε μαζί μας
          </Link>
        </div>
      </Reveal>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="gradient-text text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}
