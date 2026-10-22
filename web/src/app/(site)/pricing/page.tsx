import { FeeTables } from "@/components/FeeTables";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero, SettlementChoice } from "@/components/Sections";
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
    <>
      <JsonLd data={[breadcrumbSchema("Pricing", "/pricing"), faqSchema(content.pricingFaqs), priceOffers(content.providers)]} />
      <PageHero
        crumb="Pricing"
        eyebrow="Pricing"
        title="How much BluuPay charges"
        lede="Two providers. Palmpay settles on the next business day (T+1). Nomba MFB settles instantly. A Palmpay wallet payment is the exception and settles instantly. You can absorb the collection fee or pass it through to the customer. The tables are BluuPay’s fees either way."
      />
      <div className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-20">
          <SettlementChoice providers={content.providers} />
          <FeeTables providers={content.providers} />
          <FaqList items={content.pricingFaqs} title="Pricing questions" />
        </div>
      </div>
      <CtaBand dashboard={dashboardUrl()} />
    </>
  );
}
