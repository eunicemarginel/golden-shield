import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";

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
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./gss-website.db",
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
  ],
});
