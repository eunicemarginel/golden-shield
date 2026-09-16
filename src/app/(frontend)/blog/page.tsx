import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { getPayloadClient } from "@/lib/payload";

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
    <Container className="py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold">
          Resources
        </span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
          Insights on security &amp; compliance
        </h1>
        <p className="mt-4 text-foreground-muted">
          Guides, explainers and updates from our security and technology
          teams.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
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
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-foreground-muted">
          Our first articles are coming soon.
        </p>
      )}
    </Container>
  );
}
