import type { Metadata } from "next";
import { Container } from "@/components/Container";

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
    body: "To earn the trust of our clients by continuously improving the services we provide &mdash; investing in our people and our technology to exceed expectations, locally and internationally.",
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
    name: "Vikneswaran",
    role: "Operations Manager",
    quote:
      "Your safety is our paramount concern. With Golden Shield Security Services, you can trust us to provide top-notch security solutions, 24/7.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container className="py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            About Us
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
            The golden standard in Singapore security
          </h1>
          <p className="mt-4 text-foreground-muted">
            Founded in Singapore in 2019, Golden Shield Security Services
            brought together a management and operations team with over a
            decade of experience each in security, defence and law
            enforcement. We&apos;re one of the few Singapore-based security
            companies able to mount operations overseas, and our in-house
            R&amp;D team continues to develop new security technology
            locally.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-ink py-20 text-white">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">Leadership</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {leadership.map((person) => (
              <blockquote key={person.name} className="border-l-2 border-gold pl-6">
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
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
