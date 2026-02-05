// import { articles } from "@/content/articles";

// export function getArticleSlugs() {
//   return articles.map((a) => a.slug);
// }

// export function getAllArticles() {
//   return articles
//     .map((a) => a.meta)
//     .sort((a, b) =>
//       (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")
//     );
// }

// export async function getArticleBySlug(slug: string) {
//   return articles.find((a) => a.slug === slug) ?? null;
// }

// import type { JournalIndexItem } from "@/content/articles/types";
// import { articles } from "@/content/articles";

// export async function getAllArticles(): Promise<JournalIndexItem[]> {
//   return articles.map((a) => {
//     if (!a.meta.heroImage) {
//       throw new Error(
//         `Journal "${a.meta.slug}" is missing heroImage`
//       );
//     }

//     return {
//       slug: a.meta.slug,
//       title: a.meta.title,
//       heroImage: a.meta.heroImage,
//       metaDescription: a.meta.metaDescription,
//     };
//   });
// }

// import { articles } from "@/content/articles";
// import type { JournalMeta } from "@/content/articles/types";

// export function getJournalSlugs() {
//   return articles.map((a) => a.slug);
// }

// export function getJournalBySlug(slug: string): {
//   meta: JournalMeta;
//   Content: any;
// } | null {
//   const article = articles.find((a) => a.slug === slug);
//   if (!article) return null;

//   if (!article.meta.heroImage) {
//     throw new Error(
//       `Journal "${slug}" is missing heroImage`
//     );
//   }

//   return {
//     meta: article.meta as JournalMeta,
//     Content: article.Content,
//   };
// }

import { articles } from "@/content/articles";
import type { JournalMeta } from "@/content/articles/types";

export function getAllArticles(): JournalMeta[] {
  return articles.map((a) => a.meta);
}

export function getArticleSlugs() {
  return articles.map((a) => a.slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug) ?? null;
}

