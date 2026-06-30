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

  if (!resendKey) {
    return NextResponse.json(
      {
        error:
          "Inquiry API requires RESEND_API_KEY. The contact form submits via FormSubmit from the browser.",
      },
      { status: 503 }
    );
  }

  try {
    await sendViaResend(inquiry, resendKey);
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
