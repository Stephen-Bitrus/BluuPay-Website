import { FeeTables } from "@/components/FeeTables";
import { JsonLd } from "@/components/JsonLd";
import { Crumbs, CtaBand, FaqList } from "@/components/Sections";
import { getContent } from "@/lib/content";
import { breadcrumbSchema, faqSchema, priceOffers } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = pageMeta(
  "Pricing",
  "Palmpay settles the next business day. Nomba MFB settles instantly. Compare BluuPay collection and payout fees, and choose to absorb the fee or pass it on.",
  "/pricing",
);

export default async function PricingPage() {
  const content = await getContent();
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12">
      <JsonLd data={[breadcrumbSchema("Pricing", "/pricing"), faqSchema(content.pricingFaqs), priceOffers(content.providers)]} />
      <header className="grid gap-4">
        <Crumbs current="Pricing" />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">How much BluuPay charges</h1>
        <p className="max-w-3xl text-lg leading-8 text-muted">
          Two providers. Palmpay settles on the next business day (T+1). Nomba MFB settles instantly. A Palmpay wallet payment is the exception and settles instantly. You can absorb the collection fee or pass it through to the customer. The tables are BluuPay’s fees either way.
        </p>
      </header>
      <FeeTables providers={content.providers} />
      <FaqList items={content.pricingFaqs} title="Pricing questions" />
      <CtaBand dashboard={dashboardUrl()} />
    </div>
  );
}
