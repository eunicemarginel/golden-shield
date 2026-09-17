import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PhotoSlot } from "@/components/PhotoSlot";
import { BackLink } from "@/components/BackLink";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { LivePreviewRefresh } from "@/components/payload/LivePreviewRefresh";
import { getPayloadClient } from "@/lib/payload";
import { isPreviewRequest } from "@/lib/preview";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type Args = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  const payload = await getPayloadClient();
  const draft = await isPreviewRequest(payload);
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    draft,
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `/blog/${post.slug}`;

  return (
    <Container className="py-20">
      <LivePreviewRefresh />
      <JsonLd
        data={[
          articleSchema({
            headline: post.title,
            description: post.excerpt,
            url,
            image: typeof post.heroImage === "object" ? post.heroImage?.url ?? undefined : undefined,
            datePublished: post.publishedDate,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url },
          ]),
        ]}
      />
      <BackLink href="/blog" label="Back to Blog" />
      <Reveal>
        <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gold">
          {new Date(post.publishedDate).toLocaleDateString("en-SG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground">
          {post.title}
        </h1>
        <p className="mt-4 max-w-2xl text-foreground-muted">{post.excerpt}</p>

        <PhotoSlot
          image={post.heroImage}
          label={`${post.title} photo`}
          aspect="aspect-[21/9]"
          className="mt-10 max-w-3xl"
          sizes="(min-width: 1024px) 768px, 100vw"
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-10 max-w-3xl">
        <RichText data={post.body} />
      </Reveal>
    </Container>
  );
}
