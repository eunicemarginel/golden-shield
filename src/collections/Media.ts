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
      admin: {
        description: "A short description of the photo (for accessibility and SEO), e.g. \"Security officer at building lobby\". Auto-filled from the filename if left blank — feel free to improve it later.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value;
            const filename = data?.filename as string | undefined;
            if (!filename) return value;
            return filename
              .replace(/\.[^.]+$/, "")
              .replace(/[-_]+/g, " ")
              .replace(/\b\w/g, (char: string) => char.toUpperCase());
          },
        ],
      },
    },
  ],
  upload: true,
};
