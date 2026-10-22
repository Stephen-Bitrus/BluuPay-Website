import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { Crumbs } from "@/components/Sections";
import { verticals } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Book a demo",
  "Book a BluuPay demo for your shop. Tell us the business, a phone number, and what you want to see. We reply from hello@bluupay.co.",
  "/book-a-demo",
);

const points = [
  "Sales at the counter or on the phone",
  "Palmpay next business day, or Nomba instantly",
  "Stock, profit, and the close-of-day report",
];

export default function DemoPage() {
  return (
    <div className="hero-wash bg-white">
      <JsonLd data={breadcrumbSchema("Book a demo", "/book-a-demo")} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-20">
        <div className="grid content-start gap-5">
          <Crumbs current="Book a demo" />
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Demo</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">See BluuPay on your kind of shop</h1>
          <p className="text-lg leading-8 text-muted">
            Tell us what you sell. We will walk through sales, payments, stock, and the report you would read at close. The demo uses what is live today.
          </p>
          <ul className="grid gap-3">
            {points.map((point) => (
              <li key={point} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-medium">
                {point}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-6 text-muted">
            Prefer email? Write to{" "}
            <a className="font-semibold text-blue" href="mailto:hello@bluupay.co">
              hello@bluupay.co
            </a>
            .
          </p>
        </div>
        <LeadForm kind="demo" verticals={verticals.map((item) => item.name)} />
      </div>
    </div>
  );
}
