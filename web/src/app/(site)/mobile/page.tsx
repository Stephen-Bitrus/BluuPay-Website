import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Crumbs, CtaBand } from "@/components/Sections";
import { breadcrumbSchema } from "@/lib/schema";
import { dashboardUrl, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Mobile app",
  "The BluuPay mobile app is live. Sell and check stock, payments, and profit from the phone. Terminals, tablets, and other BluuPay hardware are coming soon.",
  "/mobile",
);

export default function MobilePage() {
  const dashboard = dashboardUrl();
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12">
      <JsonLd data={breadcrumbSchema("Mobile", "/mobile")} />
      <header className="grid gap-4">
        <Crumbs current="Mobile" />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Sell from the phone you already have</h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">
          The BluuPay mobile app is available to merchants today. Record the sale, take the payment, and check stock and profit without a terminal.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-line bg-white p-5">
          <h2 className="text-xl font-semibold">Available now</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted">
            <li>Point of sale on the phone</li>
            <li>Payments, stock, invoices, and customers</li>
            <li>Staff can sell under their own role</li>
            <li>The same business as the web dashboard</li>
          </ul>
          <a href={dashboard} className="mt-5 inline-block rounded-full bg-blue px-5 py-3 text-sm font-semibold text-white">
            Open the dashboard
          </a>
          <p className="mt-3 text-sm text-muted">App store buttons will appear here when the public store links are ready. They are not linked yet.</p>
        </article>
        <article className="rounded-2xl border border-line bg-soon-bg p-5">
          <h2 className="text-xl font-semibold">Coming soon</h2>
          <p className="mt-3 leading-7">
            BluuPay hardware is not available yet. That includes point-of-sale terminals, tablets, desktops, and BluuPay phones. Offline selling and the desktop app are also still to come.
          </p>
          <Link href="/product#coming-soon" className="mt-4 inline-block text-sm font-semibold text-blue">
            See everything that is not live yet
          </Link>
        </article>
      </section>
      <CtaBand dashboard={dashboard} />
    </div>
  );
}
