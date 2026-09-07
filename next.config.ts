import type { NextConfig } from "next";

// Security headers (X-Content-Type-Options, Referrer-Policy,
// Permissions-Policy, Content-Security-Policy) are set in src/proxy.ts
// instead of here: the CSP needs a fresh per-request nonce so Next.js's own
// inline hydration/streaming scripts keep working, and next.config.ts's
// headers() is evaluated once at build time — it can't generate that nonce.
const nextConfig: NextConfig = {
  // Permanent redirects for URLs indexed under the old WordPress-era
  // csc.com.gr (surfaced by Google Search Console), plus one legacy
  // article that now belongs on the sister site. `permanent: true` sends
  // a 308.
  //
  // Two Next.js/Vercel platform behaviors shaped how these are written,
  // both confirmed by testing a local production build (`next build` +
  // `next start`) before this was finalized:
  //
  // 1. `source` must be the PERCENT-ENCODED form for a path containing
  //    non-ASCII (Greek) characters — a literal Greek `source` string
  //    silently never matches (path-to-regexp compares against the raw,
  //    still-encoded request path). Handling this in middleware instead,
  //    by decoding the request path and comparing plain text, does match
  //    correctly — but see the next point for why that doesn't help.
  //
  // 2. With `trailingSlash: false` (this site's default/unset value —
  //    intentionally not changed here, since flipping it site-wide would
  //    affect every already-indexed canonical URL), Next.js's own
  //    server unconditionally 308-redirects ANY request path ending in
  //    "/" to the same path without it, before redirects() or
  //    middleware ever run — confirmed with a plain 404 path and with an
  //    existing real page (/services/ → /services). This is site-wide,
  //    pre-existing behavior, not something introduced here. It means a
  //    legacy URL requested WITH its original trailing slash resolves in
  //    two hops (Next's own slash-strip, then the redirect below to the
  //    true destination) instead of one; requested without the trailing
  //    slash, it resolves directly in one. Both hops are permanent
  //    (308) and land on the correct final destination — see the report
  //    for why a true single hop isn't achievable here without that
  //    site-wide trailingSlash change.
  async redirects() {
    return [
      {
        source: "/machine-learning-",
        destination: "/machine-learning",
        permanent: true,
      },
      {
        // Percent-encoded form of
        // /machine-learning-μηχανική-μάθηση-τι-είναι — see note above.
        source:
          "/machine-learning-%CE%BC%CE%B7%CF%87%CE%B1%CE%BD%CE%B9%CE%BA%CE%AE-%CE%BC%CE%AC%CE%B8%CE%B7%CF%83%CE%B7-%CF%84%CE%B9-%CE%B5%CE%AF%CE%BD%CE%B1%CE%B9",
        destination: "/machine-learning",
        permanent: true,
      },
      {
        // Percent-encoded form of /πίνακες-στην-html — see note above.
        source:
          "/%CF%80%CE%AF%CE%BD%CE%B1%CE%BA%CE%B5%CF%82-%CF%83%CF%84%CE%B7%CE%BD-html",
        destination:
          "https://csc.gr/courses/idiaitera-mathimata-html-and-css/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
