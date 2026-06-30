import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/data/company";

interface InquiryPayload {
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
}

function buildInquiryText(payload: {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}) {
  return [
    `Name / Organisation: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "—"}`,
    `Product of Interest: ${payload.product || "—"}`,
    "",
    "Message:",
    payload.message || "—",
  ].join("\n");
}

async function sendViaFormSubmit(payload: {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}) {
  const to = company.contact.inquiryEmail;
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      product: payload.product,
      message: payload.message,
      _subject: `Quote Inquiry from ${payload.name} — HK MRI Instrument`,
      _replyto: payload.email,
      _captcha: "false",
      _template: "table",
    }),
  });

  let data: { success?: string; message?: string } = {};
  try {
    data = (await response.json()) as { success?: string; message?: string };
  } catch {
    throw new Error("Invalid response from email service.");
  }

  if (!response.ok || data.success !== "true") {
    throw new Error(data.message ?? "FormSubmit delivery failed.");
  }
}

async function sendViaResend(
  payload: {
    name: string;
    email: string;
    phone: string;
    product: string;
    message: string;
  },
  apiKey: string
) {
  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM ??
    "HK MRI Instrument <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: company.contact.inquiryEmail,
    replyTo: payload.email,
    subject: `Quote Inquiry from ${payload.name} — HK MRI Instrument`,
    text: buildInquiryText(payload),
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const product = payload.product?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const inquiry = { name, email, phone, product, message };
  const resendKey = process.env.RESEND_API_KEY;

  try {
    if (resendKey) {
      await sendViaResend(inquiry, resendKey);
    } else {
      await sendViaFormSubmit(inquiry);
    }
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send your inquiry. Please email us directly at michael.chan@mti-mill.com.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
