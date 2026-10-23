import {
  faqs,
  liveFeatures,
  pricingFaqs,
  providers,
  soonFeatures,
  stories,
  verticals,
  type Faq,
  type Feature,
  type Provider,
} from "@/content/site";
import { getSanityClient } from "@/sanity/client";

export type SiteContent = {
  liveFeatures: Feature[];
  soonFeatures: Feature[];
  verticals: { name: string; body: string }[];
  stories: { quote: string; name: string; place: string }[];
  faqs: Faq[];
  pricingFaqs: Faq[];
  providers: Provider[];
};

const seed: SiteContent = {
  liveFeatures: [...liveFeatures],
  soonFeatures: [...soonFeatures],
  verticals: verticals.map((item) => ({ name: item.name, body: item.body })),
  stories: stories.map((item) => ({ ...item })),
  faqs: [...faqs],
  pricingFaqs: [...pricingFaqs],
  providers,
};

const query = `{
  "features": *[_type == "feature"] | order(order asc) { title, body, group, status },
  "verticals": *[_type == "vertical"] | order(order asc) { name, body },
  "stories": *[_type == "story"] | order(order asc) { quote, name, place },
  "faqs": *[_type == "faq"] | order(order asc) { question, answer, placement },
  "providers": *[_type == "paymentProvider"] | order(order asc) {
    name, settlement, summary, collections[]{ channel, fee, note }, payouts[]{ channel, fee, note }
  }
}`;

type Remote = {
  features?: Feature[];
  verticals?: { name: string; body: string }[];
  stories?: { quote: string; name: string; place: string }[];
  faqs?: (Faq & { placement?: string })[];
  providers?: (Omit<Provider, "id"> & { id?: string })[];
};

function liveCollections(rows: Provider["collections"] | undefined) {
  return (rows ?? []).filter((row) => /virtual account|wallet payment/i.test(row.channel));
}

function withIds(items: Omit<Provider, "id">[]): Provider[] {
  return items.map((provider, index) => ({
    id: provider.name.toLowerCase().includes("nomba") ? "nomba" : index === 0 ? "palmpay" : `provider-${index}`,
    ...provider,
    collections: liveCollections(provider.collections),
    payouts: provider.payouts ?? [],
  }));
}

export async function getContent(): Promise<SiteContent> {
  const client = getSanityClient();
  if (!client) return seed;
  try {
    const remote = await client.fetch<Remote>(query);
    const features = (remote.features ?? []).filter((item) => item.title && item.body);
    const general = (remote.faqs ?? []).filter((item) => item.placement !== "pricing");
    const pricing = (remote.faqs ?? []).filter((item) => item.placement === "pricing");
    return {
      liveFeatures: features.some((item) => item.status === "live")
        ? features.filter((item) => item.status === "live")
        : seed.liveFeatures,
      soonFeatures: features.some((item) => item.status === "soon")
        ? features.filter((item) => item.status === "soon")
        : seed.soonFeatures,
      verticals: remote.verticals?.length ? remote.verticals : seed.verticals,
      stories: remote.stories?.length ? remote.stories : seed.stories,
      faqs: general.length ? general : seed.faqs,
      pricingFaqs: pricing.length ? pricing : seed.pricingFaqs,
      providers: remote.providers?.length ? withIds(remote.providers) : seed.providers,
    };
  } catch {
    return seed;
  }
}
