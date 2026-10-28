import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProductGallery, ProductStage } from "@/components/ProductStage";
import { Mark, PayRail } from "@/components/Icons";
import {
  ActionRow,
  ComingSoon,
  CtaBand,
  FaqList,
  FeatureGroups,
  InBrief,
  Journey,
  ProofBar,
  SettlementChoice,
  Stories,
} from "@/components/Sections";
import { site } from "@/content/site";
import { getContent } from "@/lib/content";
import { faqSchema, organizationSchema, softwareSchema, websiteSchema } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const revalidate = 60;

export const metadata: Metadata = {
  ...pageMeta("BluuPay – Sell Smarter, Grow Faster", site.description, "/"),
  title: { absolute: "BluuPay – Sell Smarter, Grow Faster" },
};

export default async function HomePage() {
  const content = await getContent();
  const dashboard = dashboardUrl();
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), softwareSchema(), faqSchema(content.faqs)]} />
      <section className="hero-wash border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">{site.tagline}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{site.headline}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{site.description}</p>
            <p className="mt-4 max-w-xl leading-7">
              BluuPay is for shop owners in Nigeria. Sign up and sign in at{" "}
              <a className="font-semibold text-blue" href={dashboard}>
                dashboard.bluupay.co
              </a>
              .
            </p>
            <div className="mt-6">
              <PayRail />
            </div>
            <div className="mt-8">
              <ActionRow dashboard={dashboard} />
            </div>
          </div>
          <ProductStage />
        </div>
      </section>
      <ProofBar />
      <ProductGallery include={["products", "sales"]} />

      <section aria-labelledby="journey-title" className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">How it works</p>
          <h2 id="journey-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            From the first account to a clearer shop
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Register, verify, set up the shop, sell, get paid, then manage and grow.
          </p>
          <div className="mt-8">
            <Journey />
          </div>
        </div>
      </section>

      <section className="bg-paper" aria-label="Live features">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">The product</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Everything the shop does, on one record
          </h2>
          <div className="mt-10">
            <FeatureGroups features={content.liveFeatures} />
          </div>
        </div>
      </section>

      <section aria-labelledby="settlement-title" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Payments</p>
          <h2 id="settlement-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Choose when the money lands
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Palmpay settles on the next business day. Nomba MFB settles instantly. You can absorb the fee or pass it on.
          </p>
          <div className="mt-8">
            <SettlementChoice providers={content.providers} />
          </div>
        </div>
      </section>

      <section aria-labelledby="verticals-title" className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Solutions</p>
              <h2 id="verticals-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Built for the way the shop already works
              </h2>
            </div>
            <Link href="/solutions" className="text-sm font-semibold text-blue">
              All solutions
            </Link>
          </div>
          <ul className="stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.verticals.slice(0, 6).map((vertical) => (
              <li
                key={vertical.name}
                className="rounded-3xl border border-line bg-white p-5 shadow-[0_18px_50px_-36px_rgba(16,20,40,0.65)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-soft text-blue">
                  <Mark name={vertical.name} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{vertical.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{vertical.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16 sm:py-20">
          <ComingSoon features={content.soonFeatures} />
          <InBrief dashboard={dashboard} />
          <FaqList items={content.faqs} />
        </div>
      </div>
      <Stories stories={content.stories} />
      <CtaBand dashboard={dashboard} />
    </>
  );
}
