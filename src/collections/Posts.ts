import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { slugField } from "@/fields/slug";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
  },
  admin: {
    group: "Content",
    useAsTitle: "title",
    defaultColumns: ["title", "publishedDate", "updatedAt"],
    description: "Articles shown on /blog.",
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
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Shown at the top of this post. Upload photos in the Media section first, then pick one here.",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor(),
    },
  ],
};
