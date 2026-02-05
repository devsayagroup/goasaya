import { NextResponse } from "next/server";
import { getSheetsClient } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      event,
      activity,
      date,
      time,
      location,
      name,
      phone,
      pax,
      pricePerPax,
      total,
    } = body;

    const sheets = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            event,
            activity,
            date,
            time,
            location,
            name,
            phone,
            pax,
            pricePerPax,
            total,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Append sheet error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
