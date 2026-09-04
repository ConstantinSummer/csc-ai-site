import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Study: Πολυπρακτορική Ενισχυτική Μάθηση για VPP",
  description:
    "Ακαδημαϊκή έρευνα (MSc Artificial Intelligence): αποκεντρωμένη βελτιστοποίηση πολιτικής σε Εικονικούς Σταθμούς Παραγωγής (VPP) μέσω πολυπρακτορικής ενισχυτικής μάθησης, με αυστηρή στατιστική αξιολόγηση του συμβιβασμού κόστους-επικοινωνίας.",
  alternates: { canonical: "/case-studies/vpp-marl" },
  openGraph: {
    title: "Πολυπρακτορική Ενισχυτική Μάθηση για VPP | CSC AI Solutions",
    description:
      "Έρευνα MSc AI: αποκεντρωμένος συντονισμός Εικονικού Σταθμού Παραγωγής με multi-agent reinforcement learning και περιορισμένη επικοινωνία.",
    url: "/case-studies/vpp-marl",
  },
  twitter: {
    title: "Πολυπρακτορική Ενισχυτική Μάθηση για VPP | CSC AI Solutions",
    description:
      "Έρευνα MSc AI: αποκεντρωμένος συντονισμός Εικονικού Σταθμού Παραγωγής με multi-agent reinforcement learning και περιορισμένη επικοινωνία.",
  },
};

const stats = [
  { value: "3", label: "ετερογενείς πράκτορες: φωτοβολταϊκά, μπαταρία, φορτίο" },
  { value: "8.784", label: "ωριαίες μετεωρολογικές παρατηρήσεις (Ιωάννινα, 2024)" },
  { value: "50%", label: "μείωση επικοινωνιακού φορτίου (μηχανιστικά επιβεβαιωμένη)" },
  { value: "12", label: "εκπαιδευμένα μοντέλα, πλήρως αναπαραγώγιμα (SHA-256)" },
];

export default function VppMarlCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Decentralized Policy Optimization in Virtual Power Plants (VPPs) via Multi-Agent Reinforcement Learning",
          description:
            "Ακαδημαϊκή έρευνα proof-of-concept για αποκεντρωμένο συντονισμό Εικονικού Σταθμού Παραγωγής (VPP) μέσω πολυπρακτορικής ενισχυτικής μάθησης, με αξιολόγηση του συμβιβασμού μεταξύ επικοινωνιακού κόστους και λειτουργικού κόστους.",
          about: "Multi-Agent Reinforcement Learning, Virtual Power Plants, Energy Systems",
          author: {
            "@type": "Organization",
            name: siteConfig.brandName,
            legalName: siteConfig.legalName,
          },
          url: `${siteConfig.url}/case-studies/vpp-marl`,
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-cyan)"
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
            Ακαδημαϊκή έρευνα — Διπλωματική εργασία, MSc Artificial
            Intelligence (2026)
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Αποκεντρωμένη βελτιστοποίηση πολιτικής σε{" "}
            <span className="gradient-text">Εικονικούς Σταθμούς Παραγωγής</span>{" "}
            (VPP)
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Πόσο μπορεί να περιοριστεί η επικοινωνία ανάμεσα σε αυτόνομους
            «πράκτορες» ενέργειας (φωτοβολταϊκά, μπαταρία, φορτίο) χωρίς να
            επιβαρυνθεί το λειτουργικό κόστος; Μια ελεγχόμενη ερευνητική
            μελέτη, με πλήρη διαφάνεια στα ευρήματά της — θετικά και μη.
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

      {/* The problem */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Το πρόβλημα
          </h2>
          <p className="mt-6 text-muted">
            Ένας Εικονικός Σταθμός Παραγωγής (Virtual Power Plant – VPP)
            συντονίζει κατανεμημένους ενεργειακούς πόρους — φωτοβολταϊκά,
            μπαταρίες, ευέλικτα φορτία — ώστε να λειτουργούν ως ενιαίο
            χαρτοφυλάκιο. Όταν οι τοπικοί ελεγκτές έχουν πρόσβαση μόνο σε
            μερική πληροφόρηση, η επικοινωνία μεταξύ τους έχει αξία — αλλά και
            κόστος: περιορισμένο εύρος ζώνης, καθυστερήσεις, εξάρτηση από
            υποδομή. Το ερευνητικό ερώτημα δεν είναι απλώς αν η επικοινωνία
            βελτιώνει τον έλεγχο, αλλά{" "}
            <span className="text-foreground">
              ποια ελάχιστη πληροφορία απαιτείται
            </span>{" "}
            για επαρκή συντονισμό.
          </p>
        </Reveal>
      </section>

      {/* Approach & findings */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Η προσέγγιση
            </h2>
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
                  Διατύπωση ως Αποκεντρωμένη Μερικώς Παρατηρήσιμη Μαρκοβιανή
                  Διαδικασία Απόφασης (Dec-POMDP), υλοποίηση σε Python με
                  PettingZoo και PyTorch
                </li>
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                  />
                  Σύγκριση δύο baseline χωρίς ανταλλαγή μηνυμάτων
                  (MAPPO/LocalActor και αρχιτεκτονικά αντιστοιχισμένο δίκτυο
                  πολιτικής γράφου) με μια πρωτότυπη μέθοδο περιορισμένης
                  επικοινωνίας: το Constrained Communication Policy Gradient
                  (CCPG)
                </li>
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                  />
                  Το CCPG συνδυάζει μηχανισμό προσοχής σε γράφο (graph
                  attention) με αυστηρό όριο ενός εισερχόμενου μηνύματος ανά
                  πράκτορα, ανά ώρα
                </li>
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                  />
                  Δεδομένα: 8.784 πραγματικές ωριαίες παρατηρήσεις καιρού
                  2024 για τα Ιωάννινα (Open-Meteo Historical API),
                  διαχωρισμένα χρονολογικά σε 7.344 ώρες εκπαίδευσης, 720
                  επικύρωσης και 720 τελικού ελέγχου
                </li>
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                  />
                  Τελική αξιολόγηση σε 30 μη επικαλυπτόμενα 24ωρα, με 5
                  στοχαστικές επαναλήψεις ανά ημέρα, σε 3 ανεξάρτητες
                  εκπαιδεύσεις με διαφορετική τυχαία αρχικοποίηση
                </li>
              </ul>
            </Reveal>

            <Reveal delayMs={100} className="card-surface rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-violet">
                Ευρήματα
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                  />
                  <span>
                    Η μηχανιστική υπόθεση επιβεβαιώθηκε:{" "}
                    <span className="text-foreground">
                      50% μείωση του επικοινωνιακού φορτίου
                    </span>{" "}
                    (4.608 έναντι 9.216 bytes ανά 24ωρο επεισόδιο)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                  />
                  <span>
                    Δεν τεκμηριώθηκε στατιστικά σημαντικό οικονομικό όφελος:
                    το CCPG είχε μέσο κόστος{" "}
                    <span className="text-foreground">
                      υψηλότερο κατά 1,04%
                    </span>{" "}
                    έναντι πλήρους επικοινωνίας (95% διάστημα εμπιστοσύνης:
                    −0,73€ έως +1,01€/ημέρα, p=0,559)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                  />
                  <span>
                    Η ίδια η εργασία περιγράφει τα ευρήματα ως{" "}
                    <span className="text-foreground">
                      «εξερευνητική τεκμηρίωση proof-of-concept, όχι
                      επιχειρησιακή επικύρωση»
                    </span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                  />
                  <span>
                    Πλήρης αναπαραγωγιμότητα: σταθεροποιημένες εκδόσεις
                    εξαρτήσεων, 12 αποθηκευμένα μοντέλα, πρωτογενή
                    αποτελέσματα, αρχείο τεκμηρίωσης προέλευσης και
                    αποτυπώματα SHA-256
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          <p className="mt-6 max-w-3xl text-xs text-muted">
            Η έρευνα εκπονήθηκε στο πλαίσιο διπλωματικής εργασίας για το MSc
            Artificial Intelligence (Metropolitan College / University of
            East London, υποβολή Αύγουστος 2026) και αποτελεί ελεγχόμενη
            προσομοίωση σε μικρή κλίμακα — όχι λειτουργία πραγματικού VPP. Τα
            ευρήματα παρουσιάζονται όπως ακριβώς προκύπτουν από την εργασία,
            συμπεριλαμβανομένων των στατιστικά μη σημαντικών αποτελεσμάτων.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Γιατί έχει σημασία
          </h2>
          <p className="mt-6 text-muted">
            Στη συμβουλευτική AI, η αξία δεν είναι μόνο τα εντυπωσιακά νούμερα
            — είναι και η{" "}
            <span className="text-foreground">
              τίμια αξιολόγηση του τι δουλεύει και τι όχι
            </span>
            , πριν μπει σε παραγωγική λειτουργία. Αυτή η μελέτη δείχνει πώς
            σχεδιάζεται και αξιολογείται σωστά ένα σύστημα πολυπρακτορικής
            ενισχυτικής μάθησης για ενεργειακά συστήματα: με ρητή διατύπωση
            του προβλήματος, στατιστικό έλεγχο αντί για υποκειμενική κρίση,
            και σαφή αναγνώριση των ορίων εγκυρότητας πριν διατυπωθεί
            οποιοσδήποτε ισχυρισμός επιχειρησιακής ετοιμότητας.
          </p>
        </Reveal>
      </section>

      <Reveal className="border-t border-border bg-surface">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Σκέφτεστε AI για{" "}
            <span className="gradient-text">ενεργειακά</span> ή άλλα σύνθετα
            συστήματα;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
            Από ακαδημαϊκή έρευνα αιχμής μέχρι πρακτική εφαρμογή — δείτε τις{" "}
            <Link href="/services" className="text-foreground underline underline-offset-4">
              υπηρεσίες μας
            </Link>{" "}
            ή επικοινωνήστε απευθείας.
          </p>
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
