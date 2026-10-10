import type { ContactInput } from "./validation";
export const SCHOOL_EMAIL = "mugwanjask7@gmail.com";
export function composeBody(m: ContactInput) {
  return `${m.body}\n\n---\nName: ${m.name}\nEmail: ${m.email}\nPhone: ${m.phone || "-"}`;
}
export const composeSubject = (m: ContactInput) => `[${m.topic}] Message from ${m.name}`;
export function buildGmailUrl(m: ContactInput) {
  const q = new URLSearchParams({ view: "cm", fs: "1", to: SCHOOL_EMAIL, su: composeSubject(m), body: composeBody(m) });
  return `https://mail.google.com/mail/?${q.toString()}`;
}
export function buildMailtoUrl(m: ContactInput) {
  return `mailto:${SCHOOL_EMAIL}?subject=${encodeURIComponent(composeSubject(m))}&body=${encodeURIComponent(composeBody(m))}`;
}
