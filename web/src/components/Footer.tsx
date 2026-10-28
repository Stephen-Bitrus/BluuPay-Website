import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Footer({ dashboard }: { dashboard: string }) {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-flex rounded-xl bg-white px-3 py-2">
            <Image src="/bluupay-logo.png" alt="BluuPay" width={476} height={137} className="h-7 w-auto" />
          </span>
          <p className="mt-4 text-sm leading-6 text-white/70">{site.tagline}</p>
          <p className="mt-2 text-sm leading-6 text-white/70">For merchants in Nigeria.</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Product</h2>
          <ul className="mt-3 grid gap-2 text-sm text-white/75">
            <li><Link href="/product" className="hover:text-white">Product</Link></li>
            <li><Link href="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/mobile" className="hover:text-white">Mobile</Link></li>
            <li><Link href="/agents" className="hover:text-white">Agents</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Get started</h2>
          <ul className="mt-3 grid gap-2 text-sm text-white/75">
            <li><a href={dashboard} className="hover:text-white">Create an account</a></li>
            <li><a href={dashboard} className="hover:text-white">Sign in</a></li>
            <li><Link href="/book-a-demo" className="hover:text-white">Book a demo</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-3 grid gap-2 text-sm text-white/75">
            <li><a href={`mailto:${site.emails.hello}`} className="hover:text-white">{site.emails.hello}</a></li>
            <li><a href={`mailto:${site.emails.legal}`} className="hover:text-white">{site.emails.legal}</a></li>
            <li><a href={`mailto:${site.emails.privacy}`} className="hover:text-white">{site.emails.privacy}</a></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/55">© 2026 BluuPay</p>
      </div>
    </footer>
  );
}
