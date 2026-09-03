import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import ScrollToHash from "@/components/ScrollToHash";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Study: Ευφυείς Υπηρεσίες AI για Στόλους Ταξί (Dubai)",
  description:
    "Πώς σχεδιάστηκε το IS4T — ένα οικοσύστημα ευφυών υπηρεσιών AI και multi-agent systems για ταξί στο Dubai — και πώς ένα project data science/ML πέτυχε μετρήσιμη, ακαδημαϊκά επικυρωμένη εξοικονόμηση καυσίμου.",
  alternates: { canonical: "/case-studies/dubai-taxi-ai" },
};

const stats = [
  { value: "58", label: "προτεινόμενες ευφυείς υπηρεσίες στο IS4T" },
  { value: "8–10%", label: "μετρημένη μείωση κατανάλωσης καυσίμου" },
  { value: "9 μήνες", label: "χρόνος απόσβεσης (ROI) του fuel-efficiency project" },
  { value: "15", label: "μέλη στη διεπιστημονική ερευνητική ομάδα" },
];

const awards = [
  "Βραβείο Ευφυούς Επιχειρηματικότητας",
  "2η θέση σε επενδυτικό διαγωνισμό καινοτομίας (1ος διαγωνισμός)",
  "2η θέση σε επενδυτικό διαγωνισμό καινοτομίας (2ος διαγωνισμός)",
];

const is4tCategories = [
  {
    title: "Οδηγική συμπεριφορά & Eco-driving",
    accent: "var(--accent-blue)",
    items: [
      "Real-time feedback στον οδηγό για την ποιότητα οδήγησης, με weekly/monthly/yearly αναφορές και σύστημα κατάταξης (ranking)",
      "Eco-driving coaching με υπολογισμό εξοικονόμησης καυσίμου και CO₂ ανά διαδρομή",
      "Driver behavior monitoring, ανάλυση ηλικίας/προφίλ οδηγού και εντοπισμός μοτίβων ασφαλούς οδήγησης",
    ],
  },
  {
    title: "Πρόβλεψη ζήτησης & δρομολόγηση",
    accent: "var(--accent-cyan)",
    items: [
      "Vehicular trajectory & demand-supply pattern mining πάνω σε δεδομένα GPS στόλου",
      "Πρόβλεψη hotspots ζήτησης ανά ώρα/ημέρα/καιρικές συνθήκες, με context-based filtering",
      "Clustering αλγόριθμοι για spatiotemporal ανάλυση σημείων επιβίβασης/αποβίβασης και «ελκυστικών» περιοχών",
    ],
  },
  {
    title: "Ευφυής ανάθεση πελάτη σε όχημα (iCAP)",
    accent: "var(--accent-violet)",
    items: [
      "Σχεδιασμός μηχανισμού (mechanism design) πολυπρακτορικών συστημάτων που αναθέτει πελάτες σε οχήματα σε πραγματικό χρόνο, με στόχο τη μεγιστοποίηση εσόδων οδηγού και ικανοποίησης πελάτη ταυτόχρονα",
      "Μοντελοποίηση 4 φάσεων ανάθεσης (αρχική ανάθεση, παραλαβή, παράδοση, αναμονή) με δυνατότητα δυναμικής επανα-ανάθεσης",
      "Μηχανισμός μηχανικής μάθησης που «μαθαίνει» μοτίβα ζήτησης και προσαρμόζει αυτόματα τις παραμέτρους του συστήματος με την πάροδο του χρόνου",
    ],
  },
  {
    title: "Επιχειρηματική ευφυΐα & εξατομίκευση",
    accent: "var(--accent-blue)",
    items: [
      "Big data & data mining για dynamic pricing ανά ζώνη/ώρα και στοχευμένη διαφήμιση σε επιβάτες",
      "Συστήματα loyalty/rewards για οδηγούς και πελάτες, βασισμένα σε ανάλυση συμπεριφοράς",
      "Reporting εργαλεία για τη διοίκηση, με στόχο τη συνεχή βελτίωση λειτουργικών αποφάσεων (self-evolving system)",
    ],
  },
];

export default function DubaiTaxiCaseStudyPage() {
  return (
    <>
      <ScrollToHash />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "IS4T — Intelligent Services for Taxis",
          description:
            "Οικοσύστημα ευφυών υπηρεσιών AI και multi-agent systems για στόλους ταξί, σχεδιασμένο στο πλαίσιο έργων στο Dubai (2012–2015).",
          about: "Artificial Intelligence, Multi-agent systems, Data Mining, Fleet Management",
          author: {
            "@type": "Organization",
            name: siteConfig.brandName,
            legalName: siteConfig.legalName,
          },
          url: `${siteConfig.url}/case-studies/dubai-taxi-ai`,
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-violet)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <Link
            href="/about"
            className="text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            ← Σχετικά
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent-cyan">
            Case study — Dubai, 2012–2015
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Ευφυείς υπηρεσίες{" "}
            <span className="gradient-text">Τεχνητής Νοημοσύνης</span> για
            στόλους ταξί
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Πριν γίνουν mainstream όροι όπως «agentic AI» ή «multi-agent
            systems», ένα διεθνές έργο στο Dubai σχεδίασε ένα ολοκληρωμένο
            οικοσύστημα ευφυών υπηρεσιών για ταξί — το IS4T — πάνω σε ένα ήδη
            αποδεδειγμένο, μετρήσιμο project εξοικονόμησης καυσίμου.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-page grid grid-cols-2 gap-6 py-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <span className="gradient-text">{stat.value}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IS4T — main emphasis */}
      <section id="is4t" className="scroll-mt-24 container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            IS4T — Intelligent Services for Taxis
          </h2>
          <p className="mt-6 text-muted">
            Το IS4T ήταν μια ολοκληρωμένη πρόταση προς τη Dubai Taxi
            Corporation και τη Roads and Transport Authority (RTA) για ένα
            οικοσύστημα{" "}
            <span className="text-foreground">
              58 ευφυών υπηρεσιών Τεχνητής Νοημοσύνης
            </span>{" "}
            πάνω στα δεδομένα ενός στόλου ταξί: από real-time τηλεμετρία και{" "}
            <span className="text-foreground">data mining</span> μέχρι{" "}
            <span className="text-foreground">multi-agent systems</span> για
            τη βέλτιστη ανάθεση πελατών σε οχήματα. Η πρόταση εξασφάλισε
            αποδοχή από τον πελάτη και έγκριση αγοράς στα Ηνωμένα Αραβικά
            Εμιράτα.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {awards.map((award) => (
              <span
                key={award}
                className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground"
              >
                {award}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {is4tCategories.map((category) => (
            <Reveal
              key={category.title}
              className="card-surface rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: category.accent }}
                />
                <h3 className="font-semibold tracking-tight">
                  {category.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: category.accent }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 max-w-3xl rounded-2xl border border-dashed border-border p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Η ιδέα πίσω από το iCAP
          </p>
          <p className="mt-4 text-lg italic text-foreground">
            «Γιατί ένα ταξί που αφήνει έναν πελάτη σε ξενοδοχείο πρέπει να
            επιστρέψει άδειο στο αεροδρόμιο; Ένας ψηφιακός πράκτορας θα
            μπορούσε να προτείνει την επόμενη κούρσα.»
          </p>
          <p className="mt-3 text-sm text-muted">
            Η σκέψη πίσω από το iCAP (Intelligent Customer Allocation
            Process) — μια πρώιμη εφαρμογή αρχών mechanism design και
            πολυπρακτορικών συστημάτων σε πραγματικό επιχειρηματικό πρόβλημα,
            χρόνια πριν ο όρος «agentic AI» γίνει ευρέως γνωστός.
          </p>
        </Reveal>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-surface">
        <Reveal className="container-page py-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Η ερευνητική ομάδα
          </h2>
          <p className="mt-6 max-w-3xl text-muted">
            Ο σχεδιασμός του IS4T υλοποιήθηκε από μια διεπιστημονική ομάδα 15
            ατόμων, με μέλη σε Ελλάδα, Κύπρο, Σουηδία, Γαλλία, Ολλανδία και
            Νέα Υόρκη, υπό τον συντονισμό του{" "}
            <Link href="/about" className="text-foreground underline underline-offset-4">
              Κωνσταντίνου Ζήτη
            </Link>{" "}
            ως Project Manager &amp; Project Leader. Στην ομάδα συμμετείχαν,
            μεταξύ άλλων:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-violet">
                Τεχνητή Νοημοσύνη & Ευφυείς Πράκτορες
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                Λοΐζος Μιχαήλ
              </p>
              <p className="mt-1 text-sm text-muted">
                Επίκουρος Καθηγητής, Ανοικτό Πανεπιστήμιο Κύπρου, Ιδρυτής και
                Διευθυντής του Computational Cognition Lab. Διδακτορικό
                (Ph.D.) στην Επιστήμη Υπολογιστών / Τεχνητή Νοημοσύνη από το
                Harvard University.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                Data Mining & Knowledge Discovery
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                Βασίλειος Βερύκιος
              </p>
              <p className="mt-1 text-sm text-muted">
                Καθηγητής, Ελληνικό Ανοικτό Πανεπιστήμιο. Διδακτορικό (Ph.D.)
                στην Επιστήμη Υπολογιστών από το Purdue University (ΗΠΑ).
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
                Big Data & Trajectory Mining
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                Γεράσιμος Μαρκέτος
              </p>
              <p className="mt-1 text-sm text-muted">
                Διδακτορικό (Ph.D.) σε Data Warehousing &amp; Trajectory
                Mining, με μεταπτυχιακό στα Πληροφοριακά Συστήματα από το
                UMIST Manchester.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted">
            Την υπόλοιπη ομάδα συμπλήρωναν μηχανικοί λογισμικού, αναλυτές
            συστημάτων και ειδικοί τηλεπικοινωνιών/hardware.
          </p>
        </Reveal>
      </section>

      {/* Fuel-efficiency project — foundation */}
      <section id="fuel-efficiency" className="scroll-mt-24 container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Η βάση: το project εξοικονόμησης καυσίμου
          </h2>
          <p className="mt-6 text-muted">
            Το IS4T χτίστηκε πάνω στην τεχνογνωσία ενός προγενέστερου,
            πλήρως υλοποιημένου έργου για τη Dubai Taxi Corporation και την
            RTA: ανάπτυξη hardware/software πρωτοτύπου (TTP), εγκατεστημένου
            σε οχήματα, με reverse engineering στο ECU (Electronic Control
            Unit) και αξιοποίηση δεδομένων GPRS/GPS τηλεμετρίας.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="card-surface rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
              Μεθοδολογία
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Custom μετρικός δείκτης απόδοσης οδήγησης («perf») από
                data mining pipeline: καθαρισμός, προεπεξεργασία, αυτόματη
                ανάλυση, μοντελοποίηση γραμμικής παλινδρόμησης
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Στατιστική επικύρωση αποτελεσμάτων με Welch t-test,
                Wilcoxon rank-sum test και Kolmogorov–Smirnov test
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Ανεξάρτητη ακαδημαϊκή επικύρωση της μεθοδολογίας από τον{" "}
                <span className="text-foreground">Βασίλειο Βερύκιο</span>,
                Καθηγητή στο Ελληνικό Ανοικτό Πανεπιστήμιο
              </li>
            </ul>
          </Reveal>

          <Reveal delayMs={100} className="card-surface rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-violet">
              Αποτελέσματα
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Μετρημένη μείωση κατανάλωσης καυσίμου{" "}
                <span className="text-foreground">8–10%</span> (εγγύηση
                ελάχιστου 8%, με δυνατότητα έως 12%)
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Απόσβεση επένδυσης (ROI) σε μόλις{" "}
                <span className="text-foreground">9 μήνες</span>
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Προβολές εξοικονόμησης καυσίμου και μείωσης εκπομπών CO₂ σε
                κλίμακα στόλου έως 25.000 οχημάτων
              </li>
            </ul>
          </Reveal>
        </div>

        <p className="mt-6 max-w-3xl text-xs text-muted">
          Τα οικονομικά μεγέθη της ευρύτερης πρότασης IS4T (έσοδα, ROI ανά
          όχημα) αποτελούσαν μέρος του επιχειρηματικού μοντέλου που
          παρουσιάστηκε σε επενδυτές/πελάτη, βασισμένα σε παραδοχές αγοράς
          της εποχής — σε αντίθεση με τα αποτελέσματα εξοικονόμησης
          καυσίμου, που προέκυψαν από πραγματική λειτουργία και μέτρηση.
        </p>
      </section>

      <Reveal className="border-t border-border bg-surface">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Θέλετε κάτι αντίστοιχο για τη{" "}
            <span className="gradient-text">δική σας</span> επιχείρηση;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
            Από στρατηγικό σχεδιασμό μέχρι ανάπτυξη εξειδικευμένων AI
            εφαρμογών — δείτε τις{" "}
            <Link href="/services" className="text-foreground underline underline-offset-4">
              υπηρεσίες μας
            </Link>{" "}
            ή επικοινωνήστε απευθείας.
          </p>
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
