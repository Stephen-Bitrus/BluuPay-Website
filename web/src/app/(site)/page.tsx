import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  ComingSoon,
  CtaBand,
  FaqList,
  FeatureGroups,
  InBrief,
  Journey,
  SettlementChoice,
  Stories,
} from "@/components/Sections";
import { site } from "@/content/site";
import { getContent } from "@/lib/content";
import { faqSchema, organizationSchema, softwareSchema, websiteSchema } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  ...pageMeta("BluuPay – Sell Smarter, Grow Faster", site.description, "/"),
  title: { absolute: "BluuPay – Sell Smarter, Grow Faster" },
};

export default async function HomePage() {
  const content = await getContent();
  const dashboard = dashboardUrl();
  return (
    <div className="mx-auto grid max-w-6xl gap-16 px-4 py-12">
      <JsonLd data={[organizationSchema(), websiteSchema(), softwareSchema(), faqSchema(content.faqs)]} />
      <section className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">{site.tagline}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{site.headline}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{site.description}</p>
          <p className="mt-4 max-w-xl leading-7">
            BluuPay is for shop owners in Nigeria. Sign up and sign in at{" "}
            <a className="font-semibold text-blue" href={dashboard}>dashboard.bluupay.co</a>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={dashboard} className="rounded-full bg-blue px-5 py-3 text-sm font-semibold text-white hover:bg-blue-deep">
              Get started free
            </a>
            <Link href="/book-a-demo" className="rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold hover:border-blue">
              Book a demo
            </Link>
          </div>
        </div>
        <aside className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-36px_rgba(0,20,206,0.7)]" aria-label="What a recorded sale contains">
          <div className="bg-blue px-5 py-4 text-white">
            <p className="text-sm font-semibold">What BluuPay writes down</p>
            <p className="text-sm text-white/80">One sale. One record.</p>
          </div>
          <ol className="grid gap-0 divide-y divide-line px-5">
            {[
              ["Sale", "Tied to the product that left the shelf"],
              ["Payment", "Transfer, card, USSD, wallet, or cash"],
              ["Stock", "Updated for that outlet"],
              ["Profit", "Calculated from your cost and the fee"],
            ].map(([title, body]) => (
              <li key={title} className="py-4">
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-muted">{body}</p>
              </li>
            ))}
          </ol>
          <p className="border-t border-line px-5 py-4 text-sm leading-6 text-muted">
            Staff, invoices, customers, expenses, and tax stay on the same record.
          </p>
        </aside>
      </section>

      <section aria-labelledby="journey-title">
        <h2 id="journey-title" className="text-3xl font-semibold tracking-tight">From the first account to a clearer shop</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">Register, verify, set up the shop, sell, get paid, then manage and grow.</p>
        <div className="mt-6">
          <Journey />
        </div>
      </section>

      <FeatureGroups features={content.liveFeatures} />

      <section aria-labelledby="settlement-title">
        <h2 id="settlement-title" className="text-3xl font-semibold tracking-tight">Choose when the money lands</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">
          Palmpay settles on the next business day. Nomba MFB settles instantly. You can absorb the fee or pass it on.
        </p>
        <div className="mt-6">
          <SettlementChoice providers={content.providers} />
        </div>
      </section>

      <section aria-labelledby="verticals-title">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 id="verticals-title" className="text-3xl font-semibold tracking-tight">Built for the way the shop already works</h2>
          <Link href="/solutions" className="text-sm font-semibold text-blue">All solutions</Link>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.verticals.slice(0, 6).map((vertical) => (
            <li key={vertical.name} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-semibold">{vertical.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{vertical.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <ComingSoon features={content.soonFeatures} />
      <Stories stories={content.stories} />
      <InBrief live={content.liveFeatures} soon={content.soonFeatures} dashboard={dashboard} />
      <FaqList items={content.faqs} />
      <CtaBand dashboard={dashboard} />
    </div>
  );
}
