import { google } from 'googleapis';

interface LeadData {
    name: string;
    email: string;
    phone: string;
    year: string;
    make: string;
    model: string;
    part: string;
    vin: string;
    message: string;
    date: string;
}

export async function appendLeadToSheet(lead: LeadData) {
    if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        throw new Error("Missing Google Sheets credentials");
    }

    // Initialize Auth
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Fix newlines in env var
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const values = [
        [
            lead.name,
            lead.email,
            lead.phone,
            lead.year,
            lead.make,
            lead.model,
            lead.part,
            lead.vin,
            lead.date
        ]
    ];

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:I', // Append to columns A-I
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: values,
            },
        });
        console.log("Lead appended to Google Sheet successfully");
    } catch (error) {
        console.error("Error appending to Google Sheet:", error);
        throw error;
    }
}
