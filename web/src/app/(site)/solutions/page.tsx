import { JsonLd } from "@/components/JsonLd";
import { Crumbs, CtaBand } from "@/components/Sections";
import { getContent } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = pageMeta(
  "Solutions",
  "BluuPay is for retail shops, market traders, wholesalers, service providers, kiosks, boutiques, spare-parts shops, pharmacies, food vendors, and supermarkets in Nigeria.",
  "/solutions",
);

export default async function SolutionsPage() {
  const content = await getContent();
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12">
      <JsonLd data={breadcrumbSchema("Solutions", "/solutions")} />
      <header className="grid gap-4">
        <Crumbs current="Solutions" />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">The same record, for different shops</h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          BluuPay serves the businesses that already sell in Nigeria. Each one gets sales, stock, payments, and profit without a different system per counter.
        </p>
      </header>
      <ul className="grid gap-4 md:grid-cols-2">
        {content.verticals.map((vertical) => (
          <li key={vertical.name} id={vertical.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="rounded-2xl border border-line bg-white p-5">
            <h2 className="text-xl font-semibold">{vertical.name}</h2>
            <p className="mt-2 leading-7 text-muted">{vertical.body}</p>
          </li>
        ))}
      </ul>
      <CtaBand dashboard={dashboardUrl()} />
    </div>
  );
}
