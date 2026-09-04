import type { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import { ObfuscatedEmail } from "@/components/ObfuscatedContact";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description:
    "Ποια δεδομένα συλλέγει το csc.com.gr μέσω της φόρμας επικοινωνίας, για ποιο σκοπό, πόσο καιρό τα κρατάμε και ποια δικαιώματα έχετε.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Πολιτική Απορρήτου | CSC AI Solutions",
    description:
      "Ποια δεδομένα συλλέγει το csc.com.gr μέσω της φόρμας επικοινωνίας, για ποιο σκοπό, πόσο καιρό τα κρατάμε και ποια δικαιώματα έχετε.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-blue)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Πολιτική <span className="gradient-text">Απορρήτου</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Σύντομα, σε απλή γλώσσα: τι συλλέγουμε, γιατί, και τι δικαιώματα
            έχετε πάνω σε αυτά τα δεδομένα.
          </p>
        </Reveal>
      </section>

      <section className="container-page py-16">
        <Reveal className="mx-auto max-w-2xl space-y-10 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Τι δεδομένα συλλέγουμε
            </h2>
            <p className="mt-3">
              Όταν συμπληρώνετε τη φόρμα επικοινωνίας, στέλνουμε στον εαυτό
              μας ένα email με: το όνομά σας, το τηλέφωνο ή/και το email σας
              (τουλάχιστον ένα από τα δύο είναι υποχρεωτικό), το θέμα και το
              μήνυμα που γράψατε. Καταγράφουμε επίσης τη διεύθυνση IP της
              συσκευής σας τη στιγμή της υποβολής, αποκλειστικά για τεχνικούς
              λόγους — αναφέρεται παρακάτω.
            </p>
            <p className="mt-3">
              Δεν χρησιμοποιούμε cookies παρακολούθησης, analytics τρίτων ή
              διαφημιστικά pixels σε αυτό το site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Γιατί συλλέγουμε τη διεύθυνση IP
            </h2>
            <p className="mt-3">
              Η IP χρησιμοποιείται αποκλειστικά για δύο τεχνικούς σκοπούς
              κατά της κατάχρησης της φόρμας: έναν απλό, προσωρινό περιορισμό
              πλήθους υποβολών ανά διεύθυνση (rate limiting) και εμφανίζεται
              μαζί με το μήνυμα ώστε να μπορούμε να εντοπίσουμε πρότυπα
              spam. Αυτός ο περιορισμός κρατιέται μόνο στη μνήμη του
              διακομιστή και διαγράφεται αυτόματα σε σύντομο χρονικό
              διάστημα — δεν αποθηκεύεται σε βάση δεδομένων. Ακολουθούμε την
              αρχή της ελαχιστοποίησης δεδομένων: συλλέγουμε μόνο ό,τι
              χρειάζεται για να σας απαντήσουμε και να προστατέψουμε τη
              φόρμα από κατάχρηση, τίποτα παραπάνω.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Πού αποθηκεύονται τα δεδομένα
            </h2>
            <p className="mt-3">
              Δεν διατηρούμε δική μας βάση δεδομένων με τα στοιχεία σας. Η
              υποβολή σας αποστέλλεται ως email μέσω της υπηρεσίας{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                Resend
              </a>{" "}
              (πάροχος αποστολής email — «εκτελών την επεξεργασία» κατά την
              έννοια του ΓΚΠΔ) και καταλήγει στα Εισερχόμενα του ιδρυτή,
              όπου ισχύουν οι όροι απορρήτου του δικού του email πάροχου.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Νομική βάση &amp; σκοπός
            </h2>
            <p className="mt-3">
              Επεξεργαζόμαστε τα στοιχεία σας βάσει της συγκατάθεσής σας
              (υποβάλλετε οικειοθελώς τη φόρμα) και του έννομου συμφέροντός
              μας να απαντήσουμε στο αίτημά σας και να προστατέψουμε τη
              φόρμα από κατάχρηση/spam. Δεν χρησιμοποιούμε τα στοιχεία σας
              για κανέναν άλλο σκοπό, ούτε τα μοιραζόμαστε με τρίτους πέραν
              του παρόχου αποστολής email που αναφέρθηκε παραπάνω.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Τα δικαιώματά σας
            </h2>
            <p className="mt-3">
              Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής ή περιορισμού
              της επεξεργασίας των δεδομένων σας, καθώς και δικαίωμα
              εναντίωσης και φορητότητας, σύμφωνα με τον Γενικό Κανονισμό
              Προστασίας Δεδομένων (ΓΚΠΔ/GDPR). Για οποιοδήποτε αίτημα,
              επικοινωνήστε στο <ObfuscatedEmail />.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
