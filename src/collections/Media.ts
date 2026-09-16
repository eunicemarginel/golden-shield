import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: "Media",
    description: "Upload photos here first, then attach them to a Service, Product, Industry, Blog Post or Job Opening via its Hero Image field.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description: "A short description of the photo (for accessibility and SEO), e.g. \"Security officer at building lobby\".",
      },
    },
  ],
  upload: true,
};
