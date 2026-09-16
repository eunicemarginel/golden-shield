import type { MetadataRoute } from "next";
import { getPayloadClient } from "@/lib/payload";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://golden-shield.com.sg";

const staticRoutes = [
  "",
  "/services",
  "/products",
  "/industries",
  "/enforcement-and-compliance",
  "/ai-security-services",
  "/about",
  "/careers",
  "/blog",
  "/faq",
  "/contact-us",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient();

  const [services, products, industries, posts, jobs] = await Promise.all([
    payload.find({ collection: "services", limit: 200, pagination: false }),
    payload.find({ collection: "products", limit: 200, pagination: false }),
    payload.find({ collection: "industries", limit: 200, pagination: false }),
    payload.find({ collection: "posts", limit: 200, pagination: false }),
    payload.find({ collection: "job-openings", limit: 200, pagination: false }),
  ]);

  const dynamicEntries: MetadataRoute.Sitemap = [
    ...services.docs.map((doc) => ({
      url: `${SITE_URL}/${doc.category === "enforcement" ? "enforcement-and-compliance" : "services"}/${doc.slug}`,
      lastModified: doc.updatedAt,
    })),
    ...products.docs.map((doc) => ({
      url: `${SITE_URL}/products/${doc.slug}`,
      lastModified: doc.updatedAt,
    })),
    ...industries.docs.map((doc) => ({
      url: `${SITE_URL}/industries/${doc.slug}`,
      lastModified: doc.updatedAt,
    })),
    ...posts.docs.map((doc) => ({
      url: `${SITE_URL}/blog/${doc.slug}`,
      lastModified: doc.updatedAt,
    })),
    ...jobs.docs.map((doc) => ({
      url: `${SITE_URL}/careers/${doc.slug}`,
      lastModified: doc.updatedAt,
    })),
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })),
    ...dynamicEntries,
  ];
}
