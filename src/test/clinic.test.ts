import { describe, expect, it } from "vitest";
import { clinic, enquiryLink } from "@/lib/clinic";

describe("Clinic contact requirements", () => {
  it("uses the requested Delhi address", () => {
    expect(clinic.address).toBe("26/107, 3rd Floor, West Patel Nagar, Delhi");
    expect(new URL(clinic.directions).searchParams.get("query")).toBe(clinic.address);
  });
  it("uses the requested Indian phone number for contact actions", () => {
    expect(clinic.phone).toBe("+91-7015103488");
    expect(clinic.telephone).toBe("tel:+917015103488");
    expect(new URL(enquiryLink("Sarthak", "General medicine", "2026-11-02", "Consultation")).pathname).toBe("/917015103488");
  });
});