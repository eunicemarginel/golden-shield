import Link from "next/link";
import type { Payload } from "payload";

type SubmissionField = { field: string; value: unknown };

const NAME_KEYS = ["name", "fullname", "full-name", "full_name", "yourname"];
const EMAIL_KEYS = ["email", "emailaddress", "email-address", "email_address"];

function pickField(fields: SubmissionField[], keys: string[]) {
  const normalized = fields.map((f) => ({
    key: f.field.toLowerCase().replace(/\s+/g, ""),
    value: f.value,
  }));
  const match = normalized.find((f) => keys.includes(f.key));
  return typeof match?.value === "string" ? match.value : undefined;
}

function timeAgo(dateString: string) {
  const minutes = Math.floor((Date.now() - new Date(dateString).getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateString).toLocaleDateString("en-SG", { month: "short", day: "numeric" });
}

export async function RecentQuoteRequests({ payload }: { payload: Payload }) {
  const { docs, totalDocs } = await payload.find({
    collection: "form-submissions",
    sort: "-createdAt",
    limit: 5,
    depth: 0,
  });

  return (
    <div
      style={{
        border: "1px solid var(--theme-elevation-150)",
        borderRadius: "var(--style-radius-m)",
        background: "var(--theme-elevation-0)",
        padding: "calc(var(--base) * 0.8)",
        marginBottom: "var(--base)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "calc(var(--base) * 0.5)",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1rem" }}>Recent Quote Requests</h3>
        <Link
          href="/admin/collections/form-submissions"
          style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}
        >
          View all ({totalDocs})
        </Link>
      </div>

      {docs.length === 0 ? (
        <p style={{ color: "var(--theme-elevation-500)", margin: 0 }}>
          No submissions yet.
        </p>
      ) : (
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {docs.map((doc) => {
            const fields = (doc.submissionData ?? []) as SubmissionField[];
            const name = pickField(fields, NAME_KEYS);
            const email = pickField(fields, EMAIL_KEYS);
            const label = name || email || `Submission #${doc.id}`;

            return (
              <li
                key={doc.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--base)",
                  padding: "calc(var(--base) * 0.4) 0",
                  borderTop: "1px solid var(--theme-elevation-100)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div
                    style={{
                      fontWeight: 600,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </div>
                  {name && email ? (
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--theme-elevation-500)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {email}
                    </div>
                  ) : null}
                </div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--theme-elevation-500)",
                    flexShrink: 0,
                  }}
                >
                  {timeAgo(doc.createdAt)}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
