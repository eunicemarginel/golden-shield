export type NavGroup = {
  label: string;
  href: string;
  description: string;
};

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
  { label: "About", href: "/about", description: "" },
  { label: "Careers", href: "/careers", description: "" },
  { label: "Blog", href: "/blog", description: "" },
  { label: "FAQ", href: "/faq", description: "" },
];

export const companyInfo = {
  name: "Golden Shield Security Services",
  phone: "+65 8243 0205",
  email: "info@golden-shield.com.sg",
  address: "20 Sin Ming Lane #04-67, Singapore 573968",
};
