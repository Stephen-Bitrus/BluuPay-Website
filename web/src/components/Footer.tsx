import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Footer({ dashboard }: { dashboard: string }) {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/bluupay-logo.png" alt="" width={476} height={137} className="h-8 w-auto" />
          <p className="mt-3 text-sm leading-6 text-muted">{site.tagline}</p>
          <p className="mt-2 text-sm leading-6 text-muted">For merchants in Nigeria.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Product</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><Link href="/product" className="hover:text-blue">Product</Link></li>
            <li><Link href="/solutions" className="hover:text-blue">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-blue">Pricing</Link></li>
            <li><Link href="/mobile" className="hover:text-blue">Mobile</Link></li>
            <li><Link href="/agents" className="hover:text-blue">Agents</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Get started</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><a href={dashboard} className="hover:text-blue">Create an account</a></li>
            <li><a href={dashboard} className="hover:text-blue">Sign in</a></li>
            <li><Link href="/book-a-demo" className="hover:text-blue">Book a demo</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><a href={`mailto:${site.emails.hello}`} className="hover:text-blue">{site.emails.hello}</a></li>
            <li><a href={`mailto:${site.emails.legal}`} className="hover:text-blue">{site.emails.legal}</a></li>
            <li><a href={`mailto:${site.emails.privacy}`} className="hover:text-blue">{site.emails.privacy}</a></li>
            <li><Link href="/privacy-policy" className="hover:text-blue">Privacy policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-blue">Terms of service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-muted">© 2026 BluuPay</p>
      </div>
    </footer>
  );
}
