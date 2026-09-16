import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Golden Shield Security Services | Singapore Security & AI Surveillance",
    template: "%s | Golden Shield Security Services",
  },
  description:
    "Licensed, disciplined and technology-driven security services in Singapore — guarding, AI surveillance, access control and enforcement solutions.",
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
  );
}
