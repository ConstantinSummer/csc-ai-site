import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Machine Learning: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις",
  description:
    "Τι είναι το Machine Learning, πώς λειτουργεί και πού δημιουργεί πραγματική επιχειρηματική αξία — με παραδείγματα, όρια και πρακτικά κριτήρια απόφασης.",
  alternates: { canonical: "/machine-learning" },
  openGraph: {
    title:
      "Machine Learning: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις | CSC AI Solutions",
    description:
      "Τι είναι το Machine Learning, πώς λειτουργεί και πού δημιουργεί πραγματική επιχειρηματική αξία — με παραδείγματα, όρια και πρακτικά κριτήρια απόφασης.",
    url: "/machine-learning",
  },
  twitter: {
    title:
      "Machine Learning: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις | CSC AI Solutions",
    description:
      "Τι είναι το Machine Learning, πώς λειτουργεί και πού δημιουργεί πραγματική επιχειρηματική αξία — με παραδείγματα, όρια και πρακτικά κριτήρια απόφασης.",
  },
};

const learningApproaches = [
  {
    title: "Supervised Learning (Επιβλεπόμενη Μάθηση)",
    body: "Το μοντέλο εκπαιδεύεται πάνω σε ιστορικά δεδομένα όπου η «σωστή απάντηση» είναι ήδη γνωστή — π.χ. χιλιάδες παλιές παραγγελίες με ετικέτα «παραδόθηκε εγκαίρως» ή «καθυστέρησε». Μαθαίνει τη σχέση ανάμεσα σε χαρακτηριστικά (features) και αποτέλεσμα, ώστε να προβλέπει το αποτέλεσμα για νέες, άγνωστες περιπτώσεις. Είναι η πιο συχνά χρησιμοποιούμενη προσέγγιση σε επιχειρηματικό περιβάλλον, γιατί τα περισσότερα προβλήματα (πρόβλεψη ζήτησης, έγκριση πιστωτικού κινδύνου, πρόβλεψη διαρροής πελατών) έχουν ήδη ιστορικό με γνωστή έκβαση.",
  },
  {
    title: "Unsupervised Learning (Μη Επιβλεπόμενη Μάθηση)",
    body: "Δεν υπάρχει γνωστή «σωστή απάντηση» — το μοντέλο ψάχνει μόνο του δομές, ομάδες ή κανονικότητες μέσα στα δεδομένα. Τυπικό παράδειγμα είναι το clustering πελατών σε ομάδες με κοινά χαρακτηριστικά αγοραστικής συμπεριφοράς, χωρίς να έχει οριστεί εκ των προτέρων ποιες ομάδες υπάρχουν. Χρήσιμο όταν ο στόχος είναι εξερεύνηση και κατανόηση δεδομένων, όχι πρόβλεψη συγκεκριμένου αποτελέσματος.",
  },
  {
    title: "Reinforcement Learning (Ενισχυτική Μάθηση)",
    body: "Ένας «πράκτορας» μαθαίνει μέσα από δοκιμή και σφάλμα, παίρνοντας ανταμοιβή ή ποινή ανάλογα με τις αποφάσεις του σε ένα περιβάλλον που αλλάζει με τον χρόνο. Είναι πιο σύνθετη και απαιτητική προσέγγιση, με εφαρμογές σε προβλήματα βελτιστοποίησης αλληλουχίας αποφάσεων (π.χ. διαχείριση ενέργειας, δρομολόγηση στόλου). Σπάνια είναι η πρώτη επιλογή για μια επιχείρηση που ξεκινά με AI — συνήθως αξίζει μόνο όταν οι απλούστερες προσεγγίσεις έχουν ήδη εξαντληθεί.",
  },
];

const useCases = [
  {
    title: "Forecasting (Πρόβλεψη ζήτησης/πωλήσεων)",
    body: "Πρόβλεψη μελλοντικής ζήτησης ή πωλήσεων με βάση ιστορικά δεδομένα, εποχικότητα και εξωτερικούς παράγοντες — βάση για καλύτερο προγραμματισμό αποθέματος και προσωπικού.",
  },
  {
    title: "Predictive Maintenance (Προβλεπτική συντήρηση)",
    body: "Ανίχνευση ενδείξεων που προηγούνται μιας βλάβης εξοπλισμού, ώστε η συντήρηση να γίνεται πριν τη διακοπή λειτουργίας και όχι μετά από αυτήν.",
  },
  {
    title: "Customer Segmentation (Τμηματοποίηση πελατών)",
    body: "Ομαδοποίηση πελατών με βάση πραγματική συμπεριφορά (όχι μόνο δημογραφικά), για πιο στοχευμένη επικοινωνία και προσφορές.",
  },
  {
    title: "Fraud / Anomaly Detection (Ανίχνευση απάτης/ανωμαλιών)",
    body: "Εντοπισμός συναλλαγών, καταχωρήσεων ή μοτίβων που αποκλίνουν σημαντικά από το «κανονικό», για έγκαιρη επισήμανση προς έλεγχο από άνθρωπο.",
  },
  {
    title: "Recommendations (Συστάσεις)",
    body: "Πρόταση προϊόντων, περιεχομένου ή ενεργειών με βάση το ιστορικό και τη συμπεριφορά παρόμοιων χρηστών ή πελατών.",
  },
  {
    title: "Demand Prediction (Πρόβλεψη φόρτου/χρήσης)",
    body: "Πρόβλεψη φόρτου εργασίας, επισκεψιμότητας ή χρήσης πόρων, για καλύτερο σχεδιασμό δυναμικότητας.",
  },
  {
    title: "Process Optimization (Βελτιστοποίηση διαδικασιών)",
    body: "Ανάλυση δεδομένων λειτουργίας για τον εντοπισμό σημείων συμφόρησης ή αναποτελεσματικότητας σε μια επιχειρηματική διαδικασία.",
  },
];

export default function MachineLearningPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Machine Learning: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις",
          description:
            "Τι είναι το Machine Learning, πώς λειτουργεί και πού δημιουργεί πραγματική επιχειρηματική αξία — με παραδείγματα, όρια και πρακτικά κριτήρια απόφασης.",
          url: `${siteConfig.url}/machine-learning`,
          inLanguage: "el",
          isPartOf: {
            "@type": "WebSite",
            name: siteConfig.brandName,
            url: siteConfig.url,
          },
          about: "Machine Learning",
          author: {
            "@type": "Person",
            name: siteConfig.founderName,
            alternateName: siteConfig.founderNameEn,
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
          color="var(--accent-blue)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <Breadcrumbs
            items={[
              { label: "Λεξικό", href: "/orologies" },
              { label: "Machine Learning", href: "/machine-learning" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="gradient-text">Machine Learning</span>{" "}
            (Μηχανική Μάθηση): Τι είναι και πώς αξιοποιείται στις
            επιχειρήσεις
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Machine Learning (Μηχανική Μάθηση) είναι το υποπεδίο της
            Τεχνητής Νοημοσύνης όπου ένα σύστημα «μαθαίνει» να αναγνωρίζει
            μοτίβα και να κάνει προβλέψεις μέσα από δεδομένα — χωρίς να
            έχει προγραμματιστεί ρητά, βήμα-βήμα, για κάθε πιθανή
            περίπτωση. Αντί να του δώσουμε κανόνες, του δείχνουμε
            παραδείγματα, και το ίδιο εξάγει τη λογική.
          </p>
        </Reveal>
      </section>

      {/* Σχέση με το AI */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Πώς σχετίζεται με την Τεχνητή Νοημοσύνη
          </h2>
          <p className="mt-6 text-muted">
            Η{" "}
            <span className="text-foreground">Τεχνητή Νοημοσύνη (AI)</span>{" "}
            είναι ο ευρύτερος όρος: κάθε σύστημα που εκτελεί εργασίες οι
            οποίες θεωρούνται ότι απαιτούν «νοημοσύνη» — αναγνώριση,
            πρόβλεψη, λήψη απόφασης, παραγωγή περιεχομένου. Το{" "}
            <span className="text-foreground">Machine Learning</span> είναι
            ο τρόπος με τον οποίο τα περισσότερα σύγχρονα συστήματα AI
            αποκτούν αυτή την ικανότητα: μέσα από εκπαίδευση σε δεδομένα,
            όχι μέσα από χειρόγραφους κανόνες. Δεν είναι κάθε AI Machine
            Learning (υπάρχουν και συστήματα βασισμένα σε ρητούς κανόνες),
            αλλά σχεδόν όλο το σημερινό AI που κάνει «θόρυβο» —
            chatbots, συστάσεις, αναγνώριση εικόνας — βασίζεται σε Machine
            Learning.
          </p>
        </Reveal>
      </section>

      {/* ML vs DL vs GenAI */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Machine Learning vs Deep Learning vs Generative AI
            </h2>
            <p className="mt-6 text-muted">
              Οι τρεις όροι συγχέονται συχνά, αλλά περιγράφουν διαφορετικά
              επίπεδα:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="card-surface rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
                Machine Learning
              </p>
              <p className="mt-3 text-sm text-muted">
                Η ευρύτερη οικογένεια μεθόδων: ένα σύστημα μαθαίνει από
                δεδομένα. Περιλαμβάνει απλές, δοκιμασμένες τεχνικές (π.χ.
                γραμμική παλινδρόμηση, δέντρα απόφασης) που λειτουργούν
                πολύ καλά με μικρότερο όγκο δεδομένων.
              </p>
            </div>
            <div className="card-surface rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-violet">
                Deep Learning
              </p>
              <p className="mt-3 text-sm text-muted">
                Υποσύνολο του Machine Learning που χρησιμοποιεί νευρωνικά
                δίκτυα με πολλά «επίπεδα» (layers). Χρειάζεται συνήθως πολύ
                περισσότερα δεδομένα και υπολογιστική ισχύ, αλλά διαπρέπει
                σε προβλήματα όπως αναγνώριση εικόνας, ήχου και φυσικής
                γλώσσας.
              </p>
            </div>
            <div className="card-surface rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                Generative AI
              </p>
              <p className="mt-3 text-sm text-muted">
                Υποσύνολο του Deep Learning εξειδικευμένο στην{" "}
                <span className="text-foreground">παραγωγή</span> νέου
                περιεχομένου (κείμενο, εικόνα, κώδικας) αντί για απλή
                ταξινόμηση ή πρόβλεψη αριθμού. Τα σημερινά Large Language
                Models ανήκουν εδώ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Τρεις προσεγγίσεις */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Οι τρεις βασικές προσεγγίσεις μάθησης
          </h2>
        </Reveal>
        <div className="mt-10 space-y-8">
          {learningApproaches.map((approach) => (
            <Reveal key={approach.title} className="max-w-3xl">
              <h3 className="text-lg font-semibold">{approach.title}</h3>
              <p className="mt-2 text-muted">{approach.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Πρακτικά παραδείγματα */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Πρακτικές εφαρμογές για επιχειρήσεις
            </h2>
            <p className="mt-6 text-muted">
              Ενδεικτικά, όχι εξαντλητικά, πεδία όπου το Machine Learning
              δημιουργεί μετρήσιμη αξία:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <Reveal
                key={useCase.title}
                className="card-surface rounded-2xl p-6"
              >
                <h3 className="font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-sm text-muted">{useCase.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Πότε αξίζει / πότε όχι */}
      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Πότε αξίζει πραγματικά
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Υπάρχει επαρκής όγκος ιστορικών δεδομένων που περιγράφουν
                το πρόβλημα
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Το πρόβλημα επαναλαμβάνεται συχνά, σε μεγάλη κλίμακα —
                αξίζει η επένδυση σε αυτοματοποίηση
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Μια «αρκετά καλή» πρόβλεψη έχει πραγματική επιχειρηματική
                αξία, ακόμα κι αν δεν είναι 100% ακριβής
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Υπάρχει τρόπος να αξιολογηθεί αντικειμενικά αν το μοντέλο
                «πετυχαίνει», με σαφή μετρική επιτυχίας
              </li>
            </ul>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-violet">
              Πότε ΔΕΝ χρειάζεται
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Το πρόβλημα λύνεται ήδη αξιόπιστα με απλή λογική («αν X
                τότε Y») — ένα σύνολο κανόνων ή ένα καλά σχεδιασμένο
                spreadsheet κάνει την ίδια δουλειά, φθηνότερα και πιο
                διαφανώς
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Δεν υπάρχουν αρκετά ή αρκετά καθαρά δεδομένα — ένα μοντέλο
                πάνω σε ελλιπή/ανακριβή δεδομένα δίνει ψευδή αίσθηση
                ασφάλειας
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Το πρόβλημα συμβαίνει σπάνια ή σε πολύ μικρή κλίμακα — το
                κόστος ανάπτυξης/συντήρησης δεν δικαιολογείται
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Χρειάζεται πλήρης διαφάνεια/αιτιολόγηση κάθε μεμονωμένης
                απόφασης (π.χ. ρυθμιστικοί λόγοι) και δεν υπάρχει πόρος για
                explainability
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Data requirements */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Τι δεδομένα χρειάζεται
            </h2>
            <p className="mt-6 text-muted">
              Η ποιότητα του μοντέλου εξαρτάται περισσότερο από την
              ποιότητα των δεδομένων παρά από τον αλγόριθμο. Στην πράξη,
              αυτό σημαίνει: αρκετός όγκος ιστορικού για να καλύπτει
              διαφορετικές περιπτώσεις (όχι μόνο τις «τυπικές»), δεδομένα
              που πραγματικά αντιστοιχούν στο πρόβλημα που θέλουμε να
              λύσουμε (όχι απλώς ό,τι «τυχαίνει» να υπάρχει αποθηκευμένο),
              συνέπεια στον τρόπο καταγραφής τους στο χρόνο, και σαφήνεια
              για το ποιο είναι το πραγματικό αποτέλεσμα που θέλουμε να
              προβλέψουμε. Πολύ συχνά, το μεγαλύτερο μέρος μιας σοβαρής
              δουλειάς Machine Learning δεν είναι ο αλγόριθμος αλλά ο
              καθαρισμός, η οργάνωση και η κατανόηση των δεδομένων πριν
              φτάσουμε καν εκεί.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ρίσκα / governance */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Ακρίβεια, μεροληψία, επεξηγησιμότητα, ιδιωτικότητα
          </h2>
          <p className="mt-6 text-muted">
            Ένα μοντέλο Machine Learning δεν είναι ποτέ αλάνθαστο — έχει
            πάντα ένα ποσοστό λάθους, και αξίζει να είναι γνωστό εκ των
            προτέρων, όχι να ανακαλύπτεται μετά την εφαρμογή. Αν τα
            ιστορικά δεδομένα περιέχουν προκαταλήψεις (bias) — π.χ. μια
            πολιτική που ευνοούσε συστηματικά συγκεκριμένη κατηγορία
            πελατών — το μοντέλο θα μάθει και θα αναπαράγει την ίδια
            προκατάληψη, όχι θα τη διορθώσει από μόνο του. Σε αποφάσεις
            που επηρεάζουν ανθρώπους (έγκριση δανείου, πρόσληψη, τιμολόγηση)
            η επεξηγησιμότητα — η δυνατότητα να εξηγηθεί{" "}
            <span className="text-foreground">γιατί</span> το μοντέλο
            κατέληξε σε μια απόφαση — είναι συχνά εξίσου σημαντική με την
            ακρίβεια. Τέλος, τα δεδομένα εκπαίδευσης πρέπει να χειρίζονται
            με τον ίδιο σεβασμό στην ιδιωτικότητα και τη νομιμότητα με
            οποιοδήποτε άλλο ευαίσθητο δεδομένο της επιχείρησης — η χρήση
            AI δεν αναστέλλει τις υποχρεώσεις προστασίας δεδομένων.
          </p>
        </Reveal>
      </section>

      {/* ML και σύγχρονο AI */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Machine Learning και το σημερινό AI
            </h2>
            <p className="mt-6 text-muted">
              Τα σημερινά{" "}
              <Link
                href="/orologies#large-language-models"
                className="text-foreground underline underline-offset-4"
              >
                Large Language Models
              </Link>
              , οι{" "}
              <Link
                href="/orologies#ai-agents"
                className="text-foreground underline underline-offset-4"
              >
                AI agents
              </Link>{" "}
              και τα συστήματα{" "}
              <Link
                href="/orologies#rag"
                className="text-foreground underline underline-offset-4"
              >
                RAG
              </Link>{" "}
              χτίζονται πάνω σε θεμέλια Machine Learning — είναι, στην
              ουσία, πολύ μεγάλα μοντέλα Deep Learning, εκπαιδευμένα σε
              τεράστιο όγκο κειμένου. Αυτό που άλλαξε τα τελευταία χρόνια
              δεν είναι το ίδιο το Machine Learning ως έννοια, αλλά η
              κλίμακα (δεδομένα, υπολογιστική ισχύ) και η ικανότητα των
              μοντέλων να γενικεύουν σε εργασίες για τις οποίες δεν
              εκπαιδεύτηκαν ρητά. Στην πράξη, πολλές επιχειρηματικές λύσεις
              σήμερα συνδυάζουν «κλασικό» Machine Learning (π.χ. ένα
              μοντέλο πρόβλεψης ζήτησης) με Generative AI (π.χ. έναν agent
              που εξηγεί την πρόβλεψη σε φυσική γλώσσα) — δεν είναι
              ανταγωνιστικές τεχνολογίες, αλλά συμπληρωματικές.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Πώς αξιοποιείται στη δική σας επιχείρηση + CTA */}
      <Reveal className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Πώς μπορεί να αξιοποιηθεί στην{" "}
              <span className="gradient-text">επιχείρησή σας</span>
            </h2>
            <p className="mt-4 text-muted">
              Η σωστή αφετηρία δεν είναι «πώς βάζουμε Machine Learning»
              αλλά «ποιο συγκεκριμένο πρόβλημα, με μετρήσιμη αξία, έχουμε
              ήδη τα δεδομένα να λύσουμε». Ένα{" "}
              <Link
                href="/services#ai-readiness-audit"
                className="text-foreground underline underline-offset-4"
              >
                AI Strategy &amp; Readiness Audit
              </Link>{" "}
              ξεκινά ακριβώς από εκεί, και η{" "}
              <Link
                href="/services#ai-development"
                className="text-foreground underline underline-offset-4"
              >
                Ανάπτυξη AI Εφαρμογών &amp; Λύσεων
              </Link>{" "}
              αναλαμβάνει την υλοποίηση, από το μοντέλο μέχρι την
              ενσωμάτωσή του στη δική σας ροή εργασίας.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact?topic=ai-readiness-audit"
                className="whitespace-nowrap rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Ζητήστε ένα Readiness Audit →
              </Link>
              <Link
                href="/orologies"
                className="whitespace-nowrap rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent-blue"
              >
                ← Πίσω στο Λεξικό
              </Link>
            </div>
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-xs text-muted">
            Επιμέλεια: Κωνσταντίνος Ζήτης — BSc, MSc, PhD(c) Computer
            Science · Academic Program Leader | AI &amp; Software
            Technology
          </p>
        </div>
      </Reveal>
    </>
  );
}
