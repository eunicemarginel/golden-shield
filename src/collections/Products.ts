import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { slugField } from "@/fields/slug";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "updatedAt"],
    description: "AI & security technology products shown on /products.",
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField(),
    {
      name: "summary",
      type: "textarea",
      required: true,
      admin: {
        description: "Short description used on hub/listing cards.",
      },
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Shown at the top of this product's page. Upload photos in the Media section first, then pick one here.",
      },
    },
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor(),
    },
    {
      name: "relatedIndustries",
      type: "relationship",
      relationTo: "industries",
      hasMany: true,
    },
    {
      name: "faqs",
      type: "relationship",
      relationTo: "faqs",
      hasMany: true,
    },
  ],
};
