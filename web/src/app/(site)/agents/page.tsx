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

const points = [
  "You work with merchants in Nigeria.",
  "You explain what is live today, including payments, stock, staff, and outlets.",
  "You do not promise WhatsApp, terminals, offline selling, or hardware. Those are coming soon.",
];

export default function AgentsPage() {
  return (
    <div className="hero-wash bg-white">
      <JsonLd data={breadcrumbSchema("Agents", "/agents")} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-20">
        <div className="grid content-start gap-5">
          <Crumbs current="Agents" />
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Agents</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">Introduce BluuPay to businesses you already know</h1>
          <p className="text-lg leading-8 text-muted">
            Agents help shop owners create an account, add products, and record the first sales. Commission terms are agreed when you are accepted. This page does not publish a rate.
          </p>
          <ul className="grid gap-3">
            {points.map((point) => (
              <li key={point} className="rounded-2xl border border-line bg-white px-4 py-4 text-sm leading-6">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <LeadForm kind="agent" />
      </div>
    </div>
  );
}
