import type { ReactNode } from "react";

export const metadata = {
  title: "BluuPay studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: ReactNode }) {
  return children;
}
