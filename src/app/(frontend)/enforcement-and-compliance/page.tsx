import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { getPayloadClient } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Enforcement & Compliance",
  description:
    "Security audits, private investigation, red teaming and outcome-based contract consultancy from Golden Shield Security Services.",
};

export default async function EnforcementPage() {
  const payload = await getPayloadClient();
  const { docs: services } = await payload.find({
    collection: "services",
    where: { category: { equals: "enforcement" } },
    sort: "title",
    limit: 100,
  });

  return (
    <Container className="py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          Enforcement &amp; Compliance
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Assurance beyond the guard post
        </h1>
        <p className="mt-4 text-foreground-muted">
          From security risk audits to private investigation and red-teaming
          exercises, our enforcement and compliance services help
          organisations verify and strengthen their security posture.
        </p>
      </div>

      {services.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              href={`/enforcement-and-compliance/${service.slug}`}
              title={service.title}
              description={service.summary}
            />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-foreground-muted">
          These pages are being finalised &mdash; check back soon, or{" "}
          <Link href="/contact-us" className="text-gold hover:underline">
            contact us
          </Link>{" "}
          for immediate assistance.
        </p>
      )}
    </Container>
  );
}
