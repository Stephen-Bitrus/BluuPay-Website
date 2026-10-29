import { posts as fallback, type Post, type PostBlock } from "@/content/posts";
import { getSanityClient } from "@/sanity/client";
import { featuredImage } from "@/sanity/image";

const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  author,
  image { alt, hotspot, crop, asset->{ _id } },
  body
}`;

function isBlock(value: unknown): value is PostBlock {
  if (!value || typeof value !== "object") return false;
  const block = value as PostBlock;
  return block._type === "block" && Array.isArray(block.children) && block.children.some((child) => child?.text);
}

function clean(post: Partial<Post> & { image?: Parameters<typeof featuredImage>[0] } | null | undefined): Post | null {
  if (!post?.title || !post.slug || !post.excerpt || !post.publishedAt) return null;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) return null;
  const body = (post.body ?? []).filter(isBlock);
  if (!body.length) return null;
  const local = fallback.find((item) => item.slug === post.slug)?.image;
  const image = featuredImage(post.image, post.title) ?? local;
  if (!image) return null;
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    author: post.author || "BluuPay",
    image,
    body,
  };
}

export async function getPosts(): Promise<Post[]> {
  const client = getSanityClient();
  if (!client) return fallback;
  try {
    const remote = await client.fetch<Partial<Post>[]>(query, {}, { next: { tags: ["sanity"], revalidate: 60 } });
    const posts = (remote ?? []).map(clean).filter((post): post is Post => Boolean(post));
    return posts.length ? posts : fallback;
  } catch {
    return fallback;
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export function formatPostDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Africa/Lagos",
  }).format(date);
}
