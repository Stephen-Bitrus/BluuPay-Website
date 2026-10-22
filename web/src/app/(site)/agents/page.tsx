import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { Crumbs } from "@/components/Sections";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Agents",
  "BluuPay agents introduce the product to businesses in Nigeria and help them get started. Apply with your name, city, and how you reach merchants.",
  "/agents",
);

export default function AgentsPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_1fr]">
      <JsonLd data={breadcrumbSchema("Agents", "/agents")} />
      <div className="grid content-start gap-4">
        <Crumbs current="Agents" />
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Introduce BluuPay to businesses you already know</h1>
        <p className="text-lg leading-8 text-muted">
          Agents help shop owners create an account, add products, and record the first sales. Commission terms are agreed when you are accepted. This page does not publish a rate.
        </p>
        <ul className="grid gap-3 text-sm leading-6">
          <li className="rounded-2xl border border-line bg-white p-4">You work with merchants in Nigeria.</li>
          <li className="rounded-2xl border border-line bg-white p-4">You explain what is live today, including payments, stock, staff, and outlets.</li>
          <li className="rounded-2xl border border-line bg-white p-4">You do not promise WhatsApp, terminals, offline selling, or hardware. Those are coming soon.</li>
        </ul>
      </div>
      <LeadForm kind="agent" />
    </div>
  );
}
