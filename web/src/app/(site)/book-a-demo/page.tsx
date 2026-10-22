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

export default function DemoPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_1fr]">
      <JsonLd data={breadcrumbSchema("Book a demo", "/book-a-demo")} />
      <div className="grid content-start gap-4">
        <Crumbs current="Book a demo" />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">See BluuPay on your kind of shop</h1>
        <p className="text-lg leading-8 text-muted">
          Tell us what you sell. We will walk through sales, payments, stock, and the report you would read at close. The demo uses what is live today.
        </p>
        <p className="text-sm leading-6 text-muted">
          Prefer email? Write to <a className="font-semibold text-blue" href="mailto:hello@bluupay.co">hello@bluupay.co</a>.
        </p>
      </div>
      <LeadForm kind="demo" verticals={verticals.map((item) => item.name)} />
    </div>
  );
}
