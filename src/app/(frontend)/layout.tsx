import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { MotionConfig } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getPayloadClient } from "@/lib/payload";
import "./globals.css";

// Applies to every page in this segment unless a page sets its own value.
// Content pages read from Payload at request time when stale, so edits made
// in /admin (new photos, copy changes, new FAQs/jobs, etc.) show up live
// within a minute instead of requiring a new deployment.
export const revalidate = 60;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://golden-shield.com.sg";
const SITE_TITLE = "Golden Shield Security Services | Singapore Security & AI Surveillance";
const SITE_DESCRIPTION =
  "Licensed, disciplined and technology-driven security services in Singapore — guarding, AI surveillance, access control and enforcement solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Golden Shield Security Services",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Golden Shield Security Services",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: "Golden Shield Security Services",
  url: "https://golden-shield.com.sg",
  telephone: "+65 8243 0205",
  email: "info@golden-shield.com.sg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Sin Ming Lane #04-67",
    addressLocality: "Singapore",
    postalCode: "573968",
    addressCountry: "SG",
  },
  areaServed: "Singapore",
  foundingDate: "2019",
};

async function getNavData() {
  const payload = await getPayloadClient();
  const [services, products, industries, enforcement] = await Promise.all([
    payload.find({
      collection: "services",
      where: { category: { equals: "core" } },
      sort: "title",
      limit: 100,
      depth: 0,
    }),
    payload.find({ collection: "products", sort: "title", limit: 100, depth: 0 }),
    payload.find({ collection: "industries", sort: "title", limit: 100, depth: 0 }),
    payload.find({
      collection: "services",
      where: { category: { equals: "enforcement" } },
      sort: "title",
      limit: 100,
      depth: 0,
    }),
  ]);

  const toItems = (docs: { title: string; slug?: string | null }[]) =>
    docs.map((doc) => ({ title: doc.title, slug: doc.slug ?? "" }));

  return {
    "/services": toItems(services.docs),
    "/products": toItems(products.docs),
    "/industries": toItems(industries.docs),
    "/enforcement-and-compliance": toItems(enforcement.docs),
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const navData = await getNavData();

  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="flex min-h-full flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <MotionConfig reducedMotion="user">
            <Header navData={navData} />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </MotionConfig>
        </body>
      </html>
    </ViewTransitions>
  );
}
