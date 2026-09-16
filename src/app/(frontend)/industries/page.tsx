import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { getPayloadClient } from "@/lib/payload";

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
    <Container className="py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          Industries
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Security programmes built for your sector
        </h1>
        <p className="mt-4 text-foreground-muted">
          Every industry faces different risks. We tailor manpower,
          technology and protocols to the operational realities of your
          sector.
        </p>
      </div>

      {industries.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card
              key={industry.id}
              href={`/industries/${industry.slug}`}
              title={industry.title}
              description={industry.summary}
              image={industry.heroImage}
            />
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
  );
}
