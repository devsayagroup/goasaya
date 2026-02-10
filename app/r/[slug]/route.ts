import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Your shortlinks
const LINKS: Record<string, string> = {
  chope: "https://www.chope.co/jakarta-restaurants/...",
  wa: "https://wa.me/6281338382845?text=Hi%20GoaSaya",
};

function getClientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null
  );
}

// Try to read GA client_id from _ga cookie
function getGaClientId(req: NextRequest) {
  const ga = req.cookies.get("_ga")?.value; // e.g. GA1.1.123456789.123456789
  if (!ga) return null;
  const parts = ga.split(".");
  if (parts.length >= 4) return `${parts[2]}.${parts[3]}`;
  return null;
}

async function trackGA4Event(opts: {
  client_id: string;
  slug: string;
  targetUrl: string;
  page_location: string;
  page_referrer?: string | null;
  user_agent?: string | null;
  ip?: string | null;
  utm?: { source?: string | null; medium?: string | null; campaign?: string | null };
}) {
  const measurement_id = process.env.GA4_MEASUREMENT_ID!;
  const api_secret = process.env.GA4_API_SECRET!;
  const endpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`;

  // Keep params short & clean (GA has limits)
  const params: Record<string, any> = {
    slug: opts.slug,
    target_url: opts.targetUrl,
    page_location: opts.page_location,
    page_referrer: opts.page_referrer ?? undefined,
    utm_source: opts.utm?.source ?? undefined,
    utm_medium: opts.utm?.medium ?? undefined,
    utm_campaign: opts.utm?.campaign ?? undefined,
  };

  await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_id: opts.client_id,
      events: [
        {
          name: "shortlink_click",
          params,
        },
      ],
      // NOTE: GA4 ignores raw IP/UA in Measurement Protocol for user identity,
      // but they can still be useful for your own bot filtering before sending.
    }),
  });
}

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug.toLowerCase();
  const targetUrl = LINKS[slug];

  if (!targetUrl) return NextResponse.redirect(new URL("/", req.url), 302);

  const ua = req.headers.get("user-agent");
  const ref = req.headers.get("referer");
  const ip = getClientIp(req);

  const url = new URL(req.url);
  const utm = {
    source: url.searchParams.get("utm_source"),
    medium: url.searchParams.get("utm_medium"),
    campaign: url.searchParams.get("utm_campaign"),
  };

  // client_id is required by GA4 MP.
  // Prefer real GA client_id from cookie; else generate a fallback.
  const client_id =
    getGaClientId(req) ?? `${Date.now()}.${Math.floor(Math.random() * 1e9)}`;

  // Best-effort tracking (don’t block redirect)
  void trackGA4Event({
    client_id,
    slug,
    targetUrl,
    page_location: url.toString(),
    page_referrer: ref,
    user_agent: ua,
    ip,
    utm,
  }).catch(() => {});

  return NextResponse.redirect(targetUrl, 302);
}
