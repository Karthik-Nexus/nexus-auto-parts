import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { sendLeadEmails } from "./services/emailService.js";
import { appendLeadToSheet } from "./services/sheetService.js";

export async function registerRoutes(app: Express): Promise<void> {

  app.post("/api/leads", async (req, res) => {
    try {
      const { name, email, phone, year, make, model, vin, part, message } = req.body;

      // Basic validation
      if (!name || !email || !phone) {
        res.status(400).json({ message: "Name, Email and Phone are required" });
        return;
      }

      // Append to Google Sheet
      try {
        await appendLeadToSheet({
          name, email, phone, year: year || '', make: make || '',
          model: model || '', part: part || '', vin: vin || '',
          message: message || '', date: new Date().toLocaleString()
        });
      } catch (e) {
        console.error("Failed to append to sheet", e);
        // Continue to send emails even if sheet fails? Yes.
      }

      // Send Emails
      await sendLeadEmails({
        name, email, phone, year, make, model, vin, part, message
      });

      res.status(200).json({ success: true, message: "Lead captured successfully" });
    } catch (error: any) {
      console.error("Lead capture error:", error.message);
      // Don't fail the request to the user if backend logging fails, or maybe we should?
      // For now, return 500 so frontend knows it failed, but maybe silent fail is better?
      // Let's return 500 for debugging.
      res.status(500).json({ message: "Failed to save lead", error: error.message });
    }
  });

  // existing routes...
}
