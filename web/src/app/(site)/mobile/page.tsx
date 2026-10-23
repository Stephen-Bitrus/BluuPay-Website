import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProductStage } from "@/components/ProductStage";
import { Crumbs, CtaBand } from "@/components/Sections";
import { breadcrumbSchema } from "@/lib/schema";
import { Mark } from "@/components/Icons";
import { btnPrimary } from "@/lib/ui";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Mobile app",
  "The BluuPay mobile app is live. Sell and check stock, payments, and profit from the phone. Terminals, tablets, and other BluuPay hardware are coming soon.",
  "/mobile",
);

export default function MobilePage() {
  const dashboard = dashboardUrl();
  return (
    <>
      <JsonLd data={breadcrumbSchema("Mobile", "/mobile")} />
      <section className="hero-wash border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <header className="grid gap-5">
            <Crumbs current="Mobile" />
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Mobile</p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">Sell from the phone you already have</h1>
            <p className="max-w-xl text-lg leading-8 text-muted">
              The BluuPay mobile app is available to merchants today. Record the sale, take the payment, and check stock and profit without a terminal.
            </p>
          </header>
          <ProductStage />
        </div>
      </section>
      <div className="bg-paper">
        <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 md:grid-cols-2 sm:py-20">
          <article className="rounded-[1.75rem] border border-line bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Live</p>
            <h2 className="mt-2 text-2xl font-semibold">Available now</h2>
            <ul className="stagger mt-4 grid gap-3 text-sm leading-6 text-muted">
              {[
                ["pos", "Point of sale on the phone"],
                ["transfer", "Payments, stock, invoices, and customers"],
                ["badge", "Staff can sell under their own role"],
                ["outlets", "The same business as the web dashboard"],
              ].map(([name, label]) => (
                <li key={label} className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3">
                  <Mark name={name} className="h-4 w-4 shrink-0 text-blue" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <a href={dashboard} className={`${btnPrimary} mt-6 px-5 py-3`}>
              Open the dashboard
            </a>
            <p className="mt-4 text-sm leading-6 text-muted">
              App store buttons will appear here when the public store links are ready. They are not linked yet.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-line bg-soon-bg p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-soon">Later</p>
            <h2 className="mt-2 text-2xl font-semibold">Coming soon</h2>
            <p className="mt-4 leading-7">
              BluuPay hardware is not available yet. That includes point-of-sale terminals, tablets, desktops, and BluuPay phones. Offline selling and the desktop app are also still to come.
            </p>
            <Link href="/product#coming-soon" className="mt-6 inline-block text-sm font-semibold text-blue">
              See everything that is not live yet
            </Link>
          </article>
        </section>
      </div>
      <CtaBand dashboard={dashboard} />
    </>
  );
}
