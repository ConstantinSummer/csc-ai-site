import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// `lastModified` is maintained by hand per route and updated only when that
// route's content actually changes — Google explicitly warns that a sitemap
// which always reports "today" for lastmod is ignored/untrusted. Update the
// date below whenever you meaningfully edit that page's content.
const routes: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-09-04", priority: 1 },
  { path: "/services", lastModified: "2026-09-04", priority: 0.8 },
  { path: "/about", lastModified: "2026-09-04", priority: 0.8 },
  { path: "/contact", lastModified: "2026-09-04", priority: 0.6 },
  {
    path: "/case-studies/dubai-taxi-ai",
    lastModified: "2026-09-04",
    priority: 0.7,
  },
  {
    path: "/case-studies/vpp-marl",
    lastModified: "2026-09-04",
    priority: 0.6,
  },
  { path: "/privacy", lastModified: "2026-09-04", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
