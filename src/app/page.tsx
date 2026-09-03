import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import GlowOrb from "@/components/GlowOrb";
import PillarIcon from "@/components/PillarIcon";
import { credentials, servicePillars, siteConfig } from "@/lib/site";

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
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                "Ραντεβού — CSC AI Solutions"
              )}`}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Κλείστε ένα πρώτο ραντεβού →
            </a>
            <Link
              href="/services"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-blue"
            >
              Δείτε τις υπηρεσίες
            </Link>
          </div>
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
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Τι κάνουμε
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Τέσσερις τρόποι να φέρουμε το AI στην επιχείρησή σας
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {servicePillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/services#${pillar.slug}`}
              className="card-surface group rounded-2xl p-6 transition-colors hover:border-accent-blue"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border"
                style={{ background: "var(--surface-2)" }}
              >
                <PillarIcon slug={pillar.slug} colorVar={pillar.accent} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {pillar.shortDescription}
              </p>
              <span className="mt-4 inline-flex text-sm font-medium text-accent-blue">
                Μάθετε περισσότερα →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why now */}
      <section className="relative overflow-hidden border-y border-border bg-surface">
        <GlowOrb
          color="var(--accent-cyan)"
          className="left-1/2 top-0 h-96 w-96 -translate-x-1/2"
        />
        <div className="container-page relative grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Γιατί τώρα
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Το κενό ανάμεσα σε ενδιαφέρον και υλοποίηση είναι η ευκαιρία
              σας
            </p>
            <p className="mt-6 text-muted">
              Μόνο ένα μικρό ποσοστό των ελληνικών επιχειρήσεων χρησιμοποιεί
              σήμερα το AI σε πραγματικό βάθος — οι περισσότερες μένουν σε
              επιφανειακή ή σποραδική χρήση. Οι επιχειρήσεις που κινούνται
              τώρα, με σαφές σχέδιο, θα έχουν σημαντικό προβάδισμα απέναντι
              στον ανταγωνισμό τους μέσα στα επόμενα δύο-τρία χρόνια.
            </p>
          </div>
          <div className="card-surface grid grid-cols-2 gap-6 rounded-2xl p-8">
            <Stat value="12%" label="χρησιμοποιούν AI σε πραγματικό βάθος" />
            <Stat
              value="~10%"
              label="των επενδύσεων ελληνικών επιχειρήσεων θα πάει σε AI το 2026"
            />
            <Stat
              value="18%"
              label="υιοθέτηση AI στις μικρές μεταποιητικές επιχειρήσεις"
            />
            <Stat
              value="66%"
              label="υιοθέτηση AI στις μεγάλες βιομηχανικές επιχειρήσεις"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page py-24 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Ας μιλήσουμε για το πού μπορεί το AI να κάνει πραγματική διαφορά
          στην επιχείρησή σας.
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Επικοινωνήστε μαζί μας
          </a>
        </div>
      </section>
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
