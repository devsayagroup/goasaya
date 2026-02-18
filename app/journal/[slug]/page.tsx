import { notFound } from "next/navigation";
import Image from "next/image";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { articles } from "@/content/articles";
import type { JournalMeta } from "@/content/articles/types";
import MoreJournals from "@/components/mdx/MoreJournals";

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  const meta = article.meta as JournalMeta;
  const Content = article.Content;

  return (
    <main className="bg-cream text-black">
      <section className="relative max-w-7xl mx-auto rounded-md overflow-hidden h-[35vh] mt-12 md:mt-28">
        <Image
          src={meta.heroImage}
          alt={meta.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </section>
     
       <section className="relative -mt-50 px-6 pb-20">
         <article className="max-w-3xl mx-auto">
           <h1 className="text-white mt-6 text-2xl font-style md:text-4xl font-light leading-tight">
             {meta.title}
           </h1>
           <div className="mt-4 mb-24 h-px w-24 bg-white" />
           <div className="prose prose-invert prose-lg md:prose-xl article-content">
             <Content components={mdxComponents} />
           </div>
         </article>
       </section>
      

      <MoreJournals
        journals={articles.map((a) => a.meta as JournalMeta)}
        currentSlug={slug}
      />
    </main>
  );
}
