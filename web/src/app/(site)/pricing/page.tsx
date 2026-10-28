import { FeeTables } from "@/components/FeeTables";
import { CollectionScene } from "@/components/Illustrations";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, FaqList, PageHero, SettlementChoice } from "@/components/Sections";
import { getContent } from "@/lib/content";
import { breadcrumbSchema, faqSchema, priceOffers } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const revalidate = 60;

export const metadata = pageMeta(
  "Pricing",
  "Collections are a bank transfer to a virtual account, or a wallet payment. Palmpay bank transfers settle the next business day. Nomba MFB settles instantly. Wallet payments settle instantly with either provider.",
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
        lede="Collections are a bank transfer to a virtual account, or a wallet payment. Palmpay bank transfers settle the next business day. Nomba MFB settles instantly. Wallet payments settle instantly with either provider. You can absorb the fee or pass it on. The tables are BluuPay’s fees either way."
        aside={<CollectionScene />}
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
