import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export type BreadcrumbItem = { label: string; href: string };

// Renders both the visible breadcrumb trail and its matching
// BreadcrumbList JSON-LD. "Αρχική" (home) is prepended automatically —
// callers only pass the items between home and the current page.
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ label: "Αρχική", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${siteConfig.url}${item.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span aria-current="page" className="text-foreground">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
