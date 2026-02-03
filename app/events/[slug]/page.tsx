import { notFound } from "next/navigation";
import { getEventBySlug, getEventSlugs } from "@/lib/events";
import EventClient from "@/components/pages/EventClientPage";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { eventMdxComponents } from "@/components/mdx/event-mdx-components";

export const runtime = "nodejs";

export async function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return {};

  return {
    title: `Event | ${event.meta.metaTitle ?? event.meta.title}`,
    description: event.meta.metaDescription,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return notFound();

  const Content = event.Content;

  return (
    <EventClient meta={event.meta}>
      {/* ✅ MDX rendered in SERVER */}
      <Content components={eventMdxComponents} />
    </EventClient>
  );
}
