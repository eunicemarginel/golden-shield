import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    group: "Admin",
    useAsTitle: "email",
    description: "People who can log into this admin panel.",
  },
  auth: true,
  fields: [],
};
