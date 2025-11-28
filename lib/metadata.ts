import type { Metadata } from "next";

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function generatePageMetadata({
  title,
  description,
  image = "/og-default.jpg",
  url = "https://goasaya.com",
}: MetaProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "GoaSaya",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
