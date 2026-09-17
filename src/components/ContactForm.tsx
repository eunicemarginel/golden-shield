"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircleIcon } from "@/components/icons";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-shadow focus:border-gold focus:ring-4 focus:ring-gold/15";

export function ContactForm({ formId }: { formId: number }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Captured before the first await: React nulls out event.currentTarget
    // once the synchronous part of the handler finishes, so referencing
    // event.currentTarget after an await throws instead of resetting the
    // form - which was silently flipping a successful submission to an
    // error state.
    const form = event.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
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
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col items-center gap-3 py-10 text-center"
        >
          <span className="text-gold">
            <CheckCircleIcon className="h-12 w-12" />
          </span>
          <p className="text-lg font-semibold text-foreground">
            Thanks for reaching out!
          </p>
          <p className="text-sm text-foreground-muted">
            We&apos;ll get back to you within 1 business day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-foreground">
              Name
              <input type="text" name="name" required className={fieldClassName} />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Company
              <input type="text" name="company" className={fieldClassName} />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-foreground">
              Email
              <input type="email" name="email" required className={fieldClassName} />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Phone
              <input type="tel" name="phone" className={fieldClassName} />
            </label>
          </div>
          <label className="block text-sm font-medium text-foreground">
            How can we help?
            <textarea name="message" rows={5} required className={fieldClassName} />
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
            className="w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_24px_2px_rgba(214,185,94,0.35)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Send Enquiry"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
