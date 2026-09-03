import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import GlowOrb from "@/components/GlowOrb";
import PillarIcon from "@/components/PillarIcon";
import Reveal from "@/components/Reveal";
import { faqItems, scenarios, servicePillars, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Υπηρεσίες Τεχνητής Νοημοσύνης για Επιχειρήσεις",
  description:
    "Ανάπτυξη AI εφαρμογών, AI strategy audit, GEO/AEO visibility και corporate training για ελληνικές επιχειρήσεις.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: servicePillars.map((pillar, index) => ({
            "@type": "Service",
            position: index + 1,
            name: pillar.title,
            description: pillar.description,
            provider: {
              "@type": "Organization",
              name: siteConfig.brandName,
              legalName: siteConfig.legalName,
            },
            areaServed: "GR",
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-violet)"
          className="right-0 -top-32 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="gradient-text">Υπηρεσίες</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Δεν υπάρχει μία λύση για όλους. Κάθε πακέτο χτίζεται γύρω από
            τις πραγματικές ανάγκες της επιχείρησής σας, με έμφαση στην
            πρακτική υλοποίηση — όχι στη θεωρία.
          </p>
        </Reveal>
      </section>

      <section className="container-page divide-y divide-border">
        {servicePillars.map((pillar) => {
          const scenario = scenarios.find((s) => s.pillarSlug === pillar.slug);
          return (
            <div
              key={pillar.slug}
              id={pillar.slug}
              className="scroll-mt-24 grid gap-8 py-16 lg:grid-cols-[minmax(0,1fr)_20rem]"
            >
              <Reveal>
                <PillarIcon slug={pillar.slug} colorVar={pillar.accent} size="lg" />
                <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-muted">{pillar.description}</p>

                <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                    Τεχνική προσέγγιση
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {pillar.technicalDetail}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {pillar.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex gap-2 text-sm text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: pillar.accent }}
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {scenario && (
                  <div className="mt-6 rounded-2xl border border-dashed border-border p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Ενδεικτικό σενάριο — {scenario.label} (υποθετικό
                      παράδειγμα, όχι πραγματικός πελάτης)
                    </p>
                    <p className="mt-3 text-sm text-muted">
                      <span className="font-semibold text-foreground">
                        Πρόβλημα:{" "}
                      </span>
                      {scenario.problem}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      <span className="font-semibold text-foreground">
                        Προσέγγιση:{" "}
                      </span>
                      {scenario.approach}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      <span className="font-semibold text-foreground">
                        Αποτέλεσμα:{" "}
                      </span>
                      {scenario.result}
                    </p>
                  </div>
                )}
              </Reveal>

              <Reveal delayMs={100} className="card-surface h-fit rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                  Για ποιον
                </p>
                <p className="mt-2 text-sm text-muted">{pillar.audience}</p>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    pillar.title
                  )}`}
                  className="mt-6 inline-flex whitespace-nowrap rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  {pillar.cta} →
                </a>
              </Reveal>
            </div>
          );
        })}
      </section>

      <section className="border-t border-border bg-surface">
        <Reveal className="container-page py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Συχνές ερωτήσεις
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-2 text-sm text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
