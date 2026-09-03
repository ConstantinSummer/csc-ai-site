import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight sm:text-base"
        >
          <span className="text-foreground">Konstantinos Zitis</span>
          <span className="text-muted"> — </span>
          <span className="gradient-text">CSC AI Solutions</span>
        </Link>

        <nav
          aria-label="Κύριο μενού"
          className="hidden items-center gap-8 text-sm text-muted sm:flex"
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent-blue sm:text-sm"
        >
          Επικοινωνία
        </Link>
      </div>

      {/* Mobile nav */}
      <nav
        aria-label="Κύριο μενού (κινητό)"
        className="container-page flex items-center gap-6 overflow-x-auto pb-3 text-sm text-muted sm:hidden"
      >
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
