import type { NextConfig } from "next";

// Security headers (X-Content-Type-Options, Referrer-Policy,
// Permissions-Policy, Content-Security-Policy) are set in src/proxy.ts
// instead of here: the CSP needs a fresh per-request nonce so Next.js's own
// inline hydration/streaming scripts keep working, and next.config.ts's
// headers() is evaluated once at build time — it can't generate that nonce.
const nextConfig: NextConfig = {};

export default nextConfig;
