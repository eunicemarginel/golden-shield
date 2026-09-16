import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
