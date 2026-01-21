import { articles } from "@/content/articles";

export function getArticleSlugs() {
  return articles.map((a) => a.slug);
}

export function getAllArticles() {
  return articles
    .map((a) => a.meta)
    .sort((a, b) =>
      (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")
    );
}

export async function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug) ?? null;
}
