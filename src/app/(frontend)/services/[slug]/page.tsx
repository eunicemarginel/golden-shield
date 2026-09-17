import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Button } from "@/components/Button";
import { PhotoSlot } from "@/components/PhotoSlot";
import { BackLink } from "@/components/BackLink";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { LivePreviewRefresh } from "@/components/payload/LivePreviewRefresh";
import { getPayloadClient } from "@/lib/payload";
import { isPreviewRequest } from "@/lib/preview";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

type Args = { params: Promise<{ slug: string }> };

async function getService(slug: string) {
  const payload = await getPayloadClient();
  const draft = await isPreviewRequest(payload);
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: slug }, category: { equals: "core" } },
    draft,
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Args) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const url = `/services/${service.slug}`;

  return (
    <Container className="pt-32 pb-20">
      <LivePreviewRefresh />
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.summary,
            url,
            image: typeof service.heroImage === "object" ? service.heroImage?.url ?? undefined : undefined,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.title, url },
          ]),
        ]}
      />
      <BackLink href="/services" label="Back to Services" />
      <Reveal>
        <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gold">
          Service
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground">
          {service.title}
        </h1>
        <p className="mt-4 max-w-2xl text-foreground-muted">{service.summary}</p>

        <PhotoSlot
          image={service.heroImage}
          label={`${service.title} photo`}
          aspect="aspect-[21/9]"
          className="mt-10"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RichText data={service.body} />
        </div>
        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Need this for your site?
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Get a free, no-obligation security assessment from our team.
          </p>
          <Button href="/contact-us" variant="primary" className="mt-4 w-full">
            Request a Quote
          </Button>
        </aside>
      </Reveal>
    </Container>
  );
}
