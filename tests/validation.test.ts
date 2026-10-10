import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/validation";
const ok = { name: "Jane Doe", email: "jane@example.com", phone: "", topic: "Admissions", body: "I would like to visit the school." };
describe("contactSchema", () => {
  it("accepts a valid message", () => expect(contactSchema.safeParse(ok).success).toBe(true));
  it("rejects a bad email", () => expect(contactSchema.safeParse({ ...ok, email: "nope" }).success).toBe(false));
  it("rejects a short message", () => expect(contactSchema.safeParse({ ...ok, body: "hi" }).success).toBe(false));
  it("rejects an unknown topic", () => expect(contactSchema.safeParse({ ...ok, topic: "Spam" }).success).toBe(false));
});
