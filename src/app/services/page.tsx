import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import GlowOrb from "@/components/GlowOrb";
import PillarIcon from "@/components/PillarIcon";
import { faqItems, servicePillars, siteConfig } from "@/lib/site";

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
        <div className="container-page relative py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Υπηρεσίες
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Δεν υπάρχει μία λύση για όλους. Κάθε πακέτο χτίζεται γύρω από
            τις πραγματικές ανάγκες της επιχείρησής σας, με έμφαση στην
            πρακτική υλοποίηση — όχι στη θεωρία.
          </p>
        </div>
      </section>

      <section className="container-page divide-y divide-border">
        {servicePillars.map((pillar) => (
          <div
            key={pillar.slug}
            id={pillar.slug}
            className="scroll-mt-24 grid gap-8 py-16 lg:grid-cols-[minmax(0,1fr)_20rem]"
          >
            <div>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border"
                style={{ background: "var(--surface-2)" }}
              >
                <PillarIcon slug={pillar.slug} colorVar={pillar.accent} />
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {pillar.title}
              </h2>
              <p className="mt-4 text-muted">{pillar.description}</p>
            </div>
            <div className="card-surface h-fit rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                Για ποιον
              </p>
              <p className="mt-2 text-sm text-muted">{pillar.audience}</p>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                  pillar.title
                )}`}
                className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {pillar.cta} →
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
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
        </div>
      </section>
    </>
  );
}
