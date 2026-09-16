import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RichText } from "@/components/RichText";
import { PhotoSlot } from "@/components/PhotoSlot";
import { getPayloadClient } from "@/lib/payload";

type Args = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
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

  return (
    <Container className="py-20">
      <span className="text-sm font-semibold uppercase tracking-widest text-gold">
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

      <div className="mt-10 max-w-3xl">
        <RichText data={post.body} />
      </div>
    </Container>
  );
}
