import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { getPayloadClient } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    "Licensed guarding, patrol and event security services for residential, commercial and industrial sites in Singapore.",
};

export default async function ServicesPage() {
  const payload = await getPayloadClient();
  const { docs: services } = await payload.find({
    collection: "services",
    where: { category: { equals: "core" } },
    sort: "title",
    limit: 100,
  });

  return (
    <Container className="py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          Services
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Security services built for every site
        </h1>
        <p className="mt-4 text-foreground-muted">
          Licensed, trained and disciplined security officers deployed
          across residential, commercial, industrial and event environments
          &mdash; backed by a 24/7 command centre.
        </p>
      </div>

      {services.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              href={`/services/${service.slug}`}
              title={service.title}
              description={service.summary}
            />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-foreground-muted">
          Service pages are being finalised &mdash; check back soon, or{" "}
          <Link href="/contact-us" className="text-gold hover:underline">
            contact us
          </Link>{" "}
          for immediate assistance.
        </p>
      )}
    </Container>
  );
}
