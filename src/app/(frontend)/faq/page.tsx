import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Golden Shield Security Services' guarding, technology and enforcement services.",
};

const categoryLabels: Record<string, string> = {
  general: "General",
  services: "Services",
  products: "Products & Technology",
  industries: "Industries",
};

const categoryOrder = ["general", "services", "products", "industries"];

export default async function FaqPage() {
  const payload = await getPayloadClient();
  const { docs: faqs } = await payload.find({
    collection: "faqs",
    limit: 200,
  });

  const groups = categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: faqs.filter((faq) => (faq.category ?? "general") === category),
    }))
    .filter((group) => group.items.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative pt-28 pb-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              FAQ
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Answers on licensing, guarding, technology and what to look for
              when hiring a security partner in Singapore. Can&apos;t find what
              you need?{" "}
              <a href="/contact-us" className="text-gold-bright hover:underline">
                Get in touch
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
        {groups.length > 0 ? (
          <div className="space-y-16">
            {groups.map((group, index) => (
              <Reveal key={group.category} delay={index * 0.08}>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
                  {group.label}
                </h2>
                <div className="mt-6 columns-1 gap-4 sm:columns-2">
                  {group.items.map((faq) => (
                    <details
                      key={faq.id}
                      className="group mb-4 break-inside-avoid rounded-2xl border border-border bg-background p-6 transition-colors open:border-gold/50 open:bg-surface"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-foreground marker:content-none">
                        <span>{faq.question}</span>
                        <svg
                          className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-sm text-foreground-muted">
            FAQs are being finalised &mdash; check back soon.
          </p>
        )}
      </Container>

      <JsonLd
        data={[
          ...(faqs.length > 0 ? [jsonLd] : []),
          breadcrumbSchema([{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]),
        ]}
      />
    </>
  );
}
