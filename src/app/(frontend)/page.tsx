import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { HeroVideo } from "@/components/HeroVideo";

const stats = [
  { value: "10+", label: "Years in Operation" },
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
  },
  {
    href: "/products",
    eyebrow: "Technology",
    title: "Products & AI Solutions",
    description:
      "CCTV, access control, AI detection and virtual guard patrolling backed by a 24/7 command centre.",
  },
  {
    href: "/industries",
    eyebrow: "Sectors",
    title: "Industries We Protect",
    description:
      "Tailored security programmes for schools, healthcare, retail, logistics, hospitality and more.",
  },
  {
    href: "/enforcement-and-compliance",
    eyebrow: "Assurance",
    title: "Enforcement & Compliance",
    description:
      "Security audits, private investigation, red teaming and outcome-based contract consultancy.",
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

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <HeroVideo />
        <Container className="relative z-10 flex flex-col gap-10 py-24 lg:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-bright">
              Singapore Security &middot; Est. 2019
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Setting the Golden Standard in Security Excellence
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Golden Shield Security Services combines licensed, highly
              trained manpower with AI-powered surveillance and a 24/7
              command centre &mdash; delivering total protection for
              buildings, facilities and events across Singapore.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
          </div>

          <dl className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-gold-bright sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-ink-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
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
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Card key={pillar.href} {...pillar} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Our Approach
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              Risk planning &amp; crisis response
            </p>
            <p className="mt-4 text-foreground-muted">
              Golden Shield runs on a four-tier framework for effective
              security risk management, built to give clients a
              client-centred, accountable service at every stage.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {framework.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="font-mono text-sm text-gold">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 text-white">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to strengthen your security posture?
            </h2>
            <p className="mt-3 max-w-xl text-ink-muted">
              Speak with our team for a free, no-obligation security
              assessment tailored to your site or event.
            </p>
          </div>
          <Button href="/contact-us" variant="primary">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
}
