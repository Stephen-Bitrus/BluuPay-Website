import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  const header = request.headers.get("x-revalidate-secret");
  if (!secret || header !== secret) {
    return Response.json({ ok: false }, { status: 401 });
  }
  revalidatePath("/", "layout");
  return Response.json({ ok: true });
}
