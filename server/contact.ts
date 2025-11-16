"use server";

import { createClient } from "@/lib/supabase/server";

import { Contact } from "./contact.d";

export async function addContact(
  contact: Contact
): Promise<{ data?: Contact; error?: Error }> {
  const supabase = await createClient();

  const {  error } = await supabase
    .from("contact")
    .insert([
      {
        email: contact.email,
        name: contact.name,
        phone: contact.phone,
        message: contact.message,
      },
    ]);

  if (error) {
    console.error("Error inserting data:", error.message);
    return {
      error: { name: "Database Error", message: "Unexpected error occurred" },
    };
  } else {
    console.log("Data inserted successfully");
    return {  };
  }
}
