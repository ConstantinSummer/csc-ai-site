import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.founderName} | Ιδρυτής`,
  description:
    "Υποψήφιος Διδάκτορας ΕΚΠΑ σε AI & ασύρματη συνδεσιμότητα, ιδρυτής του Computer Science Center (CSC). Περισσότερα από 22 χρόνια επαγγελματικής και ακαδημαϊκής δραστηριότητας στην Ελλάδα και το εξωτερικό.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${siteConfig.founderName} | Ιδρυτής του CSC AI Solutions`,
    description:
      "Υποψήφιος Διδάκτορας ΕΚΠΑ σε AI & ασύρματη συνδεσιμότητα, ιδρυτής του Computer Science Center (CSC).",
    url: "/about",
  },
  twitter: {
    title: `${siteConfig.founderName} | Ιδρυτής του CSC AI Solutions`,
    description:
      "Υποψήφιος Διδάκτορας ΕΚΠΑ σε AI & ασύρματη συνδεσιμότητα, ιδρυτής του Computer Science Center (CSC).",
  },
};

const hl = "text-foreground";

const studies = [
  {
    degree: "Υποψήφιος Διδάκτορας",
    institution:
      "Τμήμα Πληροφορικής και Τηλεπικοινωνιών, Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
    detail: "Δικτυακά συστήματα ασύρματης επικοινωνίας με Τεχνητή Νοημοσύνη.",
  },
  {
    degree: "MSc Artificial Intelligence",
    institution: "University of East London",
    detail: "MSc in Computer Science με εξειδίκευση στην Τεχνητή Νοημοσύνη.",
  },
  {
    degree: "MSc Πληροφοριακά και Επικοινωνιακά Συστήματα",
    institution: "Ανοικτό Πανεπιστήμιο Κύπρου",
    detail: "Κατεύθυνση Ευφυή Συστήματα.",
  },
  {
    degree: "Πτυχίο Πληροφορικής",
    institution: "Ελληνικό Ανοικτό Πανεπιστήμιο",
    detail: "",
  },
  {
    degree: "Πτυχίο Πληροφορικής και Οικονομικών",
    institution: "Technische Hochschule Darmstadt",
    detail: "",
  },
];

const timeline = [
  {
    period: "Πριν το 2014",
    title: "Προγραμματιστής Εφαρμογών Πληροφορικής",
    org: "Fraunhofer-Institut für Graphische Datenverarbeitung (IGD), Darmstadt, Γερμανία",
    description:
      "Συμμετοχή σε ερευνητικά έργα πληροφοριακών συστημάτων, με συνέχιση της συνεργασίας για ακόμη 5 χρόνια με σύμβαση εργασίας στο Darmstadt.",
  },
  {
    period: "Πριν το 2014",
    title: "Project Manager",
    org: "EXODUS Α.Ε., Αθήνα",
    description:
      "Διαχείριση έργων πληροφορικής και παρακολούθηση της υλοποίησής τους για βασικό πελάτη την Τράπεζα Πειραιώς.",
  },
  {
    period: "Πριν το 2014",
    title: "Σύμβουλος Πληροφορικής",
    org: "DLT Media S.A. — Αθήνα, Στοκχόλμη, Ρότερνταμ",
    description:
      "Στρατηγική ανάπτυξη και ψηφιακός μετασχηματισμός θυγατρικών εταιρειών σε Ολλανδία, Σουηδία, Αγγλία, Νορβηγία, Δανία και Γερμανία.",
  },
  {
    period: "2012–2015",
    title: "IT Project Manager / International Business Development Manager",
    org: "SCIN / Waste Energy — Dubai Taxi Corporation & Roads and Transport Authority (RTA), Dubai",
    description:
      "Ηγήθηκα ενός σύνθετου έργου εξοικονόμησης καυσίμου και συνέλαβα το IS4T, ένα οικοσύστημα ευφυών υπηρεσιών για στόλους ταξί.",
  },
  {
    period: "2014–σήμερα",
    title: "Διευθύνων Τμήματος Ψηφιακής Έρευνας & Ανάπτυξης",
    org: "JOIN — Ελλάδα, Κύπρος, Μάλτα, Λίβανος",
    description:
      "Διαχείριση ομάδας 40 συνεργατών και ανάπτυξη IoT προϊόντων· επίβλεψη ψηφιακών υπηρεσιών και υλοποίηση νέων επιχειρηματικών ιδεών σε 4 χώρες.",
  },
  {
    period: "2014–σήμερα",
    title: "Επιστημονικός Συνεργάτης",
    org: "Πανεπιστήμιο Κύπρου (ΑΠΚΥ)",
    description:
      "Εξειδικευμένες συμβουλευτικές υπηρεσίες σε ερευνητικά έργα πληροφορικής και τεχνολογικές πρωτοβουλίες, με έμφαση στην τεχνική καθοδήγηση και την ερευνητική μεθοδολογία.",
  },
  {
    period: "Σήμερα",
    title: "Ιδρυτής, Computer Science Center (CSC)",
    org: "Ελλάδα",
    description:
      "Πάνω από 20.000 ώρες διδασκαλίας· εκπαίδευση και υποστήριξη εκατοντάδων φοιτητών και επαγγελματιών σε ψηφιακές δεξιότητες.",
  },
  {
    period: "Σήμερα",
    title: "Academic Program Leader",
    org: "Metropolitan College Πειραιά",
    description:
      "Προγράμματα Πληροφορικής πιστοποιημένα από το University of East London.",
  },
];

const featuredProjects = [
  {
    title: "Fuel-efficiency project — Dubai Taxi",
    description: (
      <>
        Ανάπτυξη πρωτοτύπου, εγκατάσταση στα οχήματα, επαναλαμβανόμενες
        δοκιμές και αξιοποίηση συστημάτων GPRS/GPS, τηλεμετρίας και ανάλυσης
        δεδομένων. Το πρόγραμμα οδήγησε σε{" "}
        <span className={hl}>μετρημένη μείωση κατανάλωσης καυσίμου 8–10%</span>
        , με μετρήσιμα οικονομικά, λειτουργικά και περιβαλλοντικά οφέλη.
      </>
    ),
    href: "/case-studies/dubai-taxi-ai#fuel-efficiency",
    linkLabel: "Δείτε το case study →",
  },
  {
    title: "IS4T — Intelligent Services for Taxis",
    description: (
      <>
        Ολοκληρωμένο οικοσύστημα ευφυών υπηρεσιών για στόλους ταξί: SaaS και
        REST υπηρεσίες, εφαρμογές για κινητές συσκευές, ανάλυση δεδομένων σε
        πραγματικό χρόνο, data mining,{" "}
        <span className={hl}>Τεχνητή Νοημοσύνη και multi-agent systems</span>.
        Εξασφαλίστηκε αποδοχή από τον πελάτη και έγκριση αγοράς στα Ηνωμένα
        Αραβικά Εμιράτα.
      </>
    ),
    href: "/case-studies/dubai-taxi-ai#is4t",
    linkLabel: "Δείτε αναλυτικά τις υπηρεσίες →",
  },
  {
    title: "MARL για Εικονικούς Σταθμούς Παραγωγής (VPP)",
    description: (
      <>
        Διπλωματική εργασία, MSc Artificial Intelligence: αποκεντρωμένος
        συντονισμός φωτοβολταϊκών, μπαταρίας και φορτίου μέσω{" "}
        <span className={hl}>πολυπρακτορικής ενισχυτικής μάθησης</span>, με
        αυστηρή στατιστική αξιολόγηση του συμβιβασμού κόστους-επικοινωνίας —
        θετικά και μη ευρήματα, όπως ακριβώς προέκυψαν.
      </>
    ),
    href: "/case-studies/vpp-marl",
    linkLabel: "Δείτε τη μελέτη →",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "ORCID", href: siteConfig.social.orcid },
];

const focusAreas = [
  "Στρατηγική & αξιολόγηση ετοιμότητας επιχειρήσεων για AI",
  "Ανάπτυξη εξατομικευμένων εφαρμογών AI",
  "Ευφυείς agents και multi-agent systems, agentic workflows",
  "Συστήματα RAG και knowledge graphs",
  "Αυτοματοποίηση διαδικασιών και διασύνδεση με υφιστάμενα συστήματα",
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
            legalName: siteConfig.legalName,
          },
          url: `${siteConfig.url}/about`,
          email: siteConfig.email,
          sameAs: [
            siteConfig.social.linkedin,
            siteConfig.social.github,
            siteConfig.social.orcid,
          ],
          alumniOf: studies.map((s) => ({
            "@type": "EducationalOrganization",
            name: s.institution,
          })),
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-blue)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative flex flex-col-reverse items-start gap-10 py-20 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {siteConfig.founderName}
            </h1>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted">
              Εκπαιδευτής Πληροφορικής · BSc, MSc (UEL &amp; ΑΠΚΥ), PhD candidate
            </p>
            <p className="mt-1 text-sm italic text-muted">
              Academic Program Leader &amp; Professor, Faculty of Computing —
              Software Engineer, Software Architect, Software Engineering
              Manager
            </p>
            <p className="mt-6 text-lg text-muted sm:text-xl">
              Η γέφυρα ανάμεσα σε ακαδημαϊκή{" "}
              <span className="gradient-text">έρευνα</span> αιχμής και
              πρακτική, άμεσα εφαρμόσιμη λύση για μια πραγματική επιχείρηση —
              όχι θεωρία, όχι hype.
            </p>
            <p className="mt-4 text-base text-muted">
              Ιδρυτής του {siteConfig.legalName}. Περισσότερα από 22 χρόνια
              επαγγελματικής και ακαδημαϊκής δραστηριότητας στην Ελλάδα και
              το εξωτερικό.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/instructor-photo.webp"
            alt={siteConfig.founderName}
            width={640}
            height={640}
            priority
            className="h-32 w-32 shrink-0 rounded-full object-cover sm:h-40 sm:w-40"
          />
        </Reveal>
      </section>

      <section className="container-page py-20">
        <Reveal className="max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Σπουδές
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {studies.map((item) => (
              <div
                key={item.degree}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="text-base font-medium text-foreground">
                  {item.degree}
                </p>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                {item.detail && (
                  <p className="mt-2 text-sm text-muted">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-4xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Διαδρομή
            </h2>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {timeline.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-cyan" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-cyan">
                    {item.period}
                  </p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted">{item.org}</p>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal className="max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Ενδεικτικά έργα
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <p className="text-base font-medium text-foreground">
                  {project.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  scroll={false}
                  className="mt-4 inline-block text-sm text-accent-cyan underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {project.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-4xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Πεδία εξειδίκευσης
            </h2>
            <ul className="mt-6 grid gap-3 text-base text-muted sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-xl border border-border bg-background px-4 py-3"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Reveal className="border-t border-border bg-surface">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Θέλετε να συζητήσουμε το{" "}
            <span className="gradient-text">δικό σας</span> project;
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex whitespace-nowrap rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Επικοινωνήστε μαζί μας
          </Link>
        </div>
      </Reveal>
    </>
  );
}
