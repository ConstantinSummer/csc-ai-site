import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {siteConfig.shortName}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {siteConfig.tagline}.
          </p>
          <p className="mt-2 max-w-xs text-xs text-muted">
            Ένα project του {siteConfig.legalName}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Επικοινωνία</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">
            Ιδιαίτερα Μαθήματα Πληροφορικής
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Για ιδιαίτερα μαθήματα προγραμματισμού και πληροφορικής, δείτε το{" "}
            <a
              href={siteConfig.sisterSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              {siteConfig.sisterSite.name}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="container-page text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.founderNameEn} — CSC AI
          Solutions. Με επιφύλαξη παντός δικαιώματος.
        </p>
        <p className="container-page mt-1 text-xs text-muted">
          Εικονίδια υπηρεσιών από{" "}
          <a
            href="https://game-icons.net"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
          >
            game-icons.net
          </a>{" "}
          (Lorc, Sbed) — CC BY 3.0.
        </p>
      </div>
    </footer>
  );
}
