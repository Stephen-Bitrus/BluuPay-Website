import { JsonLd } from "@/components/JsonLd";
import { ComingSoon, Crumbs, CtaBand, FeatureGroups } from "@/components/Sections";
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
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12">
      <JsonLd data={[breadcrumbSchema("Product", "/product"), softwareSchema()]} />
      <header className="grid gap-4">
        <Crumbs current="Product" />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Everything the shop does, on one record</h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          Sell at the counter or in the mobile app. Get paid through Palmpay or Nomba MFB. Run stock, invoices, customers, expenses, tax, staff, and outlets from the same place.
        </p>
      </header>
      <FeatureGroups features={content.liveFeatures} />
      <ComingSoon features={content.soonFeatures} />
      <CtaBand dashboard={dashboardUrl()} />
    </div>
  );
}
