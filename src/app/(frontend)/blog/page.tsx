import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Security guides, compliance explainers and industry insights from Golden Shield Security Services.",
};

export default async function BlogPage() {
  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: "posts",
    sort: "-publishedDate",
    limit: 50,
  });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative pt-28 pb-20">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-bright">
              Resources
            </span>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
              Insights on security &amp; compliance
            </h1>
            <p className="mt-4 max-w-2xl text-ink-muted">
              Guides, explainers and updates from our security and technology
              teams.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-20">
      {posts.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={(index % 3) * 0.1}>
              <Card
                href={`/blog/${post.slug}`}
                eyebrow={new Date(post.publishedDate).toLocaleDateString("en-SG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                title={post.title}
                description={post.excerpt}
                image={post.heroImage}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-foreground-muted">
          Our first articles are coming soon.
        </p>
      )}
      </Container>
    </>
  );
}
