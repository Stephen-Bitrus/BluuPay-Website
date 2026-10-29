import type { MetadataRoute } from "next";
import { pages } from "@/content/site";
import { getPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = await getPosts();
  const staticPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: page.path === "/pricing" || page.path === "/blog" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
  const notes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticPages, ...notes];
}
