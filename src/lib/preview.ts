import { headers as getHeaders } from "next/headers";
import type { Payload } from "payload";

/**
 * True when the request carries a valid Payload admin session — used to let
 * signed-in staff preview draft content (e.g. via the admin's Live Preview
 * iframe, which shares cookies since admin and frontend are the same app).
 * Public visitors never see drafts.
 */
export async function isPreviewRequest(payload: Payload) {
  const { user } = await payload.auth({ headers: await getHeaders() });
  return Boolean(user);
}
