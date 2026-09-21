import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Button } from "@/components/Button";
import { BackLink } from "@/components/BackLink";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { getPayloadClient } from "@/lib/payload";
import { whatsappLink } from "@/lib/nav";
import { jobPostingSchema, breadcrumbSchema } from "@/lib/schema";

type Args = { params: Promise<{ slug: string }> };

async function getJob(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "job-openings",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.summary,
  };
}

export default async function JobDetailPage({ params }: Args) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  const url = `/careers/${job.slug}`;

  return (
    <Container className="pt-32 pb-20">
      <JsonLd
        data={[
          jobPostingSchema({
            title: job.title,
            description: job.summary,
            url,
            employmentType: job.employmentType,
            datePosted: job.createdAt,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Careers", url: "/careers" },
            { name: job.title, url },
          ]),
        ]}
      />
      <BackLink href="/careers" label="Back to Careers" />
      <Reveal>
        <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gold">
          {job.employmentType?.replace("-", " ")}
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground">
          {job.title}
        </h1>
        <p className="mt-4 max-w-2xl text-foreground-muted">{job.summary}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RichText data={job.body} />
        </div>
        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Ready to apply?
          </h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Email your resume and we&apos;ll be in touch.
          </p>
          <Button
            href="mailto:info@golden-shield.com.sg"
            variant="primary"
            className="mt-4 w-full"
          >
            Apply Now
          </Button>
          <a
            href={whatsappLink(
              `Hi Golden Shield, I'd like to apply for the ${job.title} position.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[#25D366] hover:text-[#25D366]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Apply via WhatsApp
          </a>
        </aside>
      </Reveal>
    </Container>
  );
}
