import { createFileRoute } from "@tanstack/react-router";
import { AppointmentContent } from "@/components/ClinicContent";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment | MediCare Health Clinic" },
      { name: "description", content: "Book your appointment at MediCare Health Clinic. Call +91-7015103488." },
      { property: "og:title", content: "Book Appointment | MediCare Health Clinic" },
      { property: "og:description", content: "Book your appointment at MediCare Health Clinic. Call +91-7015103488." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppointmentContent,
});
