"use client";

import { useRouter } from "next/navigation";
import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";

/**
 * Renders nothing on a normal page visit. Inside the admin's Live Preview
 * iframe, listens for save events and re-runs the server component so
 * drafts show up without a full page reload.
 */
export function LivePreviewRefresh() {
  const router = useRouter();

  return (
    <RefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={typeof window !== "undefined" ? window.location.origin : ""}
    />
  );
}
