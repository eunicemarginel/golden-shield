import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Golden Shield Security Services collects, uses and protects personal data, in line with Singapore's Personal Data Protection Act (PDPA).",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative pt-28 pb-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Legal
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Last updated October 2026. This policy explains how Golden
              Shield Security Services Pte. Ltd. collects, uses and protects
              personal data, in accordance with Singapore&apos;s Personal
              Data Protection Act (PDPA).
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
        <Reveal className="mx-auto max-w-3xl space-y-10 text-foreground-muted">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              What we collect
            </h2>
            <p className="mt-3">
              When you submit an enquiry through our contact form, we collect
              the information you provide: your name, company name, email
              address, phone number and message. We do not collect personal
              data through any other automated means on this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              How we use it
            </h2>
            <p className="mt-3">
              We use the information you submit solely to respond to your
              enquiry, provide a security assessment or quote, and
              communicate with you about the services you&apos;ve asked
              about. We do not sell or rent your personal data to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Service providers
            </h2>
            <p className="mt-3">
              We use third-party providers to operate this website and
              deliver our services, including hosting and database
              infrastructure, and an email delivery provider to send
              enquiry notifications to our team. These providers process
              data on our behalf and are not authorised to use it for their
              own purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Cookies
            </h2>
            <p className="mt-3">
              This website does not currently use analytics, advertising or
              tracking cookies. If that changes, this policy will be updated
              accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Your rights
            </h2>
            <p className="mt-3">
              Under the PDPA, you may request access to, or correction of,
              the personal data we hold about you, and may withdraw consent
              for us to contact you at any time. To make a request, contact
              us using the details below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Contact us
            </h2>
            <p className="mt-3">
              For any questions about this policy or your personal data,
              contact us at{" "}
              <a
                href="mailto:info@golden-shield.com.sg"
                className="text-gold hover:underline"
              >
                info@golden-shield.com.sg
              </a>{" "}
              or 20 Sin Ming Lane #04-67, Singapore 573968.
            </p>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
