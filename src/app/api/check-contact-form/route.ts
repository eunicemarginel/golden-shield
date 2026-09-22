import { NextResponse } from "next/server";
import { getOrCreateContactForm } from "@/lib/getContactForm";
import { getPayloadClient } from "@/lib/payload";

export async function GET() {
  const formId = await getOrCreateContactForm();
  const payload = await getPayloadClient();
  const doc = await payload.findByID({ collection: "forms", id: formId });
  return NextResponse.json({
    formId,
    emails: doc.emails,
    envSeen: {
      hasRecipients: Boolean(process.env.CONTACT_FORM_RECIPIENTS),
      hasFromEmail: Boolean(process.env.RESEND_FROM_EMAIL),
      hasApiKey: Boolean(process.env.RESEND_API_KEY),
    },
  });
}
