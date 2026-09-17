import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PhotoSlot } from "@/components/PhotoSlot";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { companyInfo } from "@/lib/nav";
import { getPayloadClient } from "@/lib/payload";
import { getOrCreateContactForm } from "@/lib/getContactForm";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free security assessment from Golden Shield Security Services. Call, email or send an enquiry.",
};

const trustPoints = [
  { label: "Response time", value: "Within 1 business day" },
  { label: "Licensing", value: "PLRD Licensed Officers" },
  { label: "Availability", value: "24/7 Command Centre" },
];

export default async function ContactPage() {
  const payload = await getPayloadClient();
  const siteSettings = await payload.findGlobal({ slug: "site-settings" });
  const contactFormId = await getOrCreateContactForm();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact Us", url: "/contact-us" }])} />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative py-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Contact Us
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Let&apos;s talk about your security needs
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Tell us about your site, event or security concern &mdash; a
              member of our team will get back to you with a tailored
              recommendation, not a generic quote.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point.label}>
                  <dt className="text-xs uppercase tracking-widest text-ink-muted">
                    {point.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-gold-bright">
                    {point.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
        <Reveal>
          <PhotoSlot
            image={siteSettings?.contactPhoto}
            label="Team or office photo"
            aspect="aspect-[21/9]"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-12 lg:grid-cols-2">
          <ContactForm formId={contactFormId} />

          <div className="rounded-2xl border border-gold/30 bg-surface p-8">
            <h2 className="text-lg font-semibold text-foreground">
              {companyInfo.name}
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex gap-3">
                <span aria-hidden className="text-lg">
                  📍
                </span>
                <div>
                  <dt className="font-medium text-foreground">Address</dt>
                  <dd className="mt-1 text-foreground-muted">
                    {companyInfo.address}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span aria-hidden className="text-lg">
                  📞
                </span>
                <div>
                  <dt className="font-medium text-foreground">Phone</dt>
                  <dd className="mt-1 text-foreground-muted">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="hover:text-gold"
                    >
                      {companyInfo.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span aria-hidden className="text-lg">
                  ✉️
                </span>
                <div>
                  <dt className="font-medium text-foreground">Email</dt>
                  <dd className="mt-1 text-foreground-muted">
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="hover:text-gold"
                    >
                      {companyInfo.email}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
