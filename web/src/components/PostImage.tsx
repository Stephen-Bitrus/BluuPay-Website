import Image from "next/image";
import type { Post } from "@/content/posts";

export function PostImage({ post, priority = false, sizes }: { post: Post; priority?: boolean; sizes: string }) {
  return (
    <Image
      src={post.image.src}
      alt={post.image.alt}
      width={post.image.width}
      height={post.image.height}
      priority={priority}
      sizes={sizes}
      className="aspect-[16/9] h-auto w-full object-cover"
    />
  );
}