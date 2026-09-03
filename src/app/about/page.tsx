import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.founderName} | Ιδρυτής`,
  description:
    "Υποψήφιος Διδάκτορας ΕΚΠΑ σε AI & ασύρματη συνδεσιμότητα, ιδρυτής του Computer Science Center (CSC), 22+ χρόνια εμπειρίας σε εκπαίδευση, ανάπτυξη λογισμικού και διεθνή τεχνολογικά έργα.",
  alternates: { canonical: "/about" },
};

const hl = "text-foreground";

const academicBackground = [
  <>
    Είμαι <span className={hl}>Υποψήφιος Διδάκτορας</span> στο Τμήμα
    Πληροφορικής και Τηλεπικοινωνιών του Εθνικού και Καποδιστριακού
    Πανεπιστημίου Αθηνών, με ερευνητικό αντικείμενο τα δικτυακά συστήματα
    ασύρματης επικοινωνίας που αξιοποιούν{" "}
    <span className={hl}>Τεχνητή Νοημοσύνη</span> για βιώσιμη συνδεσιμότητα.
    Κατέχω MSc in Computer Science με εξειδίκευση στην{" "}
    <span className={hl}>Artificial Intelligence</span> από το University of
    East London, καθώς και MSc στα Πληροφοριακά και Επικοινωνιακά Συστήματα,
    με κατεύθυνση στα Ευφυή Συστήματα, από το Ανοικτό Πανεπιστήμιο Κύπρου. Το
    ακαδημαϊκό μου υπόβαθρο συμπληρώνεται από πτυχίο Πληροφορικής του
    Ελληνικού Ανοικτού Πανεπιστημίου και πτυχίο Πληροφορικής και Οικονομικών
    από το Technische Hochschule Darmstadt.
  </>,
  <>
    Η ερευνητική και ακαδημαϊκή μου πορεία επικεντρώνεται στην{" "}
    <span className={hl}>Τεχνητή Νοημοσύνη</span>, τη{" "}
    <span className={hl}>Μηχανική Μάθηση</span>, τα ευφυή και{" "}
    <span className={hl}>πολυπρακτορικά συστήματα</span>, την ενισχυτική
    μάθηση, τα ασύρματα δίκτυα και τα κατανεμημένα συστήματα. Κεντρικός
    στόχος της δουλειάς μου είναι η σύνδεση της επιστημονικής έρευνας με
    λύσεις που μπορούν να εφαρμοστούν σε πραγματικές τεχνολογικές και
    επιχειρηματικές ανάγκες.
  </>,
];

const professionalExperience = [
  <>
    Διαθέτω περισσότερα από{" "}
    <span className={hl}>22 χρόνια επαγγελματικής και εκπαιδευτικής εμπειρίας</span>{" "}
    στην Πληροφορική, την ανάπτυξη λογισμικού και τη διοίκηση τεχνολογικών
    έργων, με δραστηριότητα τόσο στην Ελλάδα όσο και στο εξωτερικό. Έχω
    πραγματοποιήσει περισσότερες από{" "}
    <span className={hl}>20.000 ώρες διδασκαλίας</span>, ενώ ως{" "}
    <span className={hl}>ιδρυτής του Computer Science Center – CSC</span> έχω
    εκπαιδεύσει και υποστηρίξει εκατοντάδες φοιτητές και επαγγελματίες στην
    ανάπτυξη σύγχρονων ψηφιακών δεξιοτήτων.
  </>,
  <>
    Ιδιαίτερα σημαντικό μέρος της διεθνούς εμπειρίας μου αποτελεί η
    επαγγελματική μου δραστηριότητα στο{" "}
    <span className={hl}>Dubai</span>, στο πλαίσιο της συνεργασίας μου με τη{" "}
    <span className={hl}>SCIN / Waste Energy</span>. Από το 2012 έως το 2015
    εργάστηκα ως IT Project Manager και International Business Development
    Manager σε τεχνολογικά προγράμματα για τη{" "}
    <span className={hl}>
      Dubai Taxi Corporation και τη Roads and Transport Authority – RTA
    </span>
    . Ηγήθηκα ενός σύνθετου έργου εξοικονόμησης καυσίμου, από την ανάπτυξη
    του πρωτοτύπου και την εγκατάστασή του στα οχήματα μέχρι τις
    επαναλαμβανόμενες δοκιμές, τις διορθώσεις λογισμικού και την αξιοποίηση
    συστημάτων GPRS/GPS, τηλεμετρίας και ανάλυσης δεδομένων. Το πρόγραμμα
    οδήγησε σε{" "}
    <span className={hl}>μείωση της κατανάλωσης καυσίμου κατά περίπου 8–10%</span>
    , προσφέροντας μετρήσιμα οικονομικά, λειτουργικά και περιβαλλοντικά
    οφέλη.{" "}
    <Link
      href="/case-studies/dubai-taxi-ai#fuel-efficiency"
      scroll={false}
      className="text-accent-cyan underline underline-offset-4 transition-colors hover:text-foreground"
    >
      Δείτε το case study →
    </Link>
  </>,
  <>
    Στο ίδιο πλαίσιο συνέλαβα και ηγήθηκα του{" "}
    <span className={hl}>IS4T – Intelligent Services for Taxis</span>, ενός
    ολοκληρωμένου οικοσυστήματος ευφυών υπηρεσιών για στόλους ταξί. Η
    αρχιτεκτονική του περιλάμβανε υπηρεσίες SaaS και REST, εφαρμογές για
    κινητές συσκευές, ανάλυση δεδομένων σε πραγματικό χρόνο, data mining,{" "}
    <span className={hl}>Τεχνητή Νοημοσύνη και multi-agent systems</span>. Για
    το συγκεκριμένο έργο εξασφαλίστηκε{" "}
    <span className={hl}>
      αποδοχή από τον πελάτη και έγκριση αγοράς στα Ηνωμένα Αραβικά Εμιράτα
    </span>
    .{" "}
    <Link
      href="/case-studies/dubai-taxi-ai#is4t"
      scroll={false}
      className="text-accent-cyan underline underline-offset-4 transition-colors hover:text-foreground"
    >
      Δείτε αναλυτικά τις υπηρεσίες →
    </Link>
  </>,
  <>
    Σήμερα δραστηριοποιούμαι παράλληλα ως{" "}
    <span className={hl}>
      Academic Program Leader στο Metropolitan College Πειραιά
    </span>
    , σε προγράμματα Πληροφορικής πιστοποιημένα από το University of East
    London.
  </>,
  <>
    Το κύριο πεδίο εξειδίκευσής μου είναι η{" "}
    <span className={hl}>εφαρμοσμένη Τεχνητή Νοημοσύνη</span>: στρατηγική και
    αξιολόγηση ετοιμότητας επιχειρήσεων, ανάπτυξη εξατομικευμένων εφαρμογών
    AI, ευφυείς agents και multi-agent systems,{" "}
    <span className={hl}>agentic workflows</span>,{" "}
    <span className={hl}>συστήματα RAG, knowledge graphs</span>,
    αυτοματοποίηση διαδικασιών και διασύνδεση λύσεων AI με υφιστάμενα
    πληροφοριακά συστήματα.
  </>,
  <>
    Συνδυάζω την ακαδημαϊκή γνώση με τη διεθνή εμπειρία υλοποίησης,
    μετατρέποντας σύνθετες τεχνολογίες σε πρακτικές λύσεις με{" "}
    <span className={hl}>συγκεκριμένο και μετρήσιμο επιχειρηματικό αποτέλεσμα</span>.
  </>,
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
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-blue)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {siteConfig.founderName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Η γέφυρα ανάμεσα σε ακαδημαϊκή{" "}
            <span className="gradient-text">έρευνα</span> αιχμής και
            πρακτική, άμεσα εφαρμόσιμη λύση για μια πραγματική επιχείρηση —
            όχι θεωρία, όχι hype.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Ιδρυτής του {siteConfig.legalName}, με 22+ χρόνια συνεχούς
            παρουσίας στην εκπαίδευση και την ανάπτυξη λογισμικού στην
            Ελλάδα.
          </p>
        </Reveal>
      </section>

      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Ακαδημαϊκό υπόβαθρο
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            {academicBackground.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Επαγγελματική εμπειρία και εξειδικεύσεις
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              {professionalExperience.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="border-t border-border bg-surface">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Θέλετε να συζητήσουμε το{" "}
            <span className="gradient-text">δικό σας</span> project;
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex whitespace-nowrap rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Επικοινωνήστε μαζί μας
          </a>
        </div>
      </Reveal>
    </>
  );
}
