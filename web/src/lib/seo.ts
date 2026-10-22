import type { Metadata } from "next";
import { site } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export function absoluteUrl(path: string): string {
  if (path === "/") return siteUrl;
  return `${siteUrl}${path}`;
}

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function dashboardUrl(): string {
  return process.env.NEXT_PUBLIC_DASHBOARD_URL || site.dashboardUrl;
}
