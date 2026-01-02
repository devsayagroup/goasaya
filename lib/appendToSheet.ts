import { sheets } from "./google";
import { PrivateEventMenuRequest } from "@/types/private-event";

type AppendPayload = PrivateEventMenuRequest & {
    eventId?: string;
    eventLink?: string;
};

export async function appendToSheet(data: AppendPayload) {
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
        data.eventId,                        
        data.eventLink,  
        new Date().toISOString(),    
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
