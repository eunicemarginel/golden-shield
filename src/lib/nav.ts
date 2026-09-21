export type NavGroup = {
  label: string;
  href: string;
  description: string;
};

// Rendered first, before the dropdown-bearing nav items.
export const leadingNav: NavGroup[] = [{ label: "About", href: "/about", description: "" }];

// These four get a hover mega-dropdown listing every sub-page (see
// NavDropdown.tsx) - the dropdown content itself comes from navData,
// fetched server-side in layout.tsx, keyed by these same hrefs.
export const primaryNav: NavGroup[] = [
  { label: "Services", href: "/services", description: "Manpower & guarding solutions" },
  { label: "Products", href: "/products", description: "AI & surveillance technology" },
  { label: "Industries", href: "/industries", description: "Sector-specific security" },
  {
    label: "Enforcement & Compliance",
    href: "/enforcement-and-compliance",
    description: "Audits, investigations & consultancy",
  },
];

export const secondaryNav: NavGroup[] = [
  { label: "Careers", href: "/careers", description: "" },
  { label: "Blog", href: "/blog", description: "" },
  { label: "FAQ", href: "/faq", description: "" },
];

export const companyInfo = {
  name: "Golden Shield Security Services",
  phone: "+65 8243 0205",
  // Defaults to the main phone number; update if WhatsApp enquiries should
  // go to a different line. Digits only, with country code, no spaces/plus.
  whatsappNumber: "6582430205",
  email: "info@golden-shield.com.sg",
  address: "20 Sin Ming Lane #04-67, Singapore 573968",
};
