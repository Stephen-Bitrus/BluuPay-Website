import { createClient } from "@sanity/client";
import { faqs, liveFeatures, pricingFaqs, providers, soonFeatures, stories, verticals } from "../src/content/site";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId || !token) {
  console.log(
    "Sanity seed skipped. Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN, then run npm run seed.",
  );
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-10-22",
  token,
  useCdn: false,
});

async function main() {
  const docs: { _id: string; _type: string; [key: string]: unknown }[] = [
    ...[...liveFeatures, ...soonFeatures].map((feature, order) => ({
      _id: `feature-${slug(feature.title)}`,
      _type: "feature",
      ...feature,
      order,
    })),
    ...verticals.map((item, order) => ({
      _id: `vertical-${slug(item.name)}`,
      _type: "vertical",
      ...item,
      order,
    })),
    ...stories.map((item, order) => ({
      _id: `story-${slug(item.name)}`,
      _type: "story",
      ...item,
      order,
    })),
    ...faqs.map((item, order) => ({
      _id: `faq-${slug(item.question)}`,
      _type: "faq",
      ...item,
      placement: "general",
      order,
    })),
    ...pricingFaqs.map((item, order) => ({
      _id: `pricing-faq-${slug(item.question)}`,
      _type: "faq",
      ...item,
      placement: "pricing",
      order,
    })),
    ...providers.map((provider, order) => ({
      _id: `provider-${provider.id}`,
      _type: "paymentProvider",
      name: provider.name,
      settlement: provider.settlement,
      summary: provider.summary,
      collections: provider.collections.map((row) => ({ _type: "feeRow", ...row })),
      payouts: provider.payouts.map((row) => ({ _type: "feeRow", ...row })),
      order,
    })),
  ];

  for (const doc of docs) {
    await client.createOrReplace(doc);
  }
  console.log(`Seeded ${docs.length} documents to ${projectId}/${dataset}.`);
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
