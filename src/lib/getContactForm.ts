import { getPayloadClient } from "@/lib/payload";

const CONTACT_FORM_TITLE = "Contact Page Enquiry";

export async function getOrCreateContactForm(): Promise<number> {
  const payload = await getPayloadClient();

  const existing = await payload.find({
    collection: "forms",
    where: { title: { equals: CONTACT_FORM_TITLE } },
    limit: 1,
  });
  if (existing.docs[0]) return existing.docs[0].id;

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
      confirmationType: "message",
      confirmationMessage: {
        root: {
          type: "root",
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
          children: [
            {
              type: "paragraph",
              version: 1,
              direction: "ltr",
              format: "",
              indent: 0,
              children: [
                {
                  type: "text",
                  text: "Thanks for reaching out — we'll get back to you within 1 business day.",
                  version: 1,
                  format: 0,
                  detail: 0,
                  mode: "normal",
                  style: "",
                },
              ],
            },
          ],
        },
      },
    },
  });

  return form.id;
}
