import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries We Protect",
  description:
    "Tailored security programmes for schools, healthcare, retail, logistics, hospitality and more sectors across Singapore.",
};

export default async function IndustriesPage() {
  const payload = await getPayloadClient();
  const { docs: industries } = await payload.find({
    collection: "industries",
    sort: "title",
    limit: 100,
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ])}
      />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative py-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Industries
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Security programmes built for your sector
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Every industry faces different risks. We tailor manpower,
              technology and protocols to the operational realities of your
              sector.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
      {industries.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.id} delay={(index % 3) * 0.1}>
              <Card
                href={`/industries/${industry.slug}`}
                title={industry.title}
                description={industry.summary}
                image={industry.heroImage}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-foreground-muted">
          Industry pages are being finalised &mdash; check back soon, or{" "}
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
