import { JsonLd } from "@/components/JsonLd";
import { ComingSoon, CtaBand, FeatureGroups, PageHero } from "@/components/Sections";
import { getContent } from "@/lib/content";
import { breadcrumbSchema, softwareSchema } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = pageMeta(
  "Product",
  "BluuPay records the sale, the payment, the stock, and the profit. Staff, invoices, customers, expenses, tax, reports, and outlets are live. WhatsApp, terminals, desktop, offline selling, and hardware are coming soon.",
  "/product",
);

export default async function ProductPage() {
  const content = await getContent();
  return (
    <>
      <JsonLd data={[breadcrumbSchema("Product", "/product"), softwareSchema()]} />
      <PageHero
        crumb="Product"
        eyebrow="Product"
        title="Everything the shop does, on one record"
        lede="Sell at the counter or in the mobile app. Get paid through Palmpay or Nomba MFB. Run stock, invoices, customers, expenses, tax, staff, and outlets from the same place."
      />
      <div className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 py-16 sm:py-20">
          <FeatureGroups features={content.liveFeatures} />
          <ComingSoon features={content.soonFeatures} />
        </div>
      </div>
      <CtaBand dashboard={dashboardUrl()} />
    </>
  );
}
