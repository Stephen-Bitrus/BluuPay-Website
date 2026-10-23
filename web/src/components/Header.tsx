"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { btnPrimary, btnSecondary } from "@/lib/ui";

export function Header({ dashboard }: { dashboard: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0" aria-label="BluuPay home" onClick={() => setOpen(false)}>
          <Image src="/bluupay-logo.png" alt="BluuPay" width={476} height={137} className="h-8 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-blue" : "text-ink/80 hover:text-blue"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={dashboard} className="px-3 py-2 text-sm font-semibold text-ink/80 hover:text-blue">
            Sign in
          </a>
          <Link href="/book-a-demo" className={`${btnSecondary} px-4 py-2`}>
            Book a demo
          </Link>
          <a href={dashboard} className={`${btnPrimary} px-4 py-2`}>
            Get started free
          </a>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="flex w-4 flex-col gap-1" aria-hidden="true">
            <span className={`h-0.5 rounded bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 rounded bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 rounded bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-white px-4 py-4 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-1 text-base font-medium">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-3 py-3 hover:bg-paper ${active ? "text-blue" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 grid gap-2">
            <a href={dashboard} className={`${btnPrimary} px-4 py-3`}>
              Get started free
            </a>
            <Link href="/book-a-demo" className={`${btnSecondary} px-4 py-3`} onClick={() => setOpen(false)}>
              Book a demo
            </Link>
            <a href={dashboard} className="px-3 py-2 text-center text-sm font-semibold text-blue">
              Sign in
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
