import Link from "next/link";
import { Container } from "@/components/Container";
import { companyInfo, primaryNav, secondaryNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-muted">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="text-lg font-bold tracking-tight text-white">
            GOLDEN SHIELD
          </span>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Licensed, disciplined and technology-driven security services in
            Singapore &mdash; combining trained manpower with AI-powered
            surveillance and monitoring.
          </p>
          <p className="mt-6 text-sm">{companyInfo.address}</p>
          <p className="text-sm">
            <a href={`tel:${companyInfo.phone}`} className="hover:text-gold-bright">
              {companyInfo.phone}
            </a>
          </p>
          <p className="text-sm">
            <a href={`mailto:${companyInfo.email}`} className="hover:text-gold-bright">
              {companyInfo.email}
            </a>
          </p>
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
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
          <p>PLRD Licensed &middot; Security Association of Singapore Member</p>
        </Container>
      </div>
    </footer>
  );
}
