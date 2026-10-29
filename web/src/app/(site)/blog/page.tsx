import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PostImage } from "@/components/PostImage";
import { PageHero } from "@/components/Sections";
import { breadcrumbSchema } from "@/lib/schema";
import { formatPostDate, getPosts } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

export const revalidate = 60;

export const metadata = pageMeta(
  "Blog",
  "Notes for Nigerian merchants on recording a sale, collection fees, and what BluuPay can do today.",
  "/blog",
);

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <>
      <JsonLd data={breadcrumbSchema("Blog", "/blog")} />
      <PageHero
        crumb="Blog"
        eyebrow="Blog"
        title="Notes for the shop"
        lede="How a sale is recorded, what the fees are, and what is available today. Nothing here is promised before it is live."
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          {posts.length ? (
            <ul className="grid gap-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="grid overflow-hidden rounded-[1.75rem] border border-line bg-white sm:grid-cols-[17rem_1fr]">
                    <Link href={`/blog/${post.slug}`} className="block bg-paper" tabIndex={-1} aria-hidden="true">
                      <PostImage post={post} sizes="(min-width: 640px) 272px, 100vw" />
                    </Link>
                    <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold text-blue">
                      <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                      <span className="text-muted"> · {post.author}</span>
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 max-w-3xl leading-7 text-muted">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-blue">
                      Read the note
                    </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg leading-8 text-muted">No notes have been published yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
