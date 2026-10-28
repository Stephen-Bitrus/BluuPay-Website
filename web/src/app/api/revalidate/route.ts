import { revalidatePath, revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { type NextRequest, NextResponse } from "next/server";

const paths = ["/", "/product", "/solutions", "/pricing", "/blog"];

type HookBody = { _type?: string; slug?: { current?: string } | string };

function postSlug(body: HookBody | null): string | undefined {
  if (!body || body._type !== "post" || !body.slug) return undefined;
  const slug = typeof body.slug === "string" ? body.slug : body.slug.current;
  return slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ? slug : undefined;
}

function refresh(slug?: string) {
  revalidateTag("sanity");
  revalidatePath("/", "layout");
  for (const path of paths) revalidatePath(path);
  if (slug) revalidatePath(`/blog/${slug}`);
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ ok: false }, { status: 401 });

  if (request.headers.get("sanity-webhook-signature")) {
    try {
      const { isValidSignature, body } = await parseBody<HookBody>(request, secret);
      if (!isValidSignature) return NextResponse.json({ ok: false }, { status: 401 });
      refresh(postSlug(body));
      return NextResponse.json({ ok: true });
    } catch {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
  }

  if (request.headers.get("x-revalidate-secret") === secret) {
    refresh();
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
