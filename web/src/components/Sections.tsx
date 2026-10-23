import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq, Feature, Provider } from "@/content/site";
import { groups, journey, site } from "@/content/site";
import { CheckIcon, ClockIcon, GroupIcon, Mark, ShopScene } from "@/components/Icons";
import { btnGhostOnDark, btnOnDark, btnPrimary, btnSecondary } from "@/lib/ui";

export function Crumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-blue">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-medium text-ink">
          {current}
        </li>
      </ol>
    </nav>
  );
}

export function PageHero({
  crumb,
  eyebrow,
  title,
  lede,
  children,
}: {
  crumb: string;
  eyebrow?: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header className="hero-wash border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-14 sm:py-20">
        <Crumbs current={crumb} />
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{title}</h1>
        <p className="max-w-2xl text-lg leading-8 text-muted">{lede}</p>
        {children}
      </div>
    </header>
  );
}

export function Journey() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {journey.map((item) => (
        <li
          key={item.step}
          className="rounded-3xl border border-line bg-white p-5 shadow-[0_18px_50px_-36px_rgba(16,20,40,0.7)] transition duration-200 motion-safe:hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-3">
            <p className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-soft text-blue">
              <Mark name={item.title} />
            </p>
            <p className="text-sm font-semibold tabular-nums text-blue">{item.step}</p>
          </div>
          <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FeatureGroups({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-14">
      {groups.map((group) => {
        const items = features.filter((feature) => feature.group === group);
        if (!items.length) return null;
        return (
          <section key={group} aria-labelledby={`group-${group}`}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue text-white">
                <GroupIcon group={group} />
              </span>
              <h2 id={`group-${group}`} className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {group}
              </h2>
            </div>
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {items.map((feature, index) => (
                <li
                  key={feature.title}
                  className={`rounded-3xl border border-line bg-white p-5 shadow-[0_18px_50px_-36px_rgba(16,20,40,0.65)] transition duration-200 motion-safe:hover:-translate-y-0.5 ${index === 0 ? "md:col-span-2 md:p-7" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-soft text-blue">
                      <Mark name={feature.title} className="h-5 w-5" />
                    </span>
                    <h3 className={`font-semibold ${index === 0 ? "text-xl" : "text-lg"}`}>{feature.title}</h3>
                  </div>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{feature.body}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export function ComingSoon({ features }: { features: Feature[] }) {
  return (
    <section id="coming-soon" aria-labelledby="coming-soon-title" className="rounded-[1.75rem] border border-line bg-white p-5 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-soon">Coming soon</p>
          <h2 id="coming-soon-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Not available to merchants yet
          </h2>
        </div>
      </div>
      <p className="mt-3 max-w-3xl leading-7 text-muted">
        These are on the way. They are not part of what you can use when you open the dashboard today.
      </p>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.title} className="rounded-2xl bg-soon-bg px-4 py-4">
            <div className="flex items-center gap-2 text-soon">
              <ClockIcon />
              <h3 className="font-semibold text-ink">{feature.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-6 text-ink/80">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Stories({ stories }: { stories: { quote: string; name: string; place: string }[] }) {
  return (
    <section className="bg-night text-white" aria-labelledby="stories-title">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Merchants</p>
          <h2 id="stories-title" className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            The record, in the words of the shop
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {stories.map((story, index) => (
            <figure
              key={story.name}
              className={`rounded-3xl border border-white/10 p-6 sm:p-8 ${index === 0 ? "bg-white text-ink lg:row-span-1" : "bg-white/5"}`}
            >
              <Mark name="quote" className={`mb-4 h-7 w-7 ${index === 0 ? "text-blue" : "text-white/70"}`} />
              <blockquote className={`leading-snug ${index === 0 ? "text-2xl font-semibold tracking-tight sm:text-3xl" : "text-xl"}`}>
                “{story.quote}”
              </blockquote>
              <figcaption className={`mt-6 text-sm font-semibold ${index === 0 ? "text-muted" : "text-white/70"}`}>
                <span className={index === 0 ? "text-ink" : "text-white"}>{story.name}</span>
                <span> · {story.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items, title = "Questions" }: { items: Faq[]; title?: string }) {
  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-line bg-white px-5 py-1 open:shadow-[0_18px_40px_-32px_rgba(16,20,40,0.8)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold">
              {item.question}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-soft text-lg leading-none text-blue transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pb-5 leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function SettlementChoice({ providers }: { providers: Provider[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {providers.map((provider) => {
        const instant = provider.id === "nomba";
        return (
          <article
            key={provider.id}
            className={`flex flex-col rounded-[1.75rem] border p-6 sm:p-8 ${instant ? "border-night bg-night text-white" : "border-line bg-white"}`}
          >
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl ${instant ? "bg-white/10 text-white" : "bg-blue-soft text-blue"}`}>
                <Mark name={instant ? "instant" : "nextday"} />
              </span>
              <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${instant ? "text-white/60" : "text-blue"}`}>
                {provider.settlement}
              </p>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{provider.name}</h3>
            <p className={`mt-3 flex-1 text-sm leading-6 ${instant ? "text-white/75" : "text-muted"}`}>{provider.summary}</p>
            <p className="mt-6 text-lg font-semibold tabular-nums">{provider.collections[0]?.fee}</p>
            <p className={`text-sm ${instant ? "text-white/60" : "text-muted"}`}>for a bank transfer</p>
            <Link
              href={`/pricing#${provider.id}`}
              className={`mt-6 inline-flex text-sm font-semibold ${instant ? "text-white underline decoration-white/40 underline-offset-4" : "text-blue"}`}
            >
              See {provider.name} fees
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export function InBrief({
  live,
  soon,
  dashboard,
}: {
  live: Feature[];
  soon: Feature[];
  dashboard: string;
}) {
  return (
    <section id="in-brief" aria-labelledby="brief-title" className="rounded-[1.75rem] border border-line bg-white p-5 sm:p-8">
      <h2 id="brief-title" className="text-3xl font-semibold tracking-tight">
        BluuPay in brief
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-muted">{site.description}</p>
      <p className="mt-3 leading-7">
        Sign up and sign in at{" "}
        <a className="font-semibold text-blue" href={dashboard}>
          {dashboard.replace("https://", "")}
        </a>
        .
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-blue-soft/60 p-5">
          <h3 className="font-semibold">Live today</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6">
            {live.map((feature) => (
              <li key={feature.title} className="flex gap-2">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-blue" />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-paper p-5">
          <h3 className="font-semibold">Coming soon</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6">
            {soon.map((feature) => (
              <li key={feature.title} className="flex gap-2">
                <ClockIcon className="mt-1 h-4 w-4 shrink-0 text-soon" />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ dashboard }: { dashboard: string }) {
  return (
    <section className="bg-blue text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Start today</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">Start with the shop you already run.</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/85">
            Create the business on the dashboard, add products, and record the next sale. A terminal is not required.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end">
          <ShopScene className="h-28 w-40 text-white/90 sm:h-36 sm:w-52" />
          <div className="flex flex-wrap gap-3">
            <a href={dashboard} className={`${btnOnDark} px-5 py-3`}>
              Get started free
            </a>
            <Link href="/book-a-demo" className={`${btnGhostOnDark} px-5 py-3`}>
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProofBar() {
  const facts = [
    ["Nigeria", "Built for merchants here"],
    ["No terminal", "Start on the phone you have"],
    ["Palmpay", "Next business day"],
    ["Nomba MFB", "Instant settlement"],
  ];
  return (
    <section aria-label="What is available today" className="border-b border-line bg-paper">
      <ul className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(([title, body]) => (
          <li key={title} className="flex gap-3 bg-paper px-4 py-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white text-blue">
              <Mark name={title} />
            </span>
            <span>
              <span className="block text-base font-semibold">{title}</span>
              <span className="mt-1 block text-sm text-muted">{body}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ActionRow({ dashboard }: { dashboard: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={dashboard} className={`${btnPrimary} px-5 py-3`}>
        Get started free
      </a>
      <Link href="/book-a-demo" className={`${btnSecondary} px-5 py-3`}>
        Book a demo
      </Link>
    </div>
  );
}
