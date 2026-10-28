import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PostBody } from "@/components/PostBody";
import { site } from "@/content/site";
import { formatPostDate, getPost, getPosts } from "@/lib/posts";
import { absoluteUrl, pageMeta } from "@/lib/seo";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Note not found", robots: { index: false, follow: false } };
  return pageMeta(post.title, post.excerpt, `/blog/${post.slug}`);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const url = absoluteUrl(`/blog/${post.slug}`);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          author: { "@type": "Organization", name: post.author, url: site.url },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          mainEntityOfPage: url,
        }}
      />
      <article className="border-b border-line bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-blue">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-ink">
                {post.title}
              </li>
            </ol>
          </nav>
          <p className="mt-6 text-sm font-semibold text-blue">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span className="text-muted"> · {post.author}</span>
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>
          <PostBody body={post.body} />
          <p className="mt-12">
            <Link href="/blog" className="text-sm font-semibold text-blue">
              All notes
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
