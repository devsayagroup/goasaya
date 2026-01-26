import { notFound } from "next/navigation";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import Image from "next/image";
import { mdxComponents } from "@/components/mdx/mdx-components";
import MoreJournals from "@/components/mdx/MoreJournals";
import { articles } from "@/content/articles";

export const runtime = "nodejs";

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return {
  title: `Journal | ${article.meta.metaTitle ?? article.meta.title} `,
    description: article.meta.metaDescription,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return notFound();
  const Content = article.Content;
  const meta = article.meta

  const current = articles.find(a => a.slug === slug);
  if (!current) return null;


  return (
     <main className="bg-cream text-black">
      <section className="relative max-w-7xl mt-12 md:mt-28 mx-auto h-[30vh] md:h-[35vh] w-full">
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          priority
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/75 rounded-md" />
      </section>

      <section className="relative -mt-40 md:-mt-50 px-6 pb-20">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-white mt-6 text-3xl font-style md:text-4xl font-light leading-tight">
            {meta.title}
          </h1>
          <div className="mt-4 mb-24 h-px w-24 bg-white" />
          <div className="prose prose-invert prose-lg md:prose-xl article-content">
            <Content components={mdxComponents} />
          </div>
        </article>
      </section>

      <MoreJournals
        journals={articles.map(a => a.meta)}
        currentSlug={slug}
      />
    </main>
  );
}