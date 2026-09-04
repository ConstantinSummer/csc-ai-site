import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} | Υπηρεσίες Τεχνητής Νοημοσύνης για Επιχειρήσεις`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Τεχνητή Νοημοσύνη για επιχειρήσεις",
    "AI consulting Ελλάδα",
    "ανάπτυξη AI εφαρμογών",
    "AI agents",
    "GEO AEO",
    "Κωνσταντίνος Ζήτης",
  ],
  authors: [{ name: siteConfig.founderNameEn, url: siteConfig.url }],
  creator: siteConfig.founderNameEn,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: siteConfig.url,
    siteName: siteConfig.brandName,
    title: siteConfig.brandName,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brandName,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Reading the CSP nonce here (set in src/proxy.ts) is what makes Next.js
  // apply that same nonce to the inline hydration/streaming <script> tags
  // it injects on every page — without this read, Next never learns the
  // nonce exists and those scripts get blocked by our strict CSP.
  await headers();

  return (
    <html lang="el" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.brandName,
            legalName: siteConfig.legalName,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            founder: {
              "@type": "Person",
              name: siteConfig.founderName,
              alternateName: siteConfig.founderNameEn,
            },
            areaServed: "GR",
            description: siteConfig.description,
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <TechStack />
        <Footer />
      </body>
    </html>
  );
}
