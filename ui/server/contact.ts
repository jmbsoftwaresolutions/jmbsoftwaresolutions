"use server";

import { createClient } from "@/lib/supabase/server";

import { Contact } from "./contact.d";

export async function addContact(
  contact: Contact
): Promise<{ data?: Contact; error?: Error }> {
  const supabase = await createClient();

  const apiKey = process.env.SB_EDGE_API_KEY;

  const { error } = await supabase.from("contact").insert([
    {
      email: contact.email,
      name: contact.name,
      phone: contact.phone,
      message: contact.message,
    },
  ]);

  const { error: error2 } = await supabase.functions.invoke("sendContact", {
    method: "POST",
    body: {
      email: contact.email,
      name: contact.name,
      phone: contact.phone,
      message: contact.message,
    },
    headers: {
      "x-api-key": apiKey || "",
    },
  });

  if (error || error2) {
    if (error) console.error("Error inserting data:", error.message);
    if (error2) console.error("Error sending email:", error2?.message);
    return {
      error: { name: "Error", message: "Unexpected error occurred" },
    };
  } else {
    console.log("Data inserted successfully");
    return {};
  }
}
