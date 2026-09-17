import { Link } from "next-view-transitions";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { companyInfo, primaryNav, secondaryNav } from "@/lib/nav";

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M10 18s6-5.686 6-10a6 6 0 10-12 0c0 4.314 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M4 3h3l1.5 4-2 1.5a10 10 0 004.5 4.5L12.5 11l4 1.5V16a1 1 0 01-1 1C8.5 17 3 11.5 3 4a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <rect x="3" y="4.5" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 5.5l6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path
        d="M10 2l6 2.5v5c0 4-2.5 6.8-6 8.5-3.5-1.7-6-4.5-6-8.5v-5L10 2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M7.5 10l1.8 1.8L12.8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-ink-muted">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <Container className="relative">
        <Reveal>
          <div className="grid gap-12 py-16 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Image
                src="/brand/gss-logo.png"
                alt="Golden Shield Security Services"
                width={496}
                height={135}
                className="h-16 w-auto"
              />
              <p className="mt-4 max-w-sm text-sm leading-relaxed">
                Licensed, disciplined and technology-driven security services in
                Singapore &mdash; combining trained manpower with AI-powered
                surveillance and monitoring.
              </p>
              <div className="mt-6 space-y-2.5">
                <p className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 text-gold-bright"><PinIcon /></span>
                  {companyInfo.address}
                </p>
                <p className="flex items-center gap-2.5 text-sm">
                  <span className="text-gold-bright"><PhoneIcon /></span>
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-gold-bright">
                    {companyInfo.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5 text-sm">
                  <span className="text-gold-bright"><MailIcon /></span>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-gold-bright">
                    {companyInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Solutions
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-gold-bright">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {secondaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-gold-bright">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact-us" className="hover:text-gold-bright">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-ink-muted">
                <span className="text-gold-bright"><BadgeIcon /></span>
                PLRD Licensed
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-ink-muted">
                <span className="text-gold-bright"><BadgeIcon /></span>
                Security Association of Singapore Member
              </span>
            </div>
            <Button href="/contact-us" variant="primary">
              Free Security Assessment
            </Button>
          </div>
        </Reveal>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="py-6 text-xs text-ink-muted/70">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
