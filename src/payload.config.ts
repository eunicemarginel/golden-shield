import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Services } from "@/collections/Services";
import { Products } from "@/collections/Products";
import { Industries } from "@/collections/Industries";
import { Posts } from "@/collections/Posts";
import { FAQs } from "@/collections/FAQs";
import { JobOpenings } from "@/collections/JobOpenings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Services, Products, Industries, Posts, FAQs, JobOpenings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      ssl: process.env.DATABASE_URI?.includes("localhost")
        ? false
        : { rejectUnauthorized: false },
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ["services", "products", "industries", "posts"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) =>
        `${(doc as { title?: string })?.title ?? ""} | Golden Shield Security Services`,
      generateDescription: ({ doc }) => (doc as { summary?: string; excerpt?: string })?.summary ?? (doc as { excerpt?: string })?.excerpt ?? "",
    }),
    formBuilderPlugin({
      formOverrides: {
        labels: {
          singular: "Quote Request Form",
          plural: "Quote Request Forms",
        },
      },
    }),
    vercelBlobStorage({
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
