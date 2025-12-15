import { sheets } from "./google";
import { PrivateEventMenuRequest } from "@/types/private-event";

export async function appendToSheet(data: PrivateEventMenuRequest) {
    const menuSummary = data.menu
        .map(category => {
        const items = category.items
            .map(item => `${item.title} (${item.quantity})`)
            .join(", ");

        return `${category.category}: ${items}`;
        })
        .join("\n");

    const row = [
        data.name,
        data.date,
        data.time,
        data.pax,
        menuSummary,
        data.notes || "",
        data.status,             
        "",                        
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
        range: process.env.GOOGLE_SHEETS_RANGE!, 
        valueInputOption: "USER_ENTERED",
        requestBody: {
        values: [row],
        },
    });
}
