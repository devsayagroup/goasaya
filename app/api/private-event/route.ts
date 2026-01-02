import { NextResponse } from "next/server";
import { PrivateEventMenuRequest } from "@/types/private-event";
import { appendToSheet } from "@/lib/appendToSheet";
import { createCalendarEvent } from "@/lib/createCalendarEvent";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PrivateEventMenuRequest;

    body.menu.forEach(cat => {
      if (cat.items.length < 2 || cat.items.length > 4) {
        return NextResponse.json(
          { error: `${cat.category} must have 2–4 items` },
          { status: 400 }
        );
      }
    });

    const calendar = await createCalendarEvent(body);

    await appendToSheet({
        ...body,
        status: "PENDING",
        eventId: calendar.eventId,
        eventLink: calendar.eventLink,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PRIVATE EVENT API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

