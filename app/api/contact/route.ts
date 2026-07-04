import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  // Honeypot: real users never fill this field
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!email || email.length > 200 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 },
    );
  }
  if (!message || message.length > 5000) {
    return NextResponse.json(
      { error: "A message is required (max 5000 characters)" },
      { status: 400 },
    );
  }
  if (name.length > 100) {
    return NextResponse.json({ error: "Name is too long" }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "musthafaaltaf2001@gmail.com",
      replyTo: email,
      subject: `Portfolio contact from ${name || email}`,
      text: `Name: ${name || "-"}\nEmail: ${email}\n\n${message}`,
    });
    if (error) {
      throw error;
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred!" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
