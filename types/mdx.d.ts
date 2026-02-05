declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const meta: {
    // identity
    id: number;
    title: string;
    slug: string;

    // analytics
    tracking?: string;

    // SEO
    metaTitle?: string;
    metaDescription?: string;

    // publishing
    publishedAt?: string;

    // visuals
    background?: string;
    heroImage?: string;
    heroAlt?: string;
    content?: string | string[];

    // schedule
    date?: string;
    time?: string;
    capacity: number;
    price?: number;
    location?: string;
    remainingSeats: number;
    isFull: boolean;

    // theme (editorial styling)
    theme?: {
      background?: string;
      text?: string;
      cta?: {
        color?: string;
        hoverColor?: string;
        text?: string;
      };
    };
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
