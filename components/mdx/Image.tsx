import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export function ArticleImage({ src, alt, caption }: Props) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={250}
        height={250}
      />
      {caption && (
        <figcaption className="mt-2 text-xs text-black/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
