import { google } from "googleapis";
import serviceAccount from "@/credentials/google-service-account.json";

const auth = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/calendar",
    ]
});

export const sheets = google.sheets({ version: "v4", auth });
export const calendar = google.calendar({ version: "v3", auth });
