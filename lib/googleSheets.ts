import { google } from "googleapis";
import serviceAccount from "@/credentials/event-registration.json"


export function getSheetsClient() {
  const auth = new google.auth.JWT({
    // email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    // key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}



// import { google } from "googleapis";
// import serviceAccount from "@/credentials/google-account-service.json";

// const auth = new google.auth.JWT({
//     email: serviceAccount.client_email,
//     key: serviceAccount.private_key,
//     scopes: [
//     "https://www.googleapis.com/auth/spreadsheets",
//     "https://www.googleapis.com/auth/calendar",
//     ]
// });

// export const sheets = google.sheets({ version: "v4", auth });
// export const calendar = google.calendar({ version: "v3", auth });
