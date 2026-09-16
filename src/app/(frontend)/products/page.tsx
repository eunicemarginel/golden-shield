import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { getPayloadClient } from "@/lib/payload";

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
    <Container className="py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          Products
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          AI-powered security technology
        </h1>
        <p className="mt-4 text-foreground-muted">
          Surveillance, access control and analytics platforms that extend
          our guarding teams with 24/7 automated detection and monitoring.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              href={`/products/${product.slug}`}
              title={product.title}
              description={product.summary}
              image={product.heroImage}
            />
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
  );
}
