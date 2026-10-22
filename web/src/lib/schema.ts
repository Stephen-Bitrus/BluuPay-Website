import type { Faq, Provider } from "@/content/site";
import { site } from "@/content/site";
import { absoluteUrl, dashboardUrl } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/bluupay-logo.png"),
    email: site.emails.hello,
    slogan: site.tagline,
    areaServed: "NG",
    sameAs: [...site.sameAs],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function softwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, mobile",
    url: site.url,
    description: site.description,
    offers: { "@type": "Offer", description: "Collection and payout fees are listed on the pricing page.", url: absoluteUrl("/pricing") },
    provider: { "@type": "Organization", name: site.name, url: site.url },
    installUrl: dashboardUrl(),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(current: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: current, item: absoluteUrl(path) },
    ],
  };
}

export function priceOffers(providers: Provider[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BluuPay fees",
    itemListElement: providers.flatMap((provider, providerIndex) =>
      [...provider.collections, ...provider.payouts].map((row, rowIndex) => ({
        "@type": "ListItem",
        position: providerIndex * 10 + rowIndex + 1,
        item: {
          "@type": "Offer",
          name: `${provider.name} — ${row.channel}`,
          description: `${row.fee}. ${row.note}. Settlement: ${provider.settlement}.`,
          priceCurrency: "NGN",
          url: absoluteUrl(`/pricing#${provider.id}`),
          seller: { "@type": "Organization", name: site.name },
        },
      })),
    ),
  };
}
