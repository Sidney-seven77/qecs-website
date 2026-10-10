"use client";
import { useState } from "react";
import { TOPICS, contactSchema } from "@/lib/validation";
import { buildGmailUrl, buildMailtoUrl } from "@/lib/mailto";

type Status = { kind: "idle" | "error" | "ready"; msg?: string; mailto?: string };
export default function ContactForm({ defaultTopic = "General enquiry" }: { defaultTopic?: string }) {
  const [s, setS] = useState<Status>({ kind: "idle" });
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(e.currentTarget).entries()));
    if (!parsed.success) return setS({ kind: "error", msg: parsed.error.issues[0]?.message ?? "Check the form and try again." });
    window.open(buildGmailUrl(parsed.data), "_blank", "noopener");
    setS({ kind: "ready", mailto: buildMailtoUrl(parsed.data), msg: "Gmail opened in a new tab with your message filled in. Press Send there to finish." });
  }
  const f = "mt-1 w-full rounded-md border border-forest/30 bg-white px-4 py-3 focus:border-forest";
  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <label className="block font-semibold">Full name<input name="name" required autoComplete="name" className={f} /></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block font-semibold">Email<input name="email" type="email" required autoComplete="email" className={f} /></label>
        <label className="block font-semibold">Phone (optional)<input name="phone" type="tel" autoComplete="tel" className={f} /></label>
      </div>
      <label className="block font-semibold">Topic<select name="topic" defaultValue={defaultTopic} className={f}>{TOPICS.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="block font-semibold">Message<textarea name="body" required rows={6} className={f} /></label>
      <button className="btn btn-primary w-full sm:w-auto">Send</button>
      <div role="status" aria-live="polite" className="space-y-1">
        {s.msg && <p className={s.kind === "error" ? "text-red-700" : "font-semibold text-moss"}>{s.msg}</p>}
        {s.mailto && <p className="text-ink/75">Gmail did not open? <a className="underline underline-offset-4" href={s.mailto}>Use your email app instead</a>.</p>}
      </div>
    </form>
  );
}

