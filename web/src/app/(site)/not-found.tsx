import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">That page is not on BluuPay</h1>
      <p className="mt-4 leading-7 text-muted">The address may have changed. The product, pricing, and demo pages are still here.</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <Link href="/" className="text-blue">Home</Link>
        <Link href="/product" className="text-blue">Product</Link>
        <Link href="/pricing" className="text-blue">Pricing</Link>
      </div>
    </div>
  );
}
