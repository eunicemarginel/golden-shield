import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbSchema } from "@/lib/schema";

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
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative py-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Services
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Security services built for every site
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Licensed, trained and disciplined security officers deployed
              across residential, commercial, industrial and event environments
              &mdash; backed by a 24/7 command centre.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
      {services.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) * 0.1}>
              <Card
                href={`/services/${service.slug}`}
                title={service.title}
                description={service.summary}
                image={service.heroImage}
              />
            </Reveal>
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
    </>
  );
}
