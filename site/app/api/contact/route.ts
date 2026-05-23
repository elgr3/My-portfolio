import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const { name, email, subject, message } = parsed.data;
  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    return NextResponse.json({ error: "server-misconfigured" }, { status: 500 });
  }

  try {
    const resend = getResend();
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact send failed", err);
    return NextResponse.json({ error: "send-failed" }, { status: 502 });
  }
}
