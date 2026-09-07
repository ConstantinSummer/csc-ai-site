import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cloud Computing: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις",
  description:
    "Τι είναι το Cloud Computing, ποια μοντέλα υπάρχουν και πότε αξίζει πραγματικά η μετάβαση — με πρακτικά κριτήρια απόφασης για μικρομεσαίες επιχειρήσεις.",
  alternates: { canonical: "/cloud-computing" },
  openGraph: {
    title:
      "Cloud Computing: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις | CSC AI Solutions",
    description:
      "Τι είναι το Cloud Computing, ποια μοντέλα υπάρχουν και πότε αξίζει πραγματικά η μετάβαση — με πρακτικά κριτήρια απόφασης για μικρομεσαίες επιχειρήσεις.",
    url: "/cloud-computing",
  },
  twitter: {
    title:
      "Cloud Computing: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις | CSC AI Solutions",
    description:
      "Τι είναι το Cloud Computing, ποια μοντέλα υπάρχουν και πότε αξίζει πραγματικά η μετάβαση — με πρακτικά κριτήρια απόφασης για μικρομεσαίες επιχειρήσεις.",
  },
};

const serviceModels = [
  {
    title: "IaaS — Infrastructure as a Service",
    body: "Νοικιάζετε «ωμή» υπολογιστική υποδομή — servers, αποθηκευτικό χώρο, δίκτυο — χωρίς να χρειάζεται να αγοράσετε ή να συντηρήσετε φυσικό εξοπλισμό. Εσείς παραμένετε υπεύθυνοι για το λειτουργικό σύστημα, τις εφαρμογές και τα δεδομένα. Είναι η πιο ευέλικτη αλλά και η πιο απαιτητική επιλογή σε τεχνική διαχείριση.",
  },
  {
    title: "PaaS — Platform as a Service",
    body: "Ο πάροχος αναλαμβάνει επιπλέον το λειτουργικό σύστημα, τα runtime environments και τη βασική υποδομή βάσεων δεδομένων — εσείς επικεντρώνεστε στον κώδικα και την εφαρμογή σας. Ιδανικό για ομάδες ανάπτυξης λογισμικού που θέλουν λιγότερη ενασχόληση με «υδραυλικά» υποδομής.",
  },
  {
    title: "SaaS — Software as a Service",
    body: "Χρησιμοποιείτε ένα έτοιμο λογισμικό μέσω browser (π.χ. λογιστικό πρόγραμμα, CRM, εργαλείο email marketing) χωρίς καμία διαχείριση υποδομής — απλώς συνδρομή και χρήση. Η πλειονότητα των εργαλείων που ήδη χρησιμοποιεί μια σύγχρονη επιχείρηση είναι, στην ουσία, SaaS.",
  },
];

const deploymentModels = [
  {
    title: "Public Cloud",
    body: "Κοινόχρηστη υποδομή μεγάλων παρόχων (ενδεικτικά hyperscale πλατφόρμες όπως Amazon Web Services, Microsoft Azure ή Google Cloud), διαμοιρασμένη ανάμεσα σε πολλούς πελάτες με λογική απομόνωση. Χαμηλότερο αρχικό κόστος, μηδενική συντήρηση υλικού, γρήγορη εκκίνηση — η προεπιλογή για τις περισσότερες μικρομεσαίες επιχειρήσεις.",
  },
  {
    title: "Private Cloud",
    body: "Αποκλειστική υποδομή για μία μόνο επιχείρηση — είτε φιλοξενούμενη σε δικό της data center είτε σε αποκλειστικό τμήμα υποδομής παρόχου. Μεγαλύτερος έλεγχος και προσαρμογή, αλλά και σημαντικά μεγαλύτερο κόστος και ανάγκη για εξειδικευμένο προσωπικό.",
  },
  {
    title: "Hybrid Cloud",
    body: "Συνδυασμός on-premises υποδομής με public ή private cloud, με δεδομένα και φόρτο εργασίας να μετακινούνται μεταξύ τους ανάλογα με την ανάγκη — π.χ. ευαίσθητα δεδομένα παραμένουν τοπικά, ενώ η επεξεργασία αιχμής («burst») γίνεται στο cloud.",
  },
  {
    title: "Multi-cloud",
    body: "Χρήση περισσότερων του ενός παρόχων cloud ταυτόχρονα — συχνά για αποφυγή εξάρτησης από έναν πάροχο, αξιοποίηση συγκεκριμένων δυνατών σημείων του καθενός, ή λόγους κανονιστικής συμμόρφωσης. Αυξάνει την πολυπλοκότητα διαχείρισης, οπότε αξίζει μόνο όταν υπάρχει συγκεκριμένος λόγος γι' αυτό.",
  },
];

const useCases = [
  {
    title: "Email, αρχεία και συνεργασία",
    body: "Μετάβαση από τοπικούς file servers και mail servers σε cloud εναλλακτικές — λιγότερη συντήρηση, πρόσβαση από παντού, αυτόματα αντίγραφα ασφαλείας.",
  },
  {
    title: "Ηλεκτρονικό εμπόριο",
    body: "Ένα eshop φιλοξενημένο στο cloud απορροφά αιχμές επισκεψιμότητας (π.χ. Black Friday) χωρίς να χρειάζεται μόνιμη υποδομή διαστασιολογημένη για τη χειρότερη μέρα του χρόνου.",
  },
  {
    title: "Εφαρμογές & APIs για πελάτες",
    body: "Φιλοξενία εφαρμογών ή APIs που χρησιμοποιεί το κοινό ή οι συνεργάτες σας, με αυτόματη κλιμάκωση όταν αυξάνεται η χρήση, χωρίς χειροκίνητη παρέμβαση.",
  },
  {
    title: "Backup & disaster recovery",
    body: "Αντίγραφα ασφαλείας κρίσιμων δεδομένων σε άλλη γεωγραφική τοποθεσία από αυτή των γραφείων σας, ώστε μια βλάβη, πλημμύρα ή κλοπή εξοπλισμού να μην σημαίνει απώλεια δεδομένων.",
  },
  {
    title: "Ανάλυση δεδομένων & AI",
    body: "Εκπαίδευση ή εκτέλεση μοντέλων Machine Learning που απαιτούν υπολογιστική ισχύ (π.χ. GPUs) την οποία δεν έχει νόημα να αγοράσει μόνιμα μια μικρομεσαία επιχείρηση.",
  },
  {
    title: "Εποχικά / πρόσκαιρα έργα",
    body: "Υποδομή που χρειάζεται μόνο για συγκεκριμένο χρονικό διάστημα (π.χ. μια καμπάνια, ένα event) — πληρώνετε μόνο όσο τη χρησιμοποιείτε και την «σβήνετε» μετά.",
  },
];

export default function CloudComputingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Cloud Computing: Τι είναι και πώς αξιοποιείται στις επιχειρήσεις",
          description:
            "Τι είναι το Cloud Computing, ποια μοντέλα υπάρχουν και πότε αξίζει πραγματικά η μετάβαση — με πρακτικά κριτήρια απόφασης για μικρομεσαίες επιχειρήσεις.",
          url: `${siteConfig.url}/cloud-computing`,
          inLanguage: "el",
          isPartOf: {
            "@type": "WebSite",
            name: siteConfig.brandName,
            url: siteConfig.url,
          },
          about: "Cloud Computing",
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
          color="var(--accent-cyan)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <Breadcrumbs
            items={[
              { label: "Λεξικό AI & Τεχνολογίας", href: "/orologies" },
              { label: "Cloud Computing", href: "/cloud-computing" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="gradient-text">Cloud Computing</span>: Τι είναι
            και πώς αξιοποιείται στις επιχειρήσεις
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Cloud Computing (Υπολογιστικό Νέφος) είναι η χρήση υπολογιστικών
            πόρων — servers, αποθηκευτικό χώρο, βάσεις δεδομένων, δίκτυο,
            λογισμικό — μέσω διαδικτύου, από πάροχο, αντί να τους έχετε
            εγκατεστημένους και να τους συντηρείτε εσείς οι ίδιοι στα δικά σας
            γραφεία. Πληρώνετε ανάλογα με τη χρήση, χωρίς αρχική επένδυση σε
            εξοπλισμό.
          </p>
        </Reveal>
      </section>

      {/* Τι είναι / διαφορά από on-premises */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Πώς διαφέρει από την παραδοσιακή (on-premises) υποδομή
          </h2>
          <p className="mt-6 text-muted">
            Στο παραδοσιακό μοντέλο, μια επιχείρηση αγοράζει server, τον
            εγκαθιστά σε δικό της χώρο, τον συντηρεί, τον αναβαθμίζει και τον
            αντικαθιστά όταν παλιώσει — με σταθερό, «βυθισμένο» κόστος
            (CapEx) ανεξάρτητα από το πόσο τον χρησιμοποιεί. Στο Cloud
            Computing, ο πάροχος έχει ήδη την υποδομή· εσείς νοικιάζετε
            ακριβώς όσο χρειάζεστε, την αυξομειώνετε όποτε χρειάζεται, και
            πληρώνετε ως λειτουργικό έξοδο (OpEx). Το trade-off είναι
            λιγότερος άμεσος έλεγχος επί του φυσικού εξοπλισμού, σε αντάλλαγμα
            για πολύ λιγότερη τεχνική επιβάρυνση και μεγαλύτερη ευελιξία.
          </p>
        </Reveal>
      </section>

      {/* IaaS / PaaS / SaaS */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Μοντέλα υπηρεσιών: IaaS, PaaS, SaaS
            </h2>
            <p className="mt-6 text-muted">
              Τα τρία βασικά «επίπεδα» στα οποία μπορεί κανείς να «νοικιάσει»
              cloud υπηρεσίες — από την ωμή υποδομή μέχρι το έτοιμο λογισμικό:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceModels.map((model) => (
              <div key={model.title} className="card-surface rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue">
                  {model.title}
                </p>
                <p className="mt-3 text-sm text-muted">{model.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public / Private / Hybrid / Multi-cloud */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Μοντέλα ανάπτυξης: Public, Private, Hybrid, Multi-cloud
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {deploymentModels.map((model) => (
            <Reveal key={model.title}>
              <h3 className="text-lg font-semibold">{model.title}</h3>
              <p className="mt-2 text-muted">{model.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scalability / HA / Backup-DR */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Χαρακτηριστικά που κάνουν πραγματικά τη διαφορά
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <Reveal>
              <h3 className="font-semibold">Scalability &amp; Elasticity</h3>
              <p className="mt-2 text-sm text-muted">
                Η δυνατότητα να αυξάνετε (ή να μειώνετε) αυτόματα τους πόρους
                σας ανάλογα με τη ζήτηση — χωρίς να χρειάζεται να προβλέψετε
                εκ των προτέρων τη μέγιστη δυνατή επισκεψιμότητα ή φόρτο.
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h3 className="font-semibold">
                High Availability &amp; Resilience
              </h3>
              <p className="mt-2 text-sm text-muted">
                Η υποδομή είναι σχεδιασμένη ώστε η βλάβη ενός επιμέρους
                στοιχείου (server, data center) να μην σημαίνει διακοπή της
                υπηρεσίας — ο φόρτος ανακατευθύνεται αυτόματα αλλού.
              </p>
            </Reveal>
            <Reveal delayMs={160}>
              <h3 className="font-semibold">Backup &amp; Disaster Recovery</h3>
              <p className="mt-2 text-sm text-muted">
                Αυτοματοποιημένα αντίγραφα ασφαλείας σε διαφορετική
                γεωγραφική τοποθεσία, με σαφή διαδικασία και χρόνο
                αποκατάστασης σε περίπτωση καταστροφικού συμβάντος.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Security / compliance */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Ασφάλεια και το μοντέλο κοινής ευθύνης
          </h2>
          <p className="mt-6 text-muted">
            Η ασφάλεια στο cloud λειτουργεί με το{" "}
            <span className="text-foreground">shared responsibility
            model</span>: ο πάροχος είναι υπεύθυνος για την ασφάλεια{" "}
            <span className="text-foreground">της</span> υποδομής (φυσική
            ασφάλεια data centers, δίκτυο, virtualization), ενώ η επιχείρηση
            παραμένει υπεύθυνη για την ασφάλεια{" "}
            <span className="text-foreground">μέσα στην</span> υποδομή της —
            σωστές ρυθμίσεις πρόσβασης, κρυπτογράφηση δεδομένων, ενημερωμένο
            λογισμικό, διαχείριση κωδικών/δικαιωμάτων. Η πλειονότητα των
            περιστατικών ασφαλείας στο cloud οφείλεται σε λανθασμένες
            ρυθμίσεις από την πλευρά του πελάτη, όχι σε παραβίαση του
            παρόχου. Παράλληλα, ανάλογα με τον κλάδο σας, μπορεί να ισχύουν
            συγκεκριμένες υποχρεώσεις προστασίας δεδομένων (π.χ. GDPR) —
            αξίζει να ξέρετε πού ακριβώς φιλοξενούνται και πώς μεταφέρονται τα
            δεδομένα σας, πριν επιλέξετε πάροχο και τοποθεσία (region).
          </p>
        </Reveal>
      </section>

      {/* Κόστος */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Κόστος: CapEx vs OpEx, και πότε το cloud γίνεται ακριβότερο
            </h2>
            <p className="mt-6 text-muted">
              Το βασικό οικονομικό επιχείρημα του cloud είναι η μετατροπή
              κεφαλαιουχικής δαπάνης (CapEx — αγορά εξοπλισμού) σε λειτουργική
              δαπάνη (OpEx — μηνιαία συνδρομή, pay-as-you-go): πληρώνετε
              ακριβώς όσο χρησιμοποιείτε, χωρίς προκαταβολή για εξοπλισμό που
              ίσως δεν αξιοποιήσετε πλήρως. Αυτό δεν σημαίνει όμως ότι το
              cloud είναι πάντα φθηνότερο. Σε φόρτους εργασίας σταθερούς,
              προβλέψιμους και συνεχείς επί 24 ώρες το 24ωρο, το κόστος ενός
              cloud server μπορεί, μακροπρόθεσμα, να ξεπεράσει το κόστος
              αγοράς και απόσβεσης αντίστοιχου φυσικού εξοπλισμού — ειδικά αν
              δεν αξιοποιείται καθόλου η δυνατότητα αυτόματης κλιμάκωσης προς
              τα κάτω. Το cloud αποδίδει καλύτερα όταν ο φόρτος είναι
              μεταβλητός, απρόβλεπτος ή εποχικός.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vendor lock-in */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Vendor lock-in
          </h2>
          <p className="mt-6 text-muted">
            Όσο περισσότερο μια εφαρμογή χτίζεται γύρω από τις ιδιόκτητες
            (proprietary) υπηρεσίες ενός συγκεκριμένου παρόχου, τόσο πιο
            δύσκολη και ακριβή γίνεται η μελλοντική μετάβαση σε άλλον πάροχο ή
            η επιστροφή σε on-premises υποδομή. Δεν είναι απαραίτητα κακό —
            συχνά αξίζει η εξάρτηση σε αντάλλαγμα ταχύτητας ανάπτυξης — αλλά
            αξίζει να είναι μια συνειδητή απόφαση, όχι κάτι που ανακαλύπτεται
            μετά από χρόνια χρήσης.
          </p>
        </Reveal>
      </section>

      {/* Modern architecture: containers, serverless */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Σύγχρονη αρχιτεκτονική εφαρμογών
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Reveal>
              <h3 className="text-lg font-semibold">
                Containers &amp; Docker
              </h3>
              <p className="mt-2 text-muted">
                Ένα container «πακετάρει» μια εφαρμογή μαζί με ό,τι χρειάζεται
                για να τρέξει (βιβλιοθήκες, ρυθμίσεις), ώστε να λειτουργεί με
                τον ίδιο τρόπο παντού — στον υπολογιστή του developer, σε ένα
                δοκιμαστικό περιβάλλον ή στο cloud. Το Docker είναι το πιο
                διαδεδομένο εργαλείο container, και επιτρέπει μεταφορά
                εφαρμογών ανάμεσα σε παρόχους με σχετικά μικρή προσπάθεια.
              </p>
            </Reveal>
            <Reveal delayMs={100}>
              <h3 className="text-lg font-semibold">Serverless</h3>
              <p className="mt-2 text-muted">
                Αντί να διατηρείτε έναν server σε λειτουργία συνεχώς, γράφετε
                κώδικα που εκτελείται μόνο όταν χρειάζεται (π.χ. όταν έρθει
                ένα αίτημα ή ανέβει ένα αρχείο) — ο πάροχος αναλαμβάνει
                αυτόματα την υποδομή, και πληρώνετε μόνο για τον χρόνο
                εκτέλεσης. Ταιριάζει σε εργασίες ασυνεχείς ή απρόβλεπτες σε
                όγκο, όχι σε φόρτο συνεχούς, σταθερής λειτουργίας.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cloud + AI/automation */}
      <section className="container-page py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Cloud, Τεχνητή Νοημοσύνη και αυτοματοποίηση
          </h2>
          <p className="mt-6 text-muted">
            Σχεδόν κάθε σύγχρονη εφαρμογή{" "}
            <Link
              href="/machine-learning"
              className="text-foreground underline underline-offset-4"
            >
              Machine Learning
            </Link>{" "}
            ή Generative AI τρέχει πάνω σε cloud υποδομή — η εκπαίδευση
            μοντέλων απαιτεί υπολογιστική ισχύ (συχνά GPUs) που σπάνια έχει
            νόημα να αγοράσει μόνιμα μια μικρομεσαία επιχείρηση, ενώ η
            λειτουργία{" "}
            <Link
              href="/orologies#ai-agents"
              className="text-foreground underline underline-offset-4"
            >
              AI agents
            </Link>{" "}
            και{" "}
            <Link
              href="/orologies#agentic-workflows"
              className="text-foreground underline underline-offset-4"
            >
              agentic workflows
            </Link>{" "}
            βασίζεται σε cloud APIs που κλιμακώνουν αυτόματα ανάλογα με τη
            χρήση. Με άλλα λόγια, το cloud δεν είναι απλώς «αποθήκευση
            αρχείων» — είναι συχνά προϋπόθεση για να αξιοποιήσει μια
            επιχείρηση σοβαρά το σημερινό AI, χωρίς να επενδύσει η ίδια σε
            εξειδικευμένο εξοπλισμό.
          </p>
        </Reveal>
      </section>

      {/* Use cases ΜμΕ */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Πρακτικές εφαρμογές για μικρές και μεσαίες επιχειρήσεις
            </h2>
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
              Πότε αξίζει πραγματικά η μετάβαση
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Ο φόρτος εργασίας είναι μεταβλητός, εποχικός ή δύσκολα
                προβλέψιμος
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Ο υπάρχων εξοπλισμός πλησιάζει τέλος ζωής και χρειάζεται
                ούτως ή άλλως αντικατάσταση
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Χρειάζεστε αξιόπιστο backup/disaster recovery που σήμερα δεν
                υπάρχει καθόλου
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue"
                />
                Σχεδιάζετε να αναπτύξετε εφαρμογές, APIs ή λύσεις AI που
                χρειάζονται ευέλικτη υποδομή
              </li>
            </ul>
          </Reveal>
          <Reveal delayMs={100}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-violet">
              Πότε ΔΕΝ είναι απαραίτητα η καλύτερη λύση
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Ο φόρτος είναι σταθερός, προβλέψιμος και συνεχής, και ο
                υπάρχων εξοπλισμός καλύπτει επαρκώς τις ανάγκες
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Υπάρχουν αυστηροί κανονιστικοί ή συμβατικοί περιορισμοί που
                απαιτούν τα δεδομένα να παραμένουν αποκλειστικά τοπικά
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Δεν υπάρχει κανένας εσωτερικά ή εξωτερικά που να μπορεί να
                διαχειριστεί σωστά τις ρυθμίσεις ασφαλείας — το ρίσκο λάθους
                ρύθμισης υπερτερεί του οφέλους
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                />
                Η μετάβαση γίνεται μόνο επειδή «έτσι κάνουν όλοι», χωρίς
                συγκεκριμένο πρόβλημα προς λύση
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Migration + checklist */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-20">
          <Reveal className="max-w-3xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
              Cloud migration: checklist πριν μετακινηθείτε
            </h2>
            <p className="mt-6 text-muted">
              Η μετάβαση στο cloud δεν είναι απλώς «αντιγραφή» της υπάρχουσας
              υποδομής σε άλλο μέρος — είναι ευκαιρία να επανεξετάσετε τι
              πραγματικά χρειάζεστε. Πριν ξεκινήσετε, αξίζει να έχετε σαφή
              απάντηση στα εξής:
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
                />
                Ποια δεδομένα και εφαρμογές μεταφέρονται πρώτα, και ποια
                παραμένουν προς το παρόν on-premises
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
                />
                Ποιες κανονιστικές υποχρεώσεις (π.χ. προστασία δεδομένων)
                ισχύουν για τον κλάδο σας, και πού επιτρέπεται να
                φιλοξενούνται τα δεδομένα
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
                />
                Ποιο θα είναι το ρεαλιστικό μηνιαίο κόστος σε πλήρη χρήση —
                όχι μόνο η αρχική εκτίμηση
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
                />
                Ποιος αναλαμβάνει, εσωτερικά ή εξωτερικά, τη διαχείριση
                ασφαλείας και ρυθμίσεων μετά τη μετάβαση
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
                />
                Ποιο είναι το σχέδιο επιστροφής (rollback) αν κάτι δεν πάει
                όπως αναμενόταν στη μετάβαση
              </li>
            </ul>
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
              Η σωστή αφετηρία δεν είναι «ποιον πάροχο cloud να διαλέξουμε»
              αλλά «τι πραγματικά χρειαζόμαστε σήμερα, και τι θα χρειαστούμε
              σε 2-3 χρόνια». Ένα{" "}
              <Link
                href="/services#ai-readiness-audit"
                className="text-foreground underline underline-offset-4"
              >
                AI Strategy &amp; Readiness Audit
              </Link>{" "}
              αξιολογεί και το κομμάτι της υποδομής σας ως μέρος της γενικότερης
              ετοιμότητας, και η{" "}
              <Link
                href="/services#ai-development"
                className="text-foreground underline underline-offset-4"
              >
                Ανάπτυξη AI Εφαρμογών &amp; Λύσεων
              </Link>{" "}
              αναλαμβάνει την υλοποίηση εφαρμογών και ενσωματώσεων πάνω σε
              σύγχρονη, cloud-native αρχιτεκτονική.
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
