import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { resendAdapter } from "@payloadcms/email-resend";

import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Services } from "@/collections/Services";
import { Products } from "@/collections/Products";
import { Industries } from "@/collections/Industries";
import { Posts } from "@/collections/Posts";
import { FAQs } from "@/collections/FAQs";
import { JobOpenings } from "@/collections/JobOpenings";
import { SiteSettings } from "@/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      title: "Golden Shield Admin",
      titleSuffix: " | Golden Shield",
    },
    components: {
      graphics: {
        Logo: "/src/components/payload/Logo.tsx#Logo",
        Icon: "/src/components/payload/Icon.tsx#Icon",
      },
      beforeDashboard: [
        "/src/components/payload/RecentQuoteRequests.tsx#RecentQuoteRequests",
      ],
    },
  },
  collections: [Users, Media, Services, Products, Industries, Posts, FAQs, JobOpenings],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  email: process.env.RESEND_API_KEY
    ? resendAdapter({
        defaultFromAddress: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        defaultFromName: "Golden Shield Security Services",
        apiKey: process.env.RESEND_API_KEY,
      })
    : undefined,
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
        admin: {
          group: "Forms",
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: "Forms",
        },
      },
    }),
    vercelBlobStorage({
      collections: { media: { disablePayloadAccessControl: true } },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
