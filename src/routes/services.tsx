import { createFileRoute } from "@tanstack/react-router";
import { ServicesContent } from "@/components/ClinicContent";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | MediCare Health Clinic" },
      { name: "description", content: "General medicine, pediatrics, cardiology, lab services and more at MediCare Health Clinic." },
      { property: "og:title", content: "Our Services | MediCare Health Clinic" },
      { property: "og:description", content: "General medicine, pediatrics, cardiology, lab services and more at MediCare Health Clinic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesContent,
});
