import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NotFoundContent } from "@/components/NotFoundContent";
import { dashboardUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const dashboard = dashboardUrl();
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header dashboard={dashboard} />
      <main id="content">
        <NotFoundContent />
      </main>
      <Footer dashboard={dashboard} />
    </>
  );
}
