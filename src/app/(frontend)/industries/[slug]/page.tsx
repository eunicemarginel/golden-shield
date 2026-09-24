import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { PhotoSlot } from "@/components/PhotoSlot";
import type { MediaLike } from "@/components/PhotoSlot";
import { BackLink } from "@/components/BackLink";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { LivePreviewRefresh } from "@/components/payload/LivePreviewRefresh";
import { getPayloadClient } from "@/lib/payload";
import { isPreviewRequest } from "@/lib/preview";
import { whatsappLink } from "@/lib/nav";
import { breadcrumbSchema } from "@/lib/schema";

type Args = { params: Promise<{ slug: string }> };

type RelatedDoc = {
  id: number | string;
  slug: string;
  title: string;
  summary: string;
  heroImage?: MediaLike;
};

async function getIndustry(slug: string) {
  const payload = await getPayloadClient();
  const draft = await isPreviewRequest(payload);
  const { docs } = await payload.find({
    collection: "industries",
    where: { slug: { equals: slug } },
    depth: 2,
    draft,
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: Args) {
  const { slug } = await params;
  const industry = await getIndustry(slug);
  if (!industry) notFound();

  const relatedServices = ((industry.relatedServices ?? []) as unknown[]).filter(
    (s): s is RelatedDoc => typeof s === "object" && s !== null,
  );
  const relatedProducts = ((industry.relatedProducts ?? []) as unknown[]).filter(
    (p): p is RelatedDoc => typeof p === "object" && p !== null,
  );

  const url = `/industries/${industry.slug}`;

  return (
    <Container className="pt-32 pb-20">
      <LivePreviewRefresh />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
          { name: industry.title, url },
        ])}
      />
      <BackLink href="/industries" label="Back to Industries" />
      <Reveal>
        <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gold">
          Industry
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground">
          {industry.title}
        </h1>
        <p className="mt-4 max-w-2xl text-foreground-muted">{industry.summary}</p>

        <PhotoSlot
          image={industry.heroImage}
          label={`${industry.title} photo`}
          aspect="aspect-[21/9]"
          className="mt-10"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RichText data={industry.body} />
        </div>
        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Get a tailored proposal
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Tell us about your site and we&apos;ll put together a security
            programme for your sector.
          </p>
          <Button href="/contact-us" variant="primary" className="mt-4 w-full">
            Request a Quote
          </Button>
          <a
            href={whatsappLink(
              `Hi Golden Shield, I'd like to enquire about security for ${industry.title}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[#25D366] hover:text-[#25D366]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </aside>
      </Reveal>

      {(relatedServices.length > 0 || relatedProducts.length > 0) && (
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service, index) => (
            <Reveal key={`service-${service.id}`} delay={index * 0.05}>
              <Card
                href={`/services/${service.slug}`}
                eyebrow="Service"
                title={service.title}
                description={service.summary}
                image={service.heroImage}
              />
            </Reveal>
          ))}
          {relatedProducts.map((product, index) => (
            <Reveal key={`product-${product.id}`} delay={index * 0.05}>
              <Card
                href={`/products/${product.slug}`}
                eyebrow="Product"
                title={product.title}
                description={product.summary}
                image={product.heroImage}
              />
            </Reveal>
          ))}
        </div>
      )}
    </Container>
  );
}
