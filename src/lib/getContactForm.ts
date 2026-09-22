import { getPayloadClient } from "@/lib/payload";

const CONTACT_FORM_TITLE = "Contact Page Enquiry";

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

function contactNotificationEmails() {
  const recipients = (process.env.CONTACT_FORM_RECIPIENTS || "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  return recipients.map((emailTo) => ({
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
}

export async function getOrCreateContactForm(): Promise<number> {
  const payload = await getPayloadClient();

  const existing = await payload.find({
    collection: "forms",
    where: { title: { equals: CONTACT_FORM_TITLE } },
    limit: 1,
  });
  if (existing.docs[0]) {
    const doc = existing.docs[0];
    const configuredEmails = contactNotificationEmails();
    // Self-heal: compare against what's actually configured (not just
    // "empty or not") so this also catches drift - e.g. CONTACT_FORM_RECIPIENTS
    // or RESEND_FROM_EMAIL changing later, or a stale value left over from
    // an earlier test - rather than only fixing itself once, the first time
    // the doc happens to be empty.
    const currentSignature = JSON.stringify(
      (doc.emails ?? []).map((e) => [e.emailTo, e.emailFrom]),
    );
    const configuredSignature = JSON.stringify(
      configuredEmails.map((e) => [e.emailTo, e.emailFrom]),
    );
    if (configuredEmails.length > 0 && currentSignature !== configuredSignature) {
      await payload.update({
        collection: "forms",
        id: doc.id,
        data: { emails: configuredEmails },
      });
    }
    return doc.id;
  }

  const form = await payload.create({
    collection: "forms",
    data: {
      title: CONTACT_FORM_TITLE,
      fields: [
        { blockType: "text", name: "name", label: "Name", required: true, width: 50 },
        { blockType: "text", name: "company", label: "Company", required: false, width: 50 },
        { blockType: "email", name: "email", label: "Email", required: true, width: 50 },
        { blockType: "text", name: "phone", label: "Phone", required: false, width: 50 },
        { blockType: "textarea", name: "message", label: "How can we help?", required: true },
      ],
      submitButtonLabel: "Send Enquiry",
      emails: contactNotificationEmails(),
      confirmationType: "message",
      confirmationMessage: richText([
        "Thanks for reaching out — we'll get back to you within 1 business day.",
      ]),
    },
  });

  return form.id;
}
