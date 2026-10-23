import Link from "next/link";
import { EmptyShelf } from "@/components/Illustrations";
import { btnPrimary, btnSecondary } from "@/lib/ui";

export default function NotFound() {
  return (
    <div className="hero-wash bg-white">
      <div className="mx-auto max-w-3xl px-4 py-24">
        <EmptyShelf />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-blue">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">That page is not on BluuPay</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
          The address may have changed. The product, pricing, and demo pages are still here.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className={`${btnPrimary} px-5 py-3`}>
            Home
          </Link>
          <Link href="/product" className={`${btnSecondary} px-5 py-3`}>
            Product
          </Link>
          <Link href="/pricing" className={`${btnSecondary} px-5 py-3`}>
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
