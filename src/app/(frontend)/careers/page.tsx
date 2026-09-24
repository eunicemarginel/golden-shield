import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { getPayloadClient } from "@/lib/payload";
import { whatsappLink } from "@/lib/nav";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Golden Shield Security Services — competitive benefits, ongoing training and a clear path for career development.",
};

const benefits = [
  "Annual wage increments for performing employees",
  "Performance bonuses for outstanding employees",
  "Higher rate of pay for officers who work festive periods",
  "Reward system with vouchers for officers who receive client compliments",
  "Incentives for punctuality, performance and festive periods",
  "Additional medical insurance benefits for outstanding employees",
  "Weekly / monthly advances for employees",
  "Company-paid upgrading training",
  "Long service awards",
  "Paid union membership for outstanding employees",
];

export default async function CareersPage() {
  const payload = await getPayloadClient();
  const { docs: openings } = await payload.find({
    collection: "job-openings",
    where: { isOpen: { equals: true } },
    sort: "title",
    limit: 100,
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ])}
      />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative pt-28 pb-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Careers
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Build your security career with us
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              We invest in our people with ongoing training, recognition and
              clear pathways for growth &mdash; because our officers are the
              standard we&apos;re known for.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
      <div className="grid gap-6 sm:grid-cols-2">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit} delay={(index % 4) * 0.06}>
            <div className="rounded-xl border border-border bg-surface p-5 text-sm text-foreground-muted">
              {benefit}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Current Openings
        </h2>
        {openings.length > 0 ? (
          <ul className="mt-6 divide-y divide-border rounded-2xl border border-border">
            {openings.map((job) => (
              <li
                key={job.id}
                className="group flex flex-col gap-4 p-6 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between"
              >
                <Link
                  href={`/careers/${job.slug}`}
                  className="flex flex-1 items-center gap-4"
                >
                  {job.heroImage && (
                    <PhotoSlot
                      image={job.heroImage}
                      label={`${job.title} photo`}
                      aspect="aspect-[5/7]"
                      className="w-14 shrink-0 sm:w-16"
                      sizes="80px"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-gold">
                      {job.title}
                    </p>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {job.summary}
                    </p>
                  </div>
                </Link>
                <div className="flex shrink-0 items-center gap-4">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-sm font-semibold text-gold"
                  >
                    View role &rarr;
                  </Link>
                  <a
                    href={whatsappLink(
                      `Hi Golden Shield, I'd like to apply for the ${job.title} position.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Apply via WhatsApp
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-foreground-muted">
            No open roles right now &mdash; send us your resume at{" "}
            <a
              href="mailto:info@golden-shield.com.sg"
              className="text-gold hover:underline"
            >
              info@golden-shield.com.sg
            </a>{" "}
            and we&apos;ll be in touch when a role opens up.
          </p>
        )}
      </Reveal>
      </Container>
    </>
  );
}
