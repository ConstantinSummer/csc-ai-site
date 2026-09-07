import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Λεξικό AI & Τεχνολογίας για Επιχειρήσεις",
  description:
    "Καθαρές, πρακτικές εξηγήσεις όρων Τεχνητής Νοημοσύνης και σύγχρονης τεχνολογίας — για επιχειρηματίες, στελέχη και decision makers, χωρίς περιττή ορολογία.",
  alternates: { canonical: "/orologies" },
  openGraph: {
    title: "Λεξικό AI & Τεχνολογίας για Επιχειρήσεις | CSC AI Solutions",
    description:
      "Καθαρές, πρακτικές εξηγήσεις όρων Τεχνητής Νοημοσύνης και σύγχρονης τεχνολογίας — για επιχειρηματίες και decision makers.",
    url: "/orologies",
  },
  twitter: {
    title: "Λεξικό AI & Τεχνολογίας για Επιχειρήσεις | CSC AI Solutions",
    description:
      "Καθαρές, πρακτικές εξηγήσεις όρων Τεχνητής Νοημοσύνης και σύγχρονης τεχνολογίας — για επιχειρηματίες και decision makers.",
  },
};

type Term = {
  id: string;
  term: string;
  englishNote?: string;
  body: React.ReactNode;
};

const terms: Term[] = [
  {
    id: "artificial-intelligence",
    term: "Artificial Intelligence (Τεχνητή Νοημοσύνη)",
    body: (
      <>
        Ο ευρύτερος όρος για συστήματα λογισμικού που εκτελούν εργασίες οι
        οποίες παραδοσιακά θεωρούνταν ότι απαιτούν ανθρώπινη νοημοσύνη —
        αναγνώριση προτύπων, πρόβλεψη, λήψη απόφασης, κατανόηση και
        παραγωγή γλώσσας. Δεν είναι μία τεχνολογία αλλά μια κατηγορία:
        περιλαμβάνει από απλά συστήματα κανόνων μέχρι σύγχρονα{" "}
        <Link
          href="#large-language-models"
          className="text-foreground underline underline-offset-4"
        >
          Large Language Models
        </Link>
        .
      </>
    ),
  },
  {
    id: "machine-learning",
    term: "Machine Learning (Μηχανική Μάθηση)",
    body: (
      <>
        Το υποπεδίο του AI όπου ένα σύστημα «μαθαίνει» να αναγνωρίζει
        μοτίβα και να κάνει προβλέψεις μέσα από παραδείγματα δεδομένων,
        αντί να προγραμματίζεται ρητά με κανόνες για κάθε περίπτωση. Είναι
        ο μηχανισμός πίσω από τις περισσότερες σύγχρονες εφαρμογές AI, από
        την πρόβλεψη ζήτησης μέχρι τα σημερινά γλωσσικά μοντέλα.{" "}
        <Link
          href="/machine-learning"
          className="text-foreground underline underline-offset-4"
        >
          Δείτε την αναλυτική σελίδα →
        </Link>
      </>
    ),
  },
  {
    id: "deep-learning",
    term: "Deep Learning (Βαθιά Μάθηση)",
    body: (
      <>
        Υποσύνολο του Machine Learning που χρησιμοποιεί νευρωνικά δίκτυα
        με πολλά διαδοχικά επίπεδα (layers), ικανά να μάθουν πολύ σύνθετα
        μοτίβα από μεγάλο όγκο δεδομένων. Είναι η τεχνολογία πίσω από την
        αναγνώριση εικόνας, ομιλίας και φυσικής γλώσσας — και τη βάση πάνω
        στην οποία χτίζεται το σημερινό Generative AI.
      </>
    ),
  },
  {
    id: "generative-ai",
    term: "Generative AI (Γενετική Τεχνητή Νοημοσύνη)",
    body: (
      <>
        Συστήματα AI εκπαιδευμένα να{" "}
        <span className="text-foreground">παράγουν</span> νέο περιεχόμενο
        — κείμενο, εικόνα, ήχο, κώδικα — αντί απλώς να ταξινομούν ή να
        προβλέπουν έναν αριθμό. Τα εργαλεία τύπου ChatGPT, Gemini ή Claude
        είναι εφαρμογές Generative AI, βασισμένες σε Large Language
        Models.
      </>
    ),
  },
  {
    id: "large-language-models",
    term: "Large Language Models (LLMs)",
    body: (
      <>
        Μοντέλα Deep Learning εκπαιδευμένα σε τεράστιο όγκο κειμένου, ώστε
        να κατανοούν και να παράγουν φυσική γλώσσα με τρόπο ευέλικτο και
        γενικευμένο — όχι μόνο για μία, προκαθορισμένη εργασία. Αποτελούν
        τη βάση σχεδόν κάθε σύγχρονου AI chatbot, βοηθού γραφής ή{" "}
        <Link
          href="#ai-agents"
          className="text-foreground underline underline-offset-4"
        >
          AI agent
        </Link>
        .
      </>
    ),
  },
  {
    id: "rag",
    term: "Retrieval-Augmented Generation (RAG)",
    body: (
      <>
        Τεχνική όπου ένα γλωσσικό μοντέλο, πριν απαντήσει, πρώτα{" "}
        <span className="text-foreground">ανακτά</span> σχετικές
        πληροφορίες από μια συγκεκριμένη πηγή (π.χ. τα έγγραφα ή τη βάση
        γνώσης μιας επιχείρησης) και μετά διατυπώνει την απάντησή του με
        βάση αυτές — αντί να βασίζεται μόνο σε ό,τι «θυμάται» από την
        εκπαίδευσή του. Μειώνει σημαντικά τα λάθη/εφευρέσεις (hallucinations)
        και επιτρέπει σε ένα AI σύστημα να απαντά με βάση την πραγματική,
        ενημερωμένη γνώση μιας επιχείρησης.
      </>
    ),
  },
  {
    id: "ai-agents",
    term: "AI Agents (Πράκτορες AI)",
    body: (
      <>
        Συστήματα AI που δεν απαντούν απλώς σε μία ερώτηση, αλλά μπορούν
        να αναλάβουν έναν στόχο, να τον αναλύσουν σε βήματα, να
        χρησιμοποιήσουν εργαλεία (αναζήτηση, APIs, βάσεις δεδομένων) και να
        ενεργήσουν — ενδεχομένως και χωρίς ανθρώπινη επίβλεψη σε κάθε
        βήμα. Η{" "}
        <Link
          href="/services#ai-development"
          className="text-foreground underline underline-offset-4"
        >
          ανάπτυξη AI agents
        </Link>{" "}
        είναι σήμερα από τις πιο πρακτικές εφαρμογές AI για επιχειρήσεις,
        ακριβώς επειδή δεν παράγουν μόνο κείμενο — εκτελούν εργασίες.
      </>
    ),
  },
  {
    id: "agentic-workflows",
    term: "Agentic Workflows (Ροές Εργασίας με Αυτόνομους Πράκτορες)",
    body: (
      <>
        Ο συντονισμός ενός ή περισσότερων AI agents σε μια αλληλουχία
        βημάτων που αναπαράγει μια πραγματική επιχειρηματική διαδικασία —
        π.χ. λήψη ενός αιτήματος πελάτη, έλεγχος διαθεσιμότητας, σύνταξη
        απάντησης, ενημέρωση συστήματος. Η διαφορά από ένα απλό chatbot
        είναι ότι υπάρχει πραγματική ροή εργασίας πίσω από τη συνομιλία,
        με πολλαπλά βήματα και αποφάσεις.
      </>
    ),
  },
  {
    id: "nlp",
    term: "Natural Language Processing (Επεξεργασία Φυσικής Γλώσσας)",
    body: (
      <>
        Το πεδίο του AI που ασχολείται με την κατανόηση, ανάλυση και
        παραγωγή ανθρώπινης γλώσσας από υπολογιστές — από απλή ανάλυση
        συναισθήματος (sentiment analysis) σε κριτικές πελατών, μέχρι τα
        σημερινά LLMs. Προϋπάρχει του Generative AI, αλλά τα δύο πεδία
        συχνά ταυτίζονται σήμερα στην πράξη.
      </>
    ),
  },
  {
    id: "computer-vision",
    term: "Computer Vision (Όραση Υπολογιστών)",
    body: (
      <>
        Το πεδίο του AI που επιτρέπει σε ένα σύστημα να «διαβάζει» και να
        ερμηνεύει εικόνες ή βίντεο — αναγνώριση αντικειμένων, ανίχνευση
        ελαττωμάτων σε γραμμή παραγωγής, ανάγνωση εγγράφων/τιμολογίων
        (OCR), έλεγχος πληρότητας ραφιών σε κατάστημα. Χρησιμοποιεί κατά
        κανόνα Deep Learning.
      </>
    ),
  },
  {
    id: "mlops",
    term: "MLOps",
    body: (
      <>
        Οι πρακτικές και τα εργαλεία για την αξιόπιστη λειτουργία ενός
        μοντέλου Machine Learning σε πραγματικές συνθήκες παραγωγής —
        παρακολούθηση της απόδοσής του με τον καιρό, ανίχνευση υποβάθμισης
        (όταν τα δεδομένα του «σήμερα» αρχίζουν να διαφέρουν από αυτά της
        εκπαίδευσης), και ασφαλής επανεκπαίδευση/ενημέρωση. Χωρίς MLOps,
        ένα μοντέλο που δούλευε καλά στην αρχή μπορεί σιωπηλά να
        χειροτερεύει με τον καιρό.
      </>
    ),
  },
  {
    id: "apis",
    term: "APIs (Διεπαφές Προγραμματισμού Εφαρμογών)",
    body: (
      <>
        Ο «τυποποιημένος τρόπος» με τον οποίο δύο συστήματα λογισμικού
        επικοινωνούν μεταξύ τους — π.χ. ώστε ένας AI agent να μπορεί να
        διαβάσει ή να ενημερώσει δεδομένα σε ένα CRM ή ERP. Τα APIs είναι
        αυτό που επιτρέπει σε μια λύση AI να ενσωματωθεί ουσιαστικά στα
        υπάρχοντα συστήματα μιας επιχείρησης, αντί να λειτουργεί
        αποκομμένη από αυτά.
      </>
    ),
  },
  {
    id: "business-process-automation",
    term: "Business Process Automation (Αυτοματοποίηση Επιχειρηματικών Διαδικασιών)",
    body: (
      <>
        Η αυτοματοποίηση επαναλαμβανόμενων, καλά ορισμένων εργασιών μέσα σε
        μια επιχειρηματική διαδικασία — δεν απαιτεί πάντα Machine Learning
        ή AI· συχνά αρκεί απλή, ρητή λογική. Το AI (π.χ. μέσω{" "}
        <Link
          href="#agentic-workflows"
          className="text-foreground underline underline-offset-4"
        >
          agentic workflows
        </Link>
        ) γίνεται χρήσιμο όταν η διαδικασία περιλαμβάνει βήματα που
        απαιτούν κατανόηση μη δομημένου περιεχομένου (ένα email, ένα
        έγγραφο) και όχι μόνο σταθερούς κανόνες.
      </>
    ),
  },
];

export default function OrologiesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Λεξικό AI & Τεχνολογίας για Επιχειρήσεις",
          description:
            "Καθαρές, πρακτικές εξηγήσεις όρων Τεχνητής Νοημοσύνης και σύγχρονης τεχνολογίας — για επιχειρηματίες, στελέχη και decision makers.",
          url: `${siteConfig.url}/orologies`,
          inLanguage: "el",
          isPartOf: {
            "@type": "WebSite",
            name: siteConfig.brandName,
            url: siteConfig.url,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.brandName,
            legalName: siteConfig.legalName,
          },
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-violet)"
          className="right-0 -top-32 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <Breadcrumbs items={[{ label: "Λεξικό", href: "/orologies" }]} />
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="gradient-text">Λεξικό AI</span> &amp;
            Τεχνολογίας για Επιχειρήσεις
          </h1>
          <p className="mt-2 text-sm text-muted">
            AI &amp; Technology Glossary for Business
          </p>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Στις συζητήσεις γύρω από την Τεχνητή Νοημοσύνη προκύπτουν
            συχνά όροι που ακούγονται τεχνικοί, χωρίς να είναι απαραίτητα
            πολύπλοκοι. Εδώ εξηγούμε τους πιο βασικούς, με απλά λόγια και
            πρακτική οπτική — για επιχειρηματίες, στελέχη και decision
            makers που θέλουν να καταλαβαίνουν τι ακριβώς εξετάζουν, πριν
            αποφασίσουν πού αξίζει να επενδύσουν.
          </p>
        </Reveal>
      </section>

      {/* Index */}
      <section className="border-b border-border bg-background">
        <nav aria-label="Ευρετήριο όρων" className="container-page py-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Όροι σε αυτή τη σελίδα
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {terms.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                >
                  {t.term.split(" (")[0]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Terms */}
      <section className="container-page divide-y divide-border py-4">
        {terms.map((t) => (
          <div key={t.id} id={t.id} className="scroll-mt-24 py-10">
            <Reveal className="max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight">
                {t.term}
              </h2>
              <p className="mt-3 text-muted">{t.body}</p>
            </Reveal>
          </div>
        ))}
      </section>

      <Reveal className="border-t border-border bg-surface">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight">
            Θέλετε να δείτε πώς εφαρμόζονται{" "}
            <span className="gradient-text">στην πράξη</span>;
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
            Οι{" "}
            <Link
              href="/services"
              className="text-foreground underline underline-offset-4"
            >
              υπηρεσίες μας
            </Link>{" "}
            εξηγούν πώς αυτές οι τεχνολογίες μεταφράζονται σε συγκεκριμένες
            λύσεις για μια ελληνική επιχείρηση.
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
