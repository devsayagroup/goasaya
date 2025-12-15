// 'use server'

// import { google } from 'googleapis';

// export async function appendToGS(data: any) {
//   try {
//     const auth = new google.auth.JWT({
//       email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//       key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     const sheets = google.sheets({ version: 'v4', auth });

//     const rowData = [
//       new Date().toISOString(), // Timestamp
//       data.name,
//       data.email,
//       data.message,
//       // Add other data fields here
//     ];

//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
//       range: process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A:G', // Default to first sheet
//       valueInputOption: 'USER_ENTERED',
//       requestBody: {
//         values: [rowData],
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error appending to Google Sheet:', error);
//     return null; // Or throw an error if you prefer
//   }
// }