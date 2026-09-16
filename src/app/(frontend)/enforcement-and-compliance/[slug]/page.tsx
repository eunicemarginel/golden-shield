import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Button } from "@/components/Button";
import { PhotoSlot } from "@/components/PhotoSlot";
import { LivePreviewRefresh } from "@/components/payload/LivePreviewRefresh";
import { getPayloadClient } from "@/lib/payload";
import { isPreviewRequest } from "@/lib/preview";

type Args = { params: Promise<{ slug: string }> };

async function getService(slug: string) {
  const payload = await getPayloadClient();
  const draft = await isPreviewRequest(payload);
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: slug }, category: { equals: "enforcement" } },
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

export default async function EnforcementDetailPage({ params }: Args) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  return (
    <Container className="py-20">
      <LivePreviewRefresh />
      <span className="text-sm font-semibold uppercase tracking-widest text-gold">
        Enforcement &amp; Compliance
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

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RichText data={service.body} />
        </div>
        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Discuss your requirements
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Speak with our consultancy team in confidence.
          </p>
          <Button href="/contact-us" variant="primary" className="mt-4 w-full">
            Contact Us
          </Button>
        </aside>
      </div>
    </Container>
  );
}
