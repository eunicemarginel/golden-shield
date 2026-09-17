import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Products & AI Technology",
  description:
    "CCTV, access control, AI human and vehicle detection, virtual guard patrolling and more from Golden Shield Security Services.",
};

export default async function ProductsPage() {
  const payload = await getPayloadClient();
  const { docs: products } = await payload.find({
    collection: "products",
    sort: "title",
    limit: 100,
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ])}
      />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative pt-28 pb-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Products
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              AI-powered security technology
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Surveillance, access control and analytics platforms that extend
              our guarding teams with 24/7 automated detection and monitoring.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
      {products.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={(index % 3) * 0.1}>
              <Card
                href={`/products/${product.slug}`}
                title={product.title}
                description={product.summary}
                image={product.heroImage}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-foreground-muted">
          Product pages are being finalised &mdash; check back soon, or{" "}
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
