import { describe, it, expect } from "vitest";
import { buildGmailUrl, buildMailtoUrl, SCHOOL_EMAIL } from "@/lib/mailto";
const m = { name: "Jane Doe", email: "jane@example.com", phone: "", topic: "Admissions" as const, body: "I would like to visit & see the school." };
describe("mail links", () => {
  it("builds a Gmail compose URL addressed to the school", () => {
    const u = new URL(buildGmailUrl(m));
    expect(u.hostname).toBe("mail.google.com");
    expect(u.searchParams.get("to")).toBe(SCHOOL_EMAIL);
    expect(u.searchParams.get("body")).toContain("visit & see");
  });
  it("builds a mailto link with encoded subject", () => {
    const u = buildMailtoUrl(m);
    expect(u.startsWith(`mailto:${SCHOOL_EMAIL}?subject=`)).toBe(true);
    expect(u).toContain(encodeURIComponent("[Admissions]"));
  });
});
