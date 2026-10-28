import { JsonLd } from "@/components/JsonLd";
import { Mark, ShopScene } from "@/components/Icons";
import { CtaBand, PageHero } from "@/components/Sections";
import { getContent } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const revalidate = 60;

export const metadata = pageMeta(
  "Solutions",
  "BluuPay is for retail shops, market traders, wholesalers, service providers, kiosks, boutiques, spare-parts shops, pharmacies, food vendors, and supermarkets in Nigeria.",
  "/solutions",
);

export default async function SolutionsPage() {
  const content = await getContent();
  return (
    <>
      <JsonLd data={breadcrumbSchema("Solutions", "/solutions")} />
      <PageHero
        crumb="Solutions"
        eyebrow="Solutions"
        title="The same record, for different shops"
        lede="BluuPay serves the businesses that already sell in Nigeria. Each one gets sales, stock, payments, and profit without a different system per counter."
      />
      <div className="bg-paper">
        <ul className="stagger mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:grid-cols-2 sm:py-20">
          {content.verticals.map((vertical, index) => (
            <li
              key={vertical.name}
              id={vertical.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className={`rounded-[1.75rem] border border-line bg-white p-6 shadow-[0_18px_50px_-36px_rgba(16,20,40,0.65)] ${index === 0 ? "sm:col-span-2 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:p-8" : ""}`}
            >
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-soft text-blue">
                  <Mark name={vertical.name} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-blue">Nigeria</p>
                <h2 className={`mt-2 font-semibold tracking-tight ${index === 0 ? "text-3xl" : "text-xl"}`}>{vertical.name}</h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted">{vertical.body}</p>
              </div>
              {index === 0 ? <ShopScene className="float-y mt-6 h-32 w-48 text-blue sm:mt-0 sm:h-40 sm:w-56" /> : null}
            </li>
          ))}
        </ul>
      </div>
      <CtaBand dashboard={dashboardUrl()} />
    </>
  );
}
