import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { getPayloadClient } from "@/lib/payload";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Golden Shield Security Services' guarding, technology and enforcement services.",
};

export default async function FaqPage() {
  const payload = await getPayloadClient();
  const { docs: faqs } = await payload.find({
    collection: "faqs",
    sort: "category",
    limit: 200,
  });

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
    <Container className="py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          FAQ
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Frequently asked questions
        </h1>
      </div>

      {faqs.length > 0 ? (
        <div className="mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border">
          {faqs.map((faq) => (
            <details key={faq.id} className="group p-6">
              <summary className="cursor-pointer list-none font-semibold text-foreground marker:content-none">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-foreground-muted">
          FAQs are being finalised &mdash; check back soon.
        </p>
      )}

      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Container>
  );
}
