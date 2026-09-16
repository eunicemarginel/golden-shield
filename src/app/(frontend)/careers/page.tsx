import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/Container";
import { getPayloadClient } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Golden Shield Security Services — competitive benefits, ongoing training and a clear path for career development.",
};

const benefits = [
  "Annual wage increments for performing employees",
  "AWS bonuses and performance bonuses for outstanding employees",
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
    <Container className="py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          Careers
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Build your security career with us
        </h1>
        <p className="mt-4 text-foreground-muted">
          We invest in our people with ongoing training, recognition and
          clear pathways for growth &mdash; because our officers are the
          standard we&apos;re known for.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="rounded-xl border border-border bg-surface p-5 text-sm text-foreground-muted"
          >
            {benefit}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Current Openings
        </h2>
        {openings.length > 0 ? (
          <ul className="mt-6 divide-y divide-border rounded-2xl border border-border">
            {openings.map((job) => (
              <li key={job.id}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="flex flex-col gap-1 p-6 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-foreground">{job.title}</p>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {job.summary}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-gold">
                    View role &rarr;
                  </span>
                </Link>
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
      </div>
    </Container>
  );
}
