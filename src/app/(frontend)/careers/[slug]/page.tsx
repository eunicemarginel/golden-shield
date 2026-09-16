import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { Button } from "@/components/Button";
import { getPayloadClient } from "@/lib/payload";

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

  return (
    <Container className="py-20">
      <span className="text-sm font-semibold uppercase tracking-widest text-gold">
        {job.employmentType?.replace("-", " ")}
      </span>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground">
        {job.title}
      </h1>
      <p className="mt-4 max-w-2xl text-foreground-muted">{job.summary}</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-3">
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
        </aside>
      </div>
    </Container>
  );
}
