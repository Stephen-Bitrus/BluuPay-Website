import { revalidatePath, revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { type NextRequest, NextResponse } from "next/server";

const paths = ["/", "/product", "/solutions", "/pricing"];

function refresh() {
  revalidateTag("sanity");
  revalidatePath("/", "layout");
  for (const path of paths) revalidatePath(path);
}

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ ok: false }, { status: 401 });

  if (request.headers.get("sanity-webhook-signature")) {
    try {
      const { isValidSignature } = await parseBody(request, secret);
      if (!isValidSignature) return NextResponse.json({ ok: false }, { status: 401 });
    } catch {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    refresh();
    return NextResponse.json({ ok: true });
  }

  if (request.headers.get("x-revalidate-secret") === secret) {
    refresh();
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
