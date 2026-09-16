import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Button } from "@/components/Button";
import { PhotoSlot } from "@/components/PhotoSlot";
import { getPayloadClient } from "@/lib/payload";

type Args = { params: Promise<{ slug: string }> };

async function getProduct(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "products",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: Args) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <Container className="py-20">
      <span className="text-sm font-semibold uppercase tracking-widest text-gold">
        Product
      </span>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground">
        {product.title}
      </h1>
      <p className="mt-4 max-w-2xl text-foreground-muted">{product.summary}</p>

      <PhotoSlot
        image={product.heroImage}
        label={`${product.title} photo`}
        aspect="aspect-[21/9]"
        className="mt-10"
        sizes="(min-width: 1024px) 1024px, 100vw"
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RichText data={product.body} />
        </div>
        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">
            See it in action
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Request a walkthrough or a quote for your site.
          </p>
          <Button href="/contact-us" variant="primary" className="mt-4 w-full">
            Request a Quote
          </Button>
        </aside>
      </div>
    </Container>
  );
}
