import { calendar } from "./google";
import { PrivateEventMenuRequest } from "@/types/private-event";

export async function createCalendarEvent(
    data: PrivateEventMenuRequest
    ) {
    // const menuSummary = data.menu
    //     .map(cat =>
    //     `${cat.category}: ${cat.items
    //         .map(i => `${i.title} x${i.quantity}`)
    //         .join(", ")}`
    //     )
    //     .join("\n");

    const menuSummary = data.menu
        .map(category => {
        const items = category.items
            .filter(item => item.quantity > 0)
            .map(item => `  ◦ ${item.title} x${item.quantity}`)
            .join("\n");

        return `• ${category.category}\n${items}`;
        })
        .join("\n\n"); 

    const start = new Date(`${data.date}T${data.time}:00+07:00`);
    const end = new Date(start);
    end.setHours(end.getHours() + 2);

    try {
        const event = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID!,
        requestBody: {
            summary: `🍽️ PRIVATE EVENT – ${data.name} (${data.pax} Pax)`,

            description: `
    PRIVATE EVENT MENU REQUEST

    Name: ${data.name}
    Pax: ${data.pax}

    MENU:
    ${menuSummary}

    Notes:
    ${data.notes || "-"}
            `.trim(),

            start: {
            dateTime: start.toISOString(),
            timeZone: "Asia/Jakarta",
            },
            end: {
            dateTime: end.toISOString(),
            timeZone: "Asia/Jakarta",
            },

            reminders: {
            useDefault: false,
            overrides: [
                { method: "popup", minutes: 2880 },
                { method: "popup", minutes: 1440 },
                { method: "popup", minutes: 120 },
                { method: "popup", minutes: 30 },
                { method: "email", minutes: 1440 },
            ],
            },
        },
        });
      
        return {
            eventId: event.data.id!,
            eventLink: event.data.htmlLink!, 
        };
        
    } catch (err: any) {
        console.error("Calendar Insert Error:", err?.response?.data || err);
        throw err;
    }
}
