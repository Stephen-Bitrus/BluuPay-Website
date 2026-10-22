import type { MetadataRoute } from "next";
import { pages } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: page.path === "/pricing" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}
