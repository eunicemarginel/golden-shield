import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";

function paragraph(text: string) {
  return {
    type: "paragraph",
    version: 1,
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    children: [
      {
        type: "text",
        text,
        version: 1,
        format: 0,
        detail: 0,
        mode: "normal",
        style: "",
      },
    ],
  };
}

function richText(paragraphs: string[]) {
  return {
    root: {
      type: "root",
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      version: 1,
      children: paragraphs.map(paragraph),
    },
  };
}

export async function POST() {
  const payload = await getPayloadClient();

  const recipients = (process.env.CONTACT_FORM_RECIPIENTS || "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  const emails = recipients.map((emailTo) => ({
    emailTo,
    emailFrom: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
    subject: "New enquiry from {{name}}",
    message: richText([
      "New contact form enquiry:",
      "Name: {{name}}",
      "Company: {{company}}",
      "Email: {{email}}",
      "Phone: {{phone}}",
      "Message: {{message}}",
    ]),
  }));

  const { docs } = await payload.find({
    collection: "forms",
    where: { title: { equals: "Contact Page Enquiry" } },
    limit: 1,
  });
  if (!docs[0]) {
    return NextResponse.json({ error: "Form not found" }, { status: 404 });
  }

  await payload.update({
    collection: "forms",
    id: docs[0].id,
    data: { emails },
  });

  return NextResponse.json({
    updated: true,
    recipients,
    emailFrom: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
  });
}
