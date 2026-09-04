import type { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Credits",
  description:
    "Αναφορές πνευματικών δικαιωμάτων για εικονίδια και άλλα στοιχεία τρίτων που χρησιμοποιούνται στο csc.com.gr.",
  alternates: { canonical: "/credits" },
  openGraph: {
    title: "Credits | CSC AI Solutions",
    description:
      "Αναφορές πνευματικών δικαιωμάτων για στοιχεία τρίτων που χρησιμοποιούνται στο csc.com.gr.",
    url: "/credits",
  },
};

export default function CreditsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <GlowOrb
          color="var(--accent-cyan)"
          className="-left-20 top-0 h-96 w-96"
        />
        <Reveal className="container-page relative py-20">
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Credits
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Αναφορές πνευματικών δικαιωμάτων για στοιχεία τρίτων που
            χρησιμοποιούνται σε αυτό το site.
          </p>
        </Reveal>
      </section>

      <section className="container-page py-16">
        <Reveal className="mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Εικονίδια υπηρεσιών
            </h2>
            <p className="mt-3">
              Τα εικονίδια των υπηρεσιών (στη σελίδα{" "}
              <span className="text-foreground">Υπηρεσίες</span>) βασίζονται
              σε σχέδια των Lorc και Sbed, από το{" "}
              <a
                href="https://game-icons.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                game-icons.net
              </a>
              , διαθέσιμα υπό άδεια{" "}
              <a
                href="https://creativecommons.org/licenses/by/3.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                CC BY 3.0
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Λογότυπα τεχνολογιών
            </h2>
            <p className="mt-3">
              Τα λογότυπα στην ενότητα «Τεχνολογίες &amp; μοντέλα AI που
              δουλεύουμε» προέρχονται από το{" "}
              <a
                href="https://simpleicons.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                Simple Icons
              </a>{" "}
              (CC0) και ανήκουν στους αντίστοιχους κατόχους τους· η χρήση
              τους εδώ δηλώνει απλώς τις τεχνολογίες που χρησιμοποιούμε.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
