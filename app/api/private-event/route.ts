// import { NextRequest, NextResponse } from "next/server";
// import { PrivateEventMenuRequest } from "@/types/private-event";

// export async function POST(req: NextRequest) {
//   try {
//     const body = (await req.json()) as PrivateEventMenuRequest;

//     // ---------------- VALIDATION ----------------
//     if (!body.name || !body.date || !body.time || !body.pax) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     body.menu.forEach(cat => {
//       if (cat.items.length < 2 || cat.items.length > 4) {
//         throw new Error(
//           `Category ${cat.category} must have 2–4 items`
//         );
//       }
//     });

//     // ---------------- FORWARD TO GOOGLE ----------------
//     const res = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     if (!res.ok) {
//       throw new Error("Failed to submit to Google");
//     }

//     return NextResponse.json({ success: true });

//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { PrivateEventMenuRequest } from "@/types/private-event";
import { appendToSheet } from "@/lib/appendToSheet";
import { createCalendarEvent } from "@/lib/createCalendarEvent";

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

    const calendarEventId = await createCalendarEvent(body);

    await appendToSheet({
      ...body,
      status: "PENDING",
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

