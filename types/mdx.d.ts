declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const meta: {
    title: string;
    slug: string;
    metaTitle?: string;
    metaDescription?: string;
    publishedAt?: string;
    heroImage: string;  
    heroAlt?: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
