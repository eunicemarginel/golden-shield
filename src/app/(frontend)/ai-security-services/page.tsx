import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI & Digital Security Technology",
  description:
    "How Golden Shield Security Services uses AI detection, virtual guard patrolling and a 24/7 command centre to extend physical security coverage.",
};

const aiProductSlugs = [
  "ai-human-vehicle-detection-analytics",
  "virtual-guard-patrolling",
  "facial-recognition-attendance",
  "security-robot-deployment",
  "occupancy-crowd-heat-mapping",
  "predictive-maintenance",
];

export default async function AiSecurityServicesPage() {
  const payload = await getPayloadClient();
  const { docs: products } = await payload.find({
    collection: "products",
    where: { slug: { in: aiProductSlugs } },
    limit: 20,
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "AI & Digital Security Technology", url: "/ai-security-services" },
        ])}
      />
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-bright">
              AI &amp; Digital Technology
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Security intelligence that never blinks
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Golden Shield pairs licensed officers with AI-powered
              detection, virtual guard patrolling and a 24/7 command centre
              &mdash; extending coverage beyond what manpower alone can
              deliver.
            </p>
            <div className="mt-10">
              <Button href="/contact-us" variant="primary">
                Talk to Our Technology Team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Our AI-powered capabilities
          </h2>
        </Reveal>
        {products.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={(index % 3) * 0.1}>
                <Card
                  href={`/products/${product.slug}`}
                  title={product.title}
                  description={product.summary}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm text-foreground-muted">
            Full technology pages are being finalised &mdash; see the{" "}
            <Link href="/products" className="text-gold hover:underline">
              Products
            </Link>{" "}
            page for our current line-up.
          </p>
        )}
      </Container>
    </>
  );
}
