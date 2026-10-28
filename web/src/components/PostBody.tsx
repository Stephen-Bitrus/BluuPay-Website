import Link from "next/link";
import type { ReactNode } from "react";
import type { PostBlock, PostMark, PostSpan } from "@/content/posts";

function spans(children: PostSpan[], markDefs: PostMark[] = []): ReactNode[] {
  return children.map((child) => {
    let node: ReactNode = child.text;
    for (const mark of child.marks ?? []) {
      if (mark === "strong") node = <strong key={`${child._key}-strong`}>{node}</strong>;
      else if (mark === "em") node = <em key={`${child._key}-em`}>{node}</em>;
      else {
        const definition = markDefs.find((item) => item._key === mark && item._type === "link" && item.href);
        if (definition) {
          const href = definition.href;
          node = href.startsWith("/") ? (
            <Link key={`${child._key}-${mark}`} href={href} className="font-semibold text-blue">
              {node}
            </Link>
          ) : (
            <a key={`${child._key}-${mark}`} href={href} className="font-semibold text-blue">
              {node}
            </a>
          );
        }
      }
    }
    return <span key={child._key}>{node}</span>;
  });
}

export function PostBody({ body }: { body: PostBlock[] }) {
  const nodes: ReactNode[] = [];
  let list: { type: "bullet" | "number"; items: PostBlock[] } | null = null;

  function flush() {
    if (!list) return;
    const items = list.items.map((item) => (
      <li key={item._key} className="leading-8">
        {spans(item.children, item.markDefs)}
      </li>
    ));
    nodes.push(
      list.type === "number" ? (
        <ol key={`list-${list.items[0]?._key}`} className="my-4 grid list-decimal gap-2 pl-5">
          {items}
        </ol>
      ) : (
        <ul key={`list-${list.items[0]?._key}`} className="my-4 grid list-disc gap-2 pl-5">
          {items}
        </ul>
      ),
    );
    list = null;
  }

  for (const block of body) {
    if (block.listItem === "bullet" || block.listItem === "number") {
      if (!list || list.type !== block.listItem) {
        flush();
        list = { type: block.listItem, items: [] };
      }
      list.items.push(block);
      continue;
    }
    flush();
    const content = spans(block.children, block.markDefs);
    if (block.style === "h2") {
      nodes.push(
        <h2 key={block._key} className="mt-10 text-2xl font-semibold tracking-tight">
          {content}
        </h2>,
      );
    } else if (block.style === "h3") {
      nodes.push(
        <h3 key={block._key} className="mt-8 text-xl font-semibold tracking-tight">
          {content}
        </h3>,
      );
    } else {
      nodes.push(
        <p key={block._key} className="mt-4 leading-8 text-muted">
          {content}
        </p>,
      );
    }
  }
  flush();
  return <div>{nodes}</div>;
}
