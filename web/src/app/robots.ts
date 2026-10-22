import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.url;

const allow = {
  allow: "/",
  disallow: ["/studio", "/api/"],
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allow },
      { userAgent: "Googlebot", ...allow },
      { userAgent: "Bingbot", ...allow },
      { userAgent: "GPTBot", ...allow },
      { userAgent: "OAI-SearchBot", ...allow },
      { userAgent: "ChatGPT-User", ...allow },
      { userAgent: "ClaudeBot", ...allow },
      { userAgent: "anthropic-ai", ...allow },
      { userAgent: "PerplexityBot", ...allow },
      { userAgent: "Google-Extended", ...allow },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
