import Link from "next/link";
import type { Faq, Feature, Provider } from "@/content/site";
import { groups, journey, site } from "@/content/site";

export function Crumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link href="/" className="hover:text-blue">Home</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-ink">{current}</li>
      </ol>
    </nav>
  );
}

export function Journey() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {journey.map((item) => (
        <li key={item.step} className="rounded-2xl border border-line bg-white p-5">
          <p className="text-sm font-semibold tabular-nums text-blue">{item.step}</p>
          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FeatureGroups({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-10">
      {groups.map((group) => {
        const items = features.filter((feature) => feature.group === group);
        if (!items.length) return null;
        return (
          <section key={group} aria-labelledby={`group-${group}`}>
            <h2 id={`group-${group}`} className="text-2xl font-semibold tracking-tight">{group}</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {items.map((feature) => (
                <li key={feature.title} className="rounded-2xl border border-line bg-white p-5">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
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
    <section id="coming-soon" aria-labelledby="coming-soon-title" className="rounded-2xl border border-line bg-soon-bg p-5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-soon">Coming soon</p>
      <h2 id="coming-soon-title" className="mt-2 text-2xl font-semibold tracking-tight">Not available to merchants yet</h2>
      <p className="mt-3 max-w-3xl leading-7 text-ink">
        These are on the way. They are not part of what you can use when you open the dashboard today.
      </p>
      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.title}>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="mt-1 text-sm leading-6">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Stories({ stories }: { stories: { quote: string; name: string; place: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {stories.map((story) => (
        <figure key={story.name} className="rounded-2xl border border-line bg-white p-5">
          <blockquote className="text-lg leading-8">“{story.quote}”</blockquote>
          <figcaption className="mt-4 text-sm font-semibold">
            {story.name} <span className="font-normal text-muted">· {story.place}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FaqList({ items, title = "Questions" }: { items: Faq[]; title?: string }) {
  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 grid gap-4">
        {items.map((item) => (
          <article key={item.question} className="rounded-2xl border border-line bg-white p-5">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <p className="mt-2 leading-7 text-muted">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SettlementChoice({ providers }: { providers: Provider[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {providers.map((provider) => (
        <article key={provider.id} className="rounded-2xl border border-line bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">{provider.settlement}</p>
          <h3 className="mt-2 text-xl font-semibold">{provider.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{provider.summary}</p>
          <p className="mt-4 text-sm font-medium tabular-nums">{provider.collections[0]?.fee} for a bank transfer.</p>
          <Link href={`/pricing#${provider.id}`} className="mt-4 inline-block text-sm font-semibold text-blue">
            See {provider.name} fees
          </Link>
        </article>
      ))}
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
    <section id="in-brief" aria-labelledby="brief-title" className="rounded-2xl border border-line bg-white p-5 sm:p-8">
      <h2 id="brief-title" className="text-2xl font-semibold tracking-tight">BluuPay in brief</h2>
      <p className="mt-3 max-w-3xl leading-7">{site.description}</p>
      <p className="mt-3 leading-7">
        Sign up and sign in at <a className="font-semibold text-blue" href={dashboard}>{dashboard.replace("https://", "")}</a>.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold">Live today</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
            {live.map((feature) => (
              <li key={feature.title}>{feature.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Coming soon</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
            {soon.map((feature) => (
              <li key={feature.title}>{feature.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ dashboard }: { dashboard: string }) {
  return (
    <section className="rounded-2xl bg-blue px-5 py-10 text-white sm:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">Start with the shop you already run.</h2>
      <p className="mt-3 max-w-2xl leading-7 text-white/90">
        Create the business on the dashboard, add products, and record the next sale. A terminal is not required.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={dashboard} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue">
          Get started free
        </a>
        <Link href="/book-a-demo" className="rounded-full border border-white px-5 py-3 text-sm font-semibold">
          Book a demo
        </Link>
      </div>
    </section>
  );
}
