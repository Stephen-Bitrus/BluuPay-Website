import { JsonLd } from "@/components/JsonLd";
import { Crumbs } from "@/components/Sections";
import type { LegalDoc } from "@/content/legal";
import { breadcrumbSchema } from "@/lib/schema";

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto grid max-w-3xl gap-8 px-4 py-14 sm:py-20">
      <JsonLd data={breadcrumbSchema(doc.title, doc.path)} />
      <header className="grid gap-4 border-b border-line pb-8">
        <Crumbs current={doc.title} />
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{doc.title}</h1>
        <p className="text-sm text-muted">Last updated: {doc.updated}</p>
        <nav aria-label="On this page">
          <ol className="mt-2 grid gap-2 sm:grid-cols-2">
            {doc.sections.map((section) => (
              <li key={section.heading}>
                <a href={`#${sectionId(section.heading)}`} className="text-sm font-medium text-blue hover:underline">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      {doc.sections.map((section) => (
        <section key={section.heading} id={sectionId(section.heading)} className="grid gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
          {section.blocks.map((block, index) => {
            if (block.type === "h3") {
              return <h3 key={index} className="pt-2 text-lg font-semibold">{block.text}</h3>;
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="list-disc space-y-1 pl-5 leading-7">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index} className="leading-8">{block.text}</p>;
          })}
        </section>
      ))}
    </article>
  );
}
