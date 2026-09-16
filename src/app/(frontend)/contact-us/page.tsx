import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PhotoSlot } from "@/components/PhotoSlot";
import { companyInfo } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free security assessment from Golden Shield Security Services. Call, email or send an enquiry.",
};

const trustPoints = [
  { label: "Response time", value: "Within 1 business day" },
  { label: "Licensing", value: "PLRD Licensed Officers" },
  { label: "Availability", value: "24/7 Command Centre" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <Container className="py-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
            Contact Us
          </span>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
            Let&apos;s talk about your security needs
          </h1>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Tell us about your site, event or security concern &mdash; a
            member of our team will get back to you with a tailored
            recommendation, not a generic quote.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <dt className="text-xs uppercase tracking-widest text-ink-muted">
                  {point.label}
                </dt>
                <dd className="mt-1 font-semibold text-gold-bright">
                  {point.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container className="py-20">
        <PhotoSlot
          image={undefined}
          label="Team or office photo"
          aspect="aspect-[21/9]"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Company
                <input
                  type="text"
                  name="company"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
                />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Phone
                <input
                  type="tel"
                  name="phone"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-foreground">
              How can we help?
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold-bright sm:w-auto"
            >
              Send Enquiry
            </button>
          </form>

          <div className="rounded-2xl border border-gold/30 bg-surface p-8">
            <h2 className="text-lg font-semibold text-foreground">
              {companyInfo.name}
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex gap-3">
                <span aria-hidden className="text-lg">
                  📍
                </span>
                <div>
                  <dt className="font-medium text-foreground">Address</dt>
                  <dd className="mt-1 text-foreground-muted">
                    {companyInfo.address}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span aria-hidden className="text-lg">
                  📞
                </span>
                <div>
                  <dt className="font-medium text-foreground">Phone</dt>
                  <dd className="mt-1 text-foreground-muted">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="hover:text-gold"
                    >
                      {companyInfo.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <span aria-hidden className="text-lg">
                  ✉️
                </span>
                <div>
                  <dt className="font-medium text-foreground">Email</dt>
                  <dd className="mt-1 text-foreground-muted">
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="hover:text-gold"
                    >
                      {companyInfo.email}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </>
  );
}
