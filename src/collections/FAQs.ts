import type { CollectionConfig } from "payload";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  labels: {
    singular: "FAQ",
    plural: "FAQs",
  },
  admin: {
    group: "Content",
    useAsTitle: "question",
    defaultColumns: ["question", "category"],
    description: "Questions shown on /faq, and on service/product/industry pages they're linked to.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "textarea",
      required: true,
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "General", value: "general" },
        { label: "Services", value: "services" },
        { label: "Products", value: "products" },
        { label: "Industries", value: "industries" },
      ],
      defaultValue: "general",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
