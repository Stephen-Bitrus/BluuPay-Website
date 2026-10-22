"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/content/site";

export function Header({ dashboard }: { dashboard: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0" aria-label="BluuPay home">
          <Image src="/bluupay-logo.png" alt="BluuPay" width={476} height={137} className="h-8 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/book-a-demo" className="text-sm font-semibold hover:text-blue">
            Book a demo
          </Link>
          <a
            href={dashboard}
            className="rounded-full bg-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-deep"
          >
            Get started free
          </a>
        </div>
        <button
          type="button"
          className="rounded-md border border-line px-3 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line bg-white px-4 py-4 md:hidden" aria-label="Mobile">
          <ul className="grid gap-3 text-base font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book-a-demo" onClick={() => setOpen(false)}>
                Book a demo
              </Link>
            </li>
            <li>
              <a href={dashboard} className="font-semibold text-blue">
                Get started free
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">{site.tagline}</p>
        </nav>
      ) : null}
    </header>
  );
}
