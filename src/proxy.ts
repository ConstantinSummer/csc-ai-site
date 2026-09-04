import { NextResponse, type NextRequest } from "next/server";

// Content-Security-Policy is generated per-request here (not in
// next.config.ts) because it needs a fresh random nonce on every request.
// Next.js detects the nonce inside the CSP header it receives and applies
// it automatically to the inline bootstrap/streaming <script> tags it
// injects for RSC/hydration — without a nonce (or 'unsafe-inline'), those
// scripts are blocked and the whole app fails to hydrate.
//
// - script-src: 'strict-dynamic' lets the nonce'd scripts Next.js injects
//   load additional same-origin chunk scripts without listing every host;
//   'unsafe-eval' is added only outside production for Fast Refresh/HMR.
// - style-src needs 'unsafe-inline' because several components set inline
//   `style={{...}}` (gradients, dynamic accent colors, the scroll-reveal
//   animation). There's no nonce equivalent for inline style attributes,
//   so this is a deliberate, scoped trade-off — the site accepts no
//   user-generated HTML, so the residual XSS-via-inline-style risk is low.
// - JSON-LD <script type="application/ld+json"> blocks are inert data, not
//   executable script, so they are unaffected by script-src.
const isDev = process.env.NODE_ENV !== "production";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const cspDirectives = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${
      isDev ? " 'unsafe-eval'" : ""
    }`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ];
  const csp = cspDirectives.join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()"
  );
  return response;
}

export const config = {
  matcher: [
    // Skip static assets so every image/CSS/JS request doesn't also pay for
    // a fresh CSP header — none of those are HTML documents that need one.
    "/((?!_next/static|_next/image|favicon.ico|icon).*)",
  ],
};
