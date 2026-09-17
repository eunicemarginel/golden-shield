const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://golden-shield.com.sg";
const ORG_NAME = "Golden Shield Security Services";

export function serviceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    ...(image ? { image } : {}),
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
  };
}

export function articleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: `${SITE_URL}${url}`,
    mainEntityOfPage: `${SITE_URL}${url}`,
    ...(image ? { image } : {}),
    datePublished,
    author: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
  };
}

const employmentTypeMap: Record<string, string> = {
  "full-time": "FULL_TIME",
  "part-time": "PART_TIME",
  contract: "CONTRACTOR",
};

export function jobPostingSchema({
  title,
  description,
  url,
  employmentType,
  datePosted,
}: {
  title: string;
  description: string;
  url: string;
  employmentType?: string | null;
  datePosted: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    url: `${SITE_URL}${url}`,
    datePosted,
    employmentType: employmentType ? employmentTypeMap[employmentType] : undefined,
    hiringOrganization: {
      "@type": "Organization",
      name: ORG_NAME,
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Singapore",
        addressCountry: "SG",
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
