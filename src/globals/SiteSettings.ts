import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  admin: {
    group: "Content",
    description: "One-off photos for pages that aren't tied to a list of items, like the homepage and About page.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "homeServicesImage",
      type: "upload",
      relationTo: "media",
      label: "Homepage — Services card photo",
      admin: {
        description: "Upload photo as home-services.jpg (or any format) in Media, then pick it here.",
      },
    },
    {
      name: "homeProductsImage",
      type: "upload",
      relationTo: "media",
      label: "Homepage — Products card photo",
      admin: {
        description: "Upload photo as home-products.jpg in Media, then pick it here.",
      },
    },
    {
      name: "homeIndustriesImage",
      type: "upload",
      relationTo: "media",
      label: "Homepage — Industries card photo",
      admin: {
        description: "Upload photo as home-industries.jpg in Media, then pick it here.",
      },
    },
    {
      name: "homeEnforcementImage",
      type: "upload",
      relationTo: "media",
      label: "Homepage — Enforcement & Compliance card photo",
      admin: {
        description: "Upload photo as home-enforcement.jpg in Media, then pick it here.",
      },
    },
    {
      name: "aboutPhoto",
      type: "upload",
      relationTo: "media",
      label: "About page — office/team photo",
      admin: {
        description: "Upload photo as about-team.jpg in Media, then pick it here.",
      },
    },
    {
      name: "contactPhoto",
      type: "upload",
      relationTo: "media",
      label: "Contact page — team/office photo",
      admin: {
        description: "Upload photo as contact-team.jpg in Media, then pick it here.",
      },
    },
  ],
};
