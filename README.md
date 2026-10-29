# BluuPay website

Public marketing site for [BluuPay](https://bluupay.co), the business record for Nigerian merchants. Every payment is tied to the product sold. Stock, invoices, customers, expenses, tax, and profit stay on one record across outlets.

The merchant product itself is a separate app at [dashboard.bluupay.co](https://dashboard.bluupay.co). This repository does not contain that dashboard. Sign-up and sign-in both live there.

Tagline: **Sell Smarter. Grow Faster.**
Headline: **Know your numbers. Grow your business.**
Country of operation: Nigeria.

Contact:

- `hello@bluupay.co` — general and form fallback
- `legal@bluupay.co`
- `privacy@bluupay.co`
- [X](https://x.com/bluupayhq)
- [Instagram](https://instagram.com/bluupay.co)
- [LinkedIn](https://linkedin.com/company/bluupay)
- [Facebook](https://facebook.com/bluupay)
- [TikTok](https://www.tiktok.com/@bluupayhq)

A plain-text summary of the same public facts is served at `/llms.txt`. It is generated from `web/src/content/llms.ts` and `web/src/content/site.ts`.

## Repository

| | |
| --- | --- |
| GitHub | [Stephen-Bitrus/BluuPay-Website](https://github.com/Stephen-Bitrus/BluuPay-Website) |
| Branch to build and deploy | `cursor/bluupay-ui-refresh-6bdd` |
| App directory | `web/` |
| Package name | `bluupay-web` |
| Vercel deployment | [bluupay-website-web.vercel.app](https://bluupay-website-web.vercel.app) |

The site code lives only under `web/`. Set the Vercel project **Root Directory** to `web`.

`main` on the Cursor remote is an old, unrelated commit. It is not this website. Do not deploy it and do not open pull requests against it for site work.

## Stack

- [Next.js](https://nextjs.org/) 15 App Router, React 19, TypeScript
- Tailwind CSS 4
- [Sanity](https://www.sanity.io/) (`next-sanity`) for editable marketing content and stored leads
- [Resend](https://resend.com/) for lead notification email
- Font: Outfit
- Brand blue: `#0014ce` (viewport `themeColor` and the default Open Graph card)

Install with npm. The lockfile is `web/package-lock.json`. Use a current Node.js LTS.

## Local development

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Sanity Studio is [http://localhost:3000/studio](http://localhost:3000/studio).

| Script | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run seed` | Publish the copy in `src/content/site.ts` into Sanity |

`npm run seed` reads the environment. It does not load `.env.local` on its own. Export `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_API_TOKEN` in the shell, then run the script from `web/`. Without the project id and token the script exits without writing.

## Pages

| Path | Page | Content source |
| --- | --- | --- |
| `/` | Home | Sanity, with a code fallback |
| `/product` | Product | Sanity, with a code fallback |
| `/solutions` | Solutions (business types) | Sanity, with a code fallback |
| `/pricing` | Fees | Sanity, with a code fallback |
| `/mobile` | Mobile app | Code |
| `/agents` | Become an agent | Code, plus the lead form |
| `/book-a-demo` | Book a demo | Code, plus the lead form |
| `/privacy-policy` | Privacy policy | `web/src/content/legal.ts` |
| `/terms-of-service` | Terms of service | `web/src/content/legal.ts` |
| `/studio` | Sanity Studio | Not indexed |
| `/llms.txt` | Plain-text site summary | Generated from code |
| `/sitemap.xml` | Sitemap | Generated from the page list |
| `/robots.txt` | Crawler rules | Generated |

Navigation is Product, Solutions, Pricing, Mobile, Agents, plus Book a demo and a link to the dashboard. The footer uses the same wordmark as the header (`/bluupay-logo.png`).

Unmatched URLs render “That page is not on BluuPay”, with links to Home, Product, and Pricing. That response is `noindex`.

### Redirects

Old WordPress-style paths redirect permanently:

| From | To |
| --- | --- |
| `/features` | `/product` |
| `/about`, `/about-us` | `/` |
| `/support`, `/contact` | `/book-a-demo` |
| `/author/*` | `/` |
| `/whatsapp` | `/product#coming-soon` |

Trailing slashes are off. The `X-Powered-By` header is off.

## What merchants can use today

These are the live features. They are grouped on the product page as Sell, Get paid, Run the shop, and Grow.

- Point of sale
- Payments (bank transfer, USSD, wallet, and cash can be recorded on a sale)
- Mobile app
- Palmpay collections, next business day, with an instant-settlement exception for Palmpay wallet payments
- Nomba MFB collections, instant
- Absorb the collection fee, or pass it on to the customer
- Inventory, invoicing, customers, expenses, tax
- Staff roles and more than one outlet
- Insights, reports, and the business verticals on Solutions

The path into the product, shown on the site, is Register, Verify, Set up shop, Sell, Get paid, Manage and grow. A terminal is not required to start. Sign-up is on the dashboard.

### Coming soon

These are named on the site and are not available today. Do not add app-store badges, hardware prices, or “available now” copy for them until they are actually public.

- WhatsApp selling and support
- PoS terminals
- Desktop app (the web dashboard is available now)
- Offline selling
- BluuPay hardware (terminals, tablets, desktops, phones)

### Who it is for

Retail shops, market traders, wholesalers, service providers, growing SMEs, kiosks and mini-marts, boutiques, spare-parts shops, pharmacies, food vendors, and supermarkets.

## Pricing

Priced **collections** are only:

- Bank transfer (virtual account)
- Wallet payment

USSD and cash are ways to record a sale. They are not collection-fee rows. Do not add a payment-gateway row. There is no published gateway rate.

A merchant can absorb BluuPay’s collection fee or pass it through. The rate in the table is BluuPay’s fee either way.

### Palmpay

Settlement: next business day (T+1). A Palmpay wallet payment settles instantly. That exception is on the wallet row.

| | Fee | Note |
| --- | --- | --- |
| Bank transfer (virtual account) | 1.9% capped at ₦2,000 | API, SDK, or hosted checkout |
| Wallet payment | 1.5% flat | Instant settlement |
| Payout to another bank | ₦35 up to ₦5,000 | ₦55 from ₦5,001 to ₦50,000 · ₦100 above ₦50,000 |
| Payout to Palmpay | ₦30 up to ₦5,000 | ₦50 from ₦5,001 to ₦50,000 · ₦95 above ₦50,000 |
| Bulk or payroll, per account | ₦20 up to ₦5,000 | ₦40 from ₦5,001 to ₦50,000 · ₦60 above ₦50,000 |

### Nomba MFB

Settlement: instant on bank transfer and wallet payment.

| | Fee | Note |
| --- | --- | --- |
| Bank transfer (virtual account) | 2.2% capped at ₦2,000 | API, SDK, or hosted checkout |
| Wallet payment | 2% flat | Instant settlement |
| Payout to another bank | ₦50 up to ₦5,000 | ₦65 from ₦5,001 to ₦50,000 · ₦150 above ₦50,000 |
| Payout to Nomba MFB | ₦40 up to ₦5,000 | ₦60 from ₦5,001 to ₦50,000 · ₦100 above ₦50,000 |
| Bulk or payroll, per account | ₦40 up to ₦5,000 | ₦60 from ₦5,001 to ₦50,000 · ₦100 above ₦50,000 |

Change a fee only when the rate itself has changed. Edit `providers` in `web/src/content/site.ts`, then run `npm run seed`, or edit the Payment provider documents in Studio and publish them. The site drops any collection channel whose name does not match “virtual account” or “wallet payment”, so a stale gateway row in Sanity cannot reappear on the page.

Pricing is marked for weekly sitemap updates. Other public pages are monthly. Home has priority 1. The others have priority 0.7.

## Content and Sanity

Project `y31m5wld`, dataset `production`, API version `2026-10-22`. The public read client does not use the CDN and reads the published perspective, so a publish shows up on the next fetch instead of waiting on a CDN cache.

Studio structure:

- Demo requests (`lead` where `kind == "demo"`)
- Agent applications (`lead` where `kind == "agent"`)
- Feature, Vertical, Story, FAQ, Payment provider, Legal page

Lead fields are read-only. They are created by the form, not typed in by an editor. The seed does not create or delete leads.

| Document | Used for |
| --- | --- |
| `feature` | Live and coming-soon product copy. `status` is `live` or `soon`. `group` is Sell, Get paid, Run the shop, or Grow. |
| `vertical` | Solutions cards |
| `story` | Merchant quotes on the home page |
| `faq` | `placement` `general` or `pricing` |
| `paymentProvider` | Name, settlement, summary, collection rows, payout rows |
| `legalPage` | Schema exists. The live privacy and terms pages render from `web/src/content/legal.ts`, not from this document. |
| `lead` | Demo requests and agent applications |

`getContent()` in `web/src/lib/content.ts` loads those documents for Home, Product, Solutions, and Pricing. If Sanity is unset, the query fails, or a list comes back empty, that list falls back to `web/src/content/site.ts`. Identity, navigation, the journey steps, legal pages, and the mobile and agent page copy stay in code.

Home, Product, Solutions, and Pricing revalidate at most every 60 seconds. A Studio publish also calls the revalidate webhook, which refreshes those pages immediately.

### Seed

`web/scripts/seed.ts` writes features, verticals, stories, general FAQs, pricing FAQs, and the two providers with `createOrReplace`. A full seed is 50 documents. It replaces those ids. It does not touch leads.

### Revalidate webhook

`POST /api/revalidate` accepts either of these:

- Header `x-revalidate-secret` set to `SANITY_REVALIDATE_SECRET`
- A Sanity webhook signature (`sanity-webhook-signature`) for that same secret

A match refreshes `/`, `/product`, `/solutions`, and `/pricing`, and returns `{ ok: true }`. A missing or wrong secret returns 401.

The webhook is `https://www.bluupay.co/api/revalidate`. Use `www`. A POST to `https://bluupay.co/api/revalidate` is redirected, and Sanity does not follow that redirect, so a webhook pointed at the apex never refreshes the site. The webhook fires when a feature, vertical, story, FAQ, payment provider, or blog post is published. It sends the signature and the `x-revalidate-secret` header. Draft edits do not fire it.

### Studio login on a public host

In the Sanity project, allow CORS with credentials for:

- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `https://bluupay-website-web.vercel.app`
- `https://bluupay.co`

`/studio` and `/api/` are disallowed in `robots.txt`.

## Forms

Book a demo and Become an agent both `POST` JSON to `/api/leads`.

Required fields: name, business name, phone, email, and either kind of business (demo) or city (agent). Note is optional. A honeypot field, `company_website`, returns success and stores nothing.

| Result | Status |
| --- | --- |
| Saved | 200 `{ ok: true }` |
| Incomplete or invalid email | 400 |
| Sanity project or write token missing | 503, and the page tells the person to email hello@ |
| Sanity create failed | 502 |

A saved lead is a `lead` document. When `RESEND_API_KEY` is set, the route also emails the submission. From address is `RESEND_FROM` or `BluuPay <hello@bluupay.co>`. Recipient is `LEAD_TO` or `hello@bluupay.co`. Reply-To is the person who submitted. If the email send fails after the document is saved, the request still returns success.

The Resend domain for `bluupay.co` needs to stay verified or those messages will not deliver. The form still stores the lead.

## Environment variables

Copy `web/.env.example` to `web/.env.local`. `.env` and `.env.local` are gitignored. Never commit tokens.

`NEXT_PUBLIC_*` values are baked in at **build** time. On Vercel, set them, then redeploy.

| Name | Production value | Where it is used |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://bluupay.co` | Canonical URLs, sitemap, Open Graph, metadata base |
| `NEXT_PUBLIC_DASHBOARD_URL` | `https://dashboard.bluupay.co` | “Go to dashboard” links |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `y31m5wld` | Public Sanity client and Studio |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Sanity dataset |
| `SANITY_API_TOKEN` | write token, server only | Seed, and creating leads |
| `SANITY_REVALIDATE_SECRET` | shared secret, server only | `/api/revalidate` |
| `RESEND_API_KEY` | server only | Lead email |
| `RESEND_FROM` | `BluuPay <hello@bluupay.co>` | From address |
| `LEAD_TO` | `hello@bluupay.co` | Inbox for demo and agent mail |

Do not put dashboard login credentials on Vercel. The marketing site does not authenticate to the merchant dashboard at runtime.

## Deploy on Vercel

Vercel is the host this app is built for: App Router, incremental revalidation, `next/image`, route handlers, and the embedded Studio. The project is already deployed at [bluupay-website-web.vercel.app](https://bluupay-website-web.vercel.app).

| Setting | Value |
| --- | --- |
| Root Directory | `web` |
| Framework | Next.js |
| Build command | `npm run build` |
| Install command | `npm install` |
| Production branch | `cursor/bluupay-ui-refresh-6bdd` |
| Environment | The table above, for Production |

Connect the GitHub repository [Stephen-Bitrus/BluuPay-Website](https://github.com/Stephen-Bitrus/BluuPay-Website). Pushes to `cursor/bluupay-ui-refresh-6bdd` should trigger a production deployment.

### Point bluupay.co at Vercel

`bluupay.co` was still the previous WordPress site when this app first deployed. DNS is on Cloudflare (`david.ns.cloudflare.com`, `ollie.ns.cloudflare.com`). `www` is proxied and redirects to the apex. Leave MX and TXT records alone so mail keeps working.

1. In the Vercel project, open Settings → Domains and add `bluupay.co`. Add `www.bluupay.co` as a redirect to the apex.
2. In Cloudflare DNS, set the records to what Vercel shows for this project. The usual records are an A record for the apex at `76.76.21.21`, and a CNAME for `www` at `cname.vercel-dns.com`. Use Vercel’s values if they differ.
3. Set both records to DNS only (grey cloud) while the certificate is issued. An orange-cloud proxy needs SSL mode Full (strict), or the site can redirect-loop.
4. Wait until Vercel reports a certificate for both names.
5. Set `NEXT_PUBLIC_SITE_URL` to `https://bluupay.co` and redeploy so canonical URLs and the sitemap use the apex.
6. Add the Sanity CORS origins and the revalidate webhook above.

Before changing DNS, confirm the current apex record in Cloudflare. At the time of the first Vercel deploy, that A record was `51.44.228.32` and it served WordPress. To roll back, point the apex A record back at that address and leave the WordPress server in place until the new site is checked on the apex. Do not delete WordPress first.

After cutover, check `/`, `/pricing`, `/book-a-demo`, `/studio`, and a real form submission (it will email `hello@bluupay.co` and create a lead).

## Layout of `web/`

```
web/
  .env.example
  next.config.ts          redirects, security headers, Studio dev chunk fix
  sanity.config.ts        Studio at /studio
  scripts/seed.ts
  public/
    bluupay-logo.png      header and footer wordmark
    product/              pos.webp, products.webp, sales.webp
  src/
    app/
      layout.tsx          Outfit, metadata, theme color
      icon.png            favicon, transparent
      apple-icon.png      Apple touch icon, on white
      opengraph-image.tsx 1200×630 card
      not-found.tsx
      sitemap.ts
      robots.ts
      llms.txt/route.ts
      (site)/             public pages
      studio/             embedded Sanity Studio
      api/leads/
      api/revalidate/
    components/
    content/site.ts       fallback copy, fees, navigation
    content/legal.ts
    content/llms.ts
    lib/content.ts        Sanity read + fallback
    lib/seo.ts
    sanity/client.ts
    sanity/schemaTypes/
```

The favicon is the droplet mark, from the Next.js file convention (`icon.png`, `apple-icon.png`). The header wordmark is a separate file, `public/bluupay-logo.png`. Changing the favicon does not change the header.

Product screenshots in `public/product/` are dashboard views used on the marketing pages. Do not replace them with shots that show customer phone numbers, emails, or balances.

## Request headers

Every response sets:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: SAMEORIGIN`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Editing checklist

1. Change the fact in `web/src/content/site.ts` (and `legal.ts` if it is a legal page).
2. If the change is a feature, vertical, story, FAQ, or fee, run `npm run seed` or publish the same edit in Studio.
3. Publish in Studio. The webhook refreshes the site. If it does not fire, the page updates within a minute.
4. Read the page. Fees on screen should match the tables in this file.
5. Commit on `cursor/bluupay-ui-refresh-6bdd` and push to GitHub. Vercel builds that branch.
