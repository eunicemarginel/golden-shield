import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Golden Shield Security Services is a Singapore-headquartered security company founded in 2019, combining experienced manpower with in-house technology.",
};

const values = [
  {
    title: "Mission",
    body: "To provide security services that leave our clients feeling genuinely safe and secure. Our licensed, trained officers deliver a secure yet enjoyable experience, removing, deterring and preventing threats to buildings, facilities and events.",
  },
  {
    title: "Vision",
    body: "To earn the trust of our clients by continuously improving the services we provide — investing in our people and our technology to exceed expectations, locally and internationally.",
  },
  {
    title: "Values",
    body: "Honesty, integrity, unselfishness, professionalism and mutual respect. We hold ourselves accountable to our clients, staff and partners by honouring our commitments and delivering results.",
  },
];

const leadership = [
  {
    name: "Andrew Chng",
    role: "Director",
    quote:
      "Our commitment to your safety and security is unwavering. We stand ready to safeguard your world, providing you with the highest level of protection and peace of mind.",
  },
  {
    name: "Jason",
    role: "Operations Manager",
    quote:
      "Your safety is our paramount concern. With Golden Shield Security Services, you can trust us to provide top-notch security solutions, 24/7.",
  },
];

export default async function AboutPage() {
  const payload = await getPayloadClient();
  const siteSettings = await payload.findGlobal({ slug: "site-settings" });

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About Us", url: "/about" }])} />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative pt-28 pb-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              About Us
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              The golden standard in Singapore security
            </h1>
            <div className="mt-4 max-w-3xl space-y-4 text-ink-muted">
              <p>
                Founded in Singapore in 2019, Golden Shield Security Services
                brought together a management and operations team with over a
                decade of experience each in security, defence and law
                enforcement.
              </p>
              <p>
                We&apos;re one of the few Singapore-based security companies
                able to mount operations overseas. Whether the engagement is
                day-to-day corporate protection or a high-risk assignment, we
                scale our approach to the operational demands at hand rather
                than applying a single standard playbook.
              </p>
              <p>
                Our in-house R&amp;D team continues to develop new security
                technology locally, pairing experienced manpower with
                AI-powered systems to make protection more responsive and
                easier to monitor. Golden Shield is licensed by
                Singapore&apos;s Police Licensing &amp; Regulatory Department
                (PLRD) and is a member of the Security Association of
                Singapore (SAS).
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
        <Reveal delay={0.1}>
          <PhotoSlot
            image={siteSettings?.aboutPhoto}
            label="Office or team photo"
            aspect="aspect-[16/9]"
            className="mt-10"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="bg-ink py-20 text-white">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight">Leadership</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.1}>
                <blockquote>
                  <p className="text-lg leading-relaxed text-ink-muted">
                    &ldquo;{person.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-white">
                    {person.name}
                    <span className="ml-2 font-normal text-ink-muted">
                      {person.role}
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
