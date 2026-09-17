"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ formId }: { formId: number }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const submissionData = Array.from(formData.entries())
      .filter(([, value]) => typeof value === "string" && value.trim() !== "")
      .map(([field, value]) => ({ field, value: String(value) }));

    try {
      const res = await fetch("/api/form-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: formId, submissionData }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-surface p-8 text-center">
        <p className="text-lg font-semibold text-foreground">
          Thanks for reaching out!
        </p>
        <p className="mt-2 text-sm text-foreground-muted">
          We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Company
          <input
            type="text"
            name="company"
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Phone
          <input
            type="tel"
            name="phone"
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-foreground">
        How can we help?
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending that — please try again, or email us
          directly at info@golden-shield.com.sg.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
