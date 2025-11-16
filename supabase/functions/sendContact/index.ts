import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SB_EDGE_API_KEY = Deno.env.get("SB_EDGE_API_KEY");
const EMAIL_TO = Deno.env.get("EMAIL_TO");
const EMAIL_FROM = Deno.env.get("EMAIL_FROM");

const handler = async (request: Request): Promise<Response> => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const apiKey = request.headers.get("x-api-key");

  if (!apiKey || apiKey !== SB_EDGE_API_KEY) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await request.json();

  console.log("Received contact form submission:", body);

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
        `<p><strong>Name:</strong> ${body.name}</p>` +
        `<p><strong>Email:</strong> ${body.email}</p>` +
        `<p><strong>Phone:</strong> ${body.phone}</p>` +
        `<p><strong>Message:</strong> ${body.message}</p>`,
    }),
  });

  const data = await res.json();

  console.log("Resend API response:", data);

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

Deno.serve(handler);
