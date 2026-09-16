import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { slugField } from "@/fields/slug";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "updatedAt"],
    description: "Core guarding services (/services) and enforcement & compliance services (/enforcement-and-compliance) — set which via the Category field.",
    livePreview: {
      url: ({ data }) =>
        data.category === "enforcement"
          ? `/enforcement-and-compliance/${data.slug}`
          : `/services/${data.slug}`,
    },
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
      name: "category",
      type: "select",
      required: true,
      defaultValue: "core",
      options: [
        { label: "Core Security Service", value: "core" },
        { label: "Enforcement & Compliance", value: "enforcement" },
      ],
      admin: {
        position: "sidebar",
        description: "Determines whether this appears under /services or /enforcement-and-compliance.",
      },
    },
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
        description: "Shown at the top of this service's page. Upload photos in the Media section first, then pick one here.",
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
