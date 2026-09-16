import type { Field } from "payload";

export const slugField = (fieldToUse = "title"): Field => ({
  name: "slug",
  type: "text",
  required: true,
  unique: true,
  index: true,
  admin: {
    position: "sidebar",
    description: `Auto-generated from ${fieldToUse}. Edit to override.`,
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (value) return value;
        const source = data?.[fieldToUse];
        if (typeof source !== "string") return value;
        return source
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      },
    ],
  },
});
