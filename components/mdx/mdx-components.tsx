import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  img: ({ alt, ...props }) => (
    <figure className="my-2">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md">
        <Image
          {...props}
          alt={alt || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>

      {alt && (
        <figcaption className="mt-2 text-center text-sm text-black/50 font-text">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      target="_blank"
      className="text-maroon underline underline-offset-4"
    >
      {children}
    </Link>
  ),
};
