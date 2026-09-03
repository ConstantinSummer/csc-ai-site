import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import GlowOrb from "@/components/GlowOrb";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.founderName} | Ιδρυτής`,
  description:
    "Υποψήφιος Διδάκτορας ΕΚΠΑ σε AI & ασύρματη συνδεσιμότητα, ιδρυτής του CSC, 22+ χρόνια εμπειρίας σε εκπαίδευση και ανάπτυξη λογισμικού.",
  alternates: { canonical: "/about" },
};

const education = [
  {
    title:
      "Υποψήφιος Διδάκτορας, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
    detail:
      "Τμήμα Πληροφορικής & Τηλεπικοινωνιών — «Δικτυακά Συστήματα Ασύρματης Επικοινωνίας με Τεχνητή Νοημοσύνη για Βιώσιμη Συνδεσιμότητα»",
  },
  {
    title: "MSc Computer Science (Artificial Intelligence)",
    detail: "University of East London",
  },
  {
    title:
      "MSc Πληροφοριακά και Επικοινωνιακά Συστήματα (Ευφυή Συστήματα)",
    detail: "Ανοικτό Πανεπιστήμιο Κύπρου",
  },
  {
    title: "BSc Πληροφορικής",
    detail: "Ελληνικό Ανοικτό Πανεπιστήμιο",
  },
  {
    title: "BSc Πληροφορικής & Οικονομικών",
    detail: "Technische Hochschule Darmstadt",
  },
];

const experience = [
  {
    title: "Academic Program Leader",
    detail:
      "Metropolitan College Πειραιά — προγράμματα πιστοποιημένα από το University of East London",
  },
  {
    title: "Director of Digital R&D",
    detail:
      "JOIN S.A. — ηγείται ομάδας 40 ειδικών σε Ελλάδα, Κύπρο, Μάλτα και Λίβανο",
  },
  {
    title: "Ιδρυτής, Computer Science Center (CSC)",
    detail: "22+ χρόνια εμπειρίας, 20.000+ ώρες διδασκαλίας",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.founderName,
          alternateName: siteConfig.founderNameEn,
          jobTitle: "Founder, CSC AI Solutions",
          worksFor: {
            "@type": "Organization",
            name: siteConfig.brandName,
          },
          url: `${siteConfig.url}/about`,
          email: siteConfig.email,
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-blue)"
          className="-left-20 top-0 h-96 w-96"
        />
        <div className="container-page relative py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {siteConfig.founderName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Η γέφυρα ανάμεσα σε ακαδημαϊκή έρευνα αιχμής και πρακτική,
            άμεσα εφαρμόσιμη λύση για μια πραγματική επιχείρηση — όχι
            θεωρία, όχι hype.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-16 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Ακαδημαϊκό υπόβαθρο
          </h2>
          <ul className="mt-6 space-y-6">
            {education.map((item) => (
              <li key={item.title}>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Επαγγελματική εμπειρία
          </h2>
          <ul className="mt-6 space-y-6">
            {experience.map((item) => (
              <li key={item.title}>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Θέλετε να συζητήσουμε το δικό σας project;
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Επικοινωνήστε μαζί μας
          </a>
        </div>
      </section>
    </>
  );
}
