# CSC AI Solutions — csc.com.gr

Στατικό site (Next.js 16, App Router, TypeScript, Tailwind CSS v4) για τις υπηρεσίες Τεχνητής Νοημοσύνης του Κωνσταντίνου Ζήτη — CSC AI Solutions.

## Δομή

- `/` — Αρχική
- `/services` — Υπηρεσίες (4 πυλώνες + FAQ)
- `/about` — Σχετικά / Ο Ιδρυτής
- `src/lib/site.ts` — όλα τα κείμενα/στοιχεία επικοινωνίας/υπηρεσίες σε ένα αρχείο, εύκολο για μελλοντικές αλλαγές
- `public/llms.txt` — σύνοψη site για AI crawlers/LLMs (GEO/AEO)

## Τοπική εκτέλεση

```bash
npm install
npm run dev
```

## Βήμα 1 — Ανέβασμα στο GitHub

1. Δημιούργησε ένα νέο, **κενό** (χωρίς README) repository στο GitHub, π.χ. `csc-ai-site`.
2. Στο τοπικό αυτό φάκελο:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<το-username-σου>/csc-ai-site.git
git push -u origin main
```

(Εναλλακτικά, μπορείς να ανεβάσεις όλο τον φάκελο μέσω του GitHub web UI με drag-and-drop, χωρίς git command line.)

## Βήμα 2 — Import στο Vercel

1. Στο [vercel.com](https://vercel.com), «Add New… → Project».
2. Επίλεξε «Import» το repo `csc-ai-site` από το GitHub σου.
3. Το Vercel αναγνωρίζει αυτόματα ότι είναι Next.js — απλά πάτα **Deploy**.

## Βήμα 3 — Σύνδεση domain csc.com.gr (registrar: Papaki)

Στο Vercel project → Settings → Domains → πρόσθεσε `csc.com.gr` (και `www.csc.com.gr`). Το Vercel θα σου δείξει ακριβώς ποια DNS records να προσθέσεις στο Papaki (συνήθως ένα `A` record για το root domain προς `76.76.21.21`, και ένα `CNAME` για το `www` προς `cname.vercel-dns.com`). Αντιγράφεις ό,τι δείχνει εκεί το Vercel (μπορεί να διαφέρει ελαφρώς) στο DNS management του Papaki.

## Βήμα 4 — Email (info@csc.com.gr → Gmail), ανεξάρτητα από FastComet

1. Δημιούργησε δωρεάν λογαριασμό στο [Cloudflare](https://cloudflare.com) και πρόσθεσε το domain `csc.com.gr`.
2. Το Cloudflare θα σου δώσει 2 nameservers — τα βάζεις στο Papaki (αντικαθιστούν τα τωρινά nameservers, δεν επηρεάζουν αν το domain παραμένει registered στο Papaki).
3. Στο Cloudflare, ξαναπρόσθεσε τα ίδια DNS records του Βήματος 3 (A/CNAME προς Vercel) — τώρα η διαχείριση DNS γίνεται από το Cloudflare.
4. Cloudflare → Email → Email Routing → ενεργοποίησε, πρόσθεσε κανόνα προώθησης `info@csc.com.gr` → το Gmail σου. Δωρεάν, χωρίς όριο μηνυμάτων για προσωπική χρήση.
5. Μετά από αυτό, μπορείς να ακυρώσεις το hosting πακέτο στη FastComet όποτε θες (το domain registration στο Papaki παραμένει ανεξάρτητο).

## Τεχνικά σημειώματα SEO/AEO

- JSON-LD (Organization, Person, Service, FAQPage) σε κάθε σελίδα
- `sitemap.xml` και `robots.txt` παράγονται αυτόματα (`src/app/sitemap.ts`, `src/app/robots.ts`)
- `public/llms.txt` — σύνοψη ταυτότητας/υπηρεσιών για AI chatbots/LLMs
- OG image παράγεται δυναμικά (`src/app/opengraph-image.tsx`)

Μετά το πρώτο live deploy, πρόσθεσε το site στο Google Search Console και στο Bing Webmaster Tools (ίδιο domain `csc.com.gr`) και υπόβαλε το sitemap, ώστε να «καθαρίσει» γρήγορα το index από τυχόν παλιές/ύποπτες καταχωρήσεις.
