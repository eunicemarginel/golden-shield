import { getPayloadClient } from "@/lib/payload";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.golden-shield.com.sg";

function section(title: string, docs: { title: string; slug: string; summary?: string }[], base: string) {
  if (docs.length === 0) return "";
  const lines = docs.map((doc) => `- [${doc.title}](${SITE_URL}${base}/${doc.slug})${doc.summary ? `: ${doc.summary}` : ""}`);
  return `## ${title}\n\n${lines.join("\n")}\n`;
}

export async function GET() {
  const payload = await getPayloadClient();

  const [services, products, industries, posts] = await Promise.all([
    payload.find({ collection: "services", where: { category: { equals: "core" } }, limit: 200, pagination: false }),
    payload.find({ collection: "products", limit: 200, pagination: false }),
    payload.find({ collection: "industries", limit: 200, pagination: false }),
    payload.find({ collection: "posts", limit: 200, pagination: false }),
  ]);

  const enforcement = await payload.find({
    collection: "services",
    where: { category: { equals: "enforcement" } },
    limit: 200,
    pagination: false,
  });

  const body = `# Golden Shield Security Services

> Licensed, technology-driven security company headquartered in Singapore, founded in 2019. Combines trained manpower (guarding, patrol, concierge, VIP protection) with AI-powered surveillance technology (CCTV, access control, AI human/vehicle detection, virtual guard patrolling) and a 24/7 command centre. PLRD-licensed and a Security Association of Singapore member.

Key pages:
- Home: ${SITE_URL}/
- About: ${SITE_URL}/about
- Contact: ${SITE_URL}/contact-us
- FAQ: ${SITE_URL}/faq
- Careers: ${SITE_URL}/careers

${section("Security Services", services.docs.map((d) => ({ title: d.title, slug: d.slug ?? "", summary: d.summary })), "/services")}
${section("Enforcement & Compliance", enforcement.docs.map((d) => ({ title: d.title, slug: d.slug ?? "", summary: d.summary })), "/enforcement-and-compliance")}
${section("Products & AI Technology", products.docs.map((d) => ({ title: d.title, slug: d.slug ?? "", summary: d.summary })), "/products")}
${section("Industries Served", industries.docs.map((d) => ({ title: d.title, slug: d.slug ?? "", summary: d.summary })), "/industries")}
${section("Blog & Resources", posts.docs.map((d) => ({ title: d.title, slug: d.slug ?? "", summary: d.excerpt })), "/blog")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
