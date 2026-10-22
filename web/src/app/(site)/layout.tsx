import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dashboardUrl } from "@/lib/seo";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const dashboard = dashboardUrl();
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header dashboard={dashboard} />
      <main id="content">{children}</main>
      <Footer dashboard={dashboard} />
    </>
  );
}
