import { Link } from "next-view-transitions";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PinIcon, PhoneIcon, MailIcon, BadgeIcon } from "@/components/icons";
import { companyInfo, primaryNav, secondaryNav } from "@/lib/nav";

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
