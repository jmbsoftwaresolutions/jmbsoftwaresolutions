"use server";

import Contact from "../models/contact";
import { connectToDatabase } from "../services/database.services";
import { collections } from "@/services/database.services";

export async function addContact(
  contact: Contact
): Promise<{ data?: Contact; error?: Error }> {
  console.log("Received contact form submission:", contact);
  try {
    await connectToDatabase();

    if (contact && collections.contacts) {
      contact.created_at = new Date();
      const result = await collections.contacts.insertOne(contact);
      if (!result) {
        console.error("Error inserting data:", "No result from insertOne");
        return {
          error: { name: "Error", message: "Unexpected error occurred" },
        };
      }
    }
  } catch (error) {
    console.error("Error inserting data:", error);
    return {
      error: { name: "Error", message: "Unexpected error occurred" },
    };
  }

  const EMAIL_TO = process.env.EMAIL_TO;
  const EMAIL_FROM = process.env.EMAIL_FROM;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  try {
    console.log("Sending email to", EMAIL_TO, EMAIL_FROM);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: "New Contact Form Submission",
        html:
          "<h1>New Contact Form Submission</h1>" +
          `<p><strong>Name:</strong> ${contact.name}</p>` +
          `<p><strong>Email:</strong> ${contact.email}</p>` +
          `<p><strong>Phone:</strong> ${contact.phone}</p>` +
          `<p><strong>Message:</strong> ${contact.message}</p>`,
      }),
    });

    const data = await res.json();

    console.log("Resend API response:", data);
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: { name: "Error", message: "Unexpected error occurred" },
    };
  }

  return {};
}
