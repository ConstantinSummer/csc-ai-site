import type { Metadata } from "next";
import { Suspense } from "react";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { ObfuscatedEmail, ObfuscatedPhone } from "@/components/ObfuscatedContact";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με το CSC AI Solutions για να συζητήσουμε το δικό σας project Τεχνητής Νοημοσύνης.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Επικοινωνία | CSC AI Solutions",
    description:
      "Επικοινωνήστε με το CSC AI Solutions για να συζητήσουμε το δικό σας project Τεχνητής Νοημοσύνης.",
    url: "/contact",
  },
  twitter: {
    title: "Επικοινωνία | CSC AI Solutions",
    description:
      "Επικοινωνήστε με το CSC AI Solutions για να συζητήσουμε το δικό σας project Τεχνητής Νοημοσύνης.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-blue)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Ας μιλήσουμε για το{" "}
            <span className="gradient-text">project</span> σας
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Η πιο γρήγορη διαδρομή είναι συνήθως ένα τηλεφώνημα ή ένα σύντομο
            video call — εκεί ξεκαθαρίζουν οι περισσότερες απορίες μέσα σε
            λίγα λεπτά.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <ObfuscatedPhone className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent-blue" />
            <ObfuscatedEmail className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-medium text-foreground transition-colors hover:border-accent-blue" />
          </div>
          <p className="mt-6 max-w-2xl text-sm text-muted">
            Αν προτιμάτε να ξεκινήσετε γραπτά, χρησιμοποιήστε τη φόρμα
            παρακάτω. Όσο πιο αναλυτικά και καθαρά περιγράψετε τι
            χρειάζεστε, τόσο πιο γρήγορα και ουσιαστικά θα μπορέσουμε να σας
            εξυπηρετήσουμε.
          </p>
        </Reveal>
      </section>

      <section className="container-page py-20">
        <Reveal className="mx-auto max-w-2xl">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </section>

      {/* JSON-LD kept out of this page intentionally — the site-wide
          Organization schema in the root layout already carries the
          canonical contact fields for search engines. */}
    </>
  );
}
