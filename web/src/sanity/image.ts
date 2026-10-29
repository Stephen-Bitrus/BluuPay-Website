import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import type { PostImage } from "@/content/posts";

type RemoteImage = {
  alt?: string;
  hotspot?: unknown;
  crop?: unknown;
  asset?: { _id?: string };
};

export function featuredImage(image: RemoteImage | null | undefined, title: string): PostImage | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const ref = image?.asset?._id;
  if (!projectId || !ref) return null;
  const src = createImageUrlBuilder({ projectId, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production" })
    .image({
      _type: "image",
      asset: { _ref: ref },
      hotspot: image?.hotspot,
      crop: image?.crop,
    } as SanityImageSource)
    .width(1600)
    .height(900)
    .fit("crop")
    .auto("format")
    .url();
  if (!src) return null;
  return { src, alt: image?.alt || title, width: 1600, height: 900 };
}
