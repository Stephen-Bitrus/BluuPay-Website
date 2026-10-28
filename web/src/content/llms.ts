import {
  faqs,
  liveFeatures,
  pricingFaqs,
  providers,
  site,
  soonFeatures,
  verticals,
} from "./site";

export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Tagline: ${site.tagline}`,
    `Headline: ${site.headline}`,
    "Country: Nigeria",
    `Website: ${site.url}`,
    `Merchant dashboard (sign up and sign in): ${site.dashboardUrl}`,
    `Email: ${site.emails.hello}`,
    "",
    "## What merchants can use today",
    "",
    ...liveFeatures.map((feature) => `- ${feature.title}: ${feature.body}`),
    "",
    "## Coming soon (not available today)",
    "",
    ...soonFeatures.map((feature) => `- ${feature.title}: ${feature.body}`),
    "",
    "## Who it is for",
    "",
    ...verticals.map((vertical) => `- ${vertical.name}: ${vertical.body}`),
    "",
    "## Pricing",
    "",
    "Merchants can absorb BluuPay's collection fee or pass it through to the customer. The rates below are BluuPay's fees either way.",
    "",
  ];

  for (const provider of providers) {
    lines.push(`### ${provider.name}`);
    lines.push(`Settlement: ${provider.settlement}`);
    lines.push(provider.summary);
    lines.push("");
    lines.push("Collections:");
    for (const row of provider.collections) {
      lines.push(`- ${row.channel}: ${row.fee}. ${row.note}.`);
    }
    lines.push("Payouts:");
    for (const row of provider.payouts) {
      lines.push(`- ${row.channel}: ${row.fee}. ${row.note}.`);
    }
    lines.push("");
  }

  lines.push("## Questions");
  lines.push("");
  for (const faq of [...faqs, ...pricingFaqs]) {
    lines.push(`### ${faq.question}`);
    lines.push(faq.answer);
    lines.push("");
  }

  lines.push("## Canonical pages");
  lines.push("");
  const paths = [
    ["/", "Home"],
    ["/product", "Product"],
    ["/solutions", "Solutions"],
    ["/pricing", "Pricing"],
    ["/mobile", "Mobile app"],
    ["/agents", "Agents"],
    ["/blog", "Blog"],
    ["/book-a-demo", "Book a demo"],
    ["/privacy-policy", "Privacy policy"],
    ["/terms-of-service", "Terms of service"],
  ];
  for (const [path, label] of paths) {
    lines.push(`- [${label}](${site.url}${path === "/" ? "/" : path})`);
  }
  lines.push("");
  return lines.join("\n");
}
