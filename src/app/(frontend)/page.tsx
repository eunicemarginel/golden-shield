import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { TiltCard } from "@/components/TiltCard";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { GlassPanel } from "@/components/GlassPanel";
import { getPayloadClient } from "@/lib/payload";

const stats = [
  { value: "7+", label: "Years in Operation" },
  { value: "24/7", label: "Command Centre Monitoring" },
  { value: "100%", label: "PLRD Licensed Officers" },
  { value: "SAS", label: "Association Member" },
];

const pillars = [
  {
    href: "/services",
    eyebrow: "Manpower",
    title: "Security Services",
    description:
      "Licensed guarding, patrol and event security teams for residential, commercial and industrial sites.",
    imageKey: "homeServicesImage" as const,
  },
  {
    href: "/products",
    eyebrow: "Technology",
    title: "Products & AI Solutions",
    description:
      "CCTV, access control, AI detection and virtual guard patrolling backed by a 24/7 command centre.",
    imageKey: "homeProductsImage" as const,
  },
  {
    href: "/industries",
    eyebrow: "Sectors",
    title: "Industries We Protect",
    description:
      "Tailored security programmes for schools, healthcare, retail, logistics, hospitality and more.",
    imageKey: "homeIndustriesImage" as const,
  },
  {
    href: "/enforcement-and-compliance",
    eyebrow: "Assurance",
    title: "Enforcement & Compliance",
    description:
      "Security audits, private investigation, red teaming and outcome-based contract consultancy.",
    imageKey: "homeEnforcementImage" as const,
  },
];

const framework = [
  {
    title: "Objective",
    description:
      "We anticipate every client's needs from the outset, tailoring an integrated security support strategy around them.",
  },
  {
    title: "Compliance",
    description:
      "Every engagement adheres to the regulatory and procedural guidelines set by clients and government authorities.",
  },
  {
    title: "Technology",
    description:
      "We deploy technology as the connective layer that keeps communication and monitoring seamless across every site.",
  },
  {
    title: "Protection",
    description:
      "We analyse root causes, threats and operational variables to build a pragmatic, cost-effective physical security strategy.",
  },
];

export default async function Home() {
  const payload = await getPayloadClient();
  const siteSettings = await payload.findGlobal({ slug: "site-settings" });
  const resolvedPillars = pillars.map(({ imageKey, ...pillar }) => ({
    ...pillar,
    image: siteSettings?.[imageKey],
  }));

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <HeroVideo />
        <div className="grid-texture pointer-events-none absolute inset-0 z-[1]" />
        <Container className="relative z-10 flex flex-col gap-8 pt-28 pb-20 sm:gap-10 sm:py-24 lg:py-36">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-bright">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-bright opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-bright" />
              </span>
              Singapore Security &middot; Est. 2019
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Setting the Golden Standard in Security Excellence
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Golden Shield Security Services combines licensed, highly
              trained manpower with AI-powered surveillance and a 24/7
              command centre &mdash; delivering total protection for
              buildings, facilities and events across Singapore.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
              <Button href="/contact-us" variant="primary">
                Get a Free Security Assessment
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="text-white"
              >
                Explore Our Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm sm:gap-6 sm:p-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-2xl font-semibold text-gold-bright sm:text-3xl">
                    <CountUp value={stat.value} />
                  </dd>
                  <dd className="mt-1 text-xs text-ink-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
              What We Do
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              A full suite of security solutions
            </p>
            <p className="mt-4 text-foreground-muted">
              Integrated security solutions that enhance safety while
              streamlining costs and manpower &mdash; protecting your
              business and giving you peace of mind.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resolvedPillars.map((pillar, index) => (
              <Reveal key={pillar.href} delay={(index % 4) * 0.1}>
                <TiltCard>
                  <Card {...pillar} />
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative">
          <Reveal className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Our Approach
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight">
              Risk Planning &amp; Crisis Response
            </p>
            <p className="mt-4 text-ink-muted">
              Golden Shield runs on a four-tier framework for effective
              security risk management, built to give clients a
              client-centred, accountable service at every stage.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {framework.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <GlassPanel className="h-full">
                  <span className="font-mono text-sm text-gold-bright">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </GlassPanel>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-border bg-ink py-20 text-white">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to strengthen your security posture?
              </h2>
              <p className="mt-3 max-w-xl text-ink-muted">
                Speak with our team for a free, no-obligation security
                assessment tailored to your site or event.
              </p>
            </div>
            <Button
              href="/contact-us"
              variant="primary"
              className="transition-all duration-300 hover:shadow-[0_0_32px_4px_rgba(214,185,94,0.35)]"
            >
              Contact Us
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
