import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { slugField } from "@/fields/slug";

export const JobOpenings: CollectionConfig = {
  slug: "job-openings",
  labels: {
    singular: "Job Opening",
    plural: "Job Openings",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "employmentType", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField(),
    {
      name: "employmentType",
      type: "select",
      options: [
        { label: "Full-time", value: "full-time" },
        { label: "Part-time", value: "part-time" },
        { label: "Contract", value: "contract" },
      ],
      defaultValue: "full-time",
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
    },
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor(),
    },
    {
      name: "isOpen",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Uncheck to hide from the Careers page without deleting.",
      },
    },
  ],
};
