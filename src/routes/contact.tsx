import { createFileRoute } from "@tanstack/react-router";
import { ContactContent } from "@/components/ClinicContent";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | MediCare Health Clinic" },
      { name: "description", content: "Visit us at 26/107, 3rd Floor, West Patel Nagar, Delhi or call +91-7015103488." },
      { property: "og:title", content: "Contact Us | MediCare Health Clinic" },
      { property: "og:description", content: "Visit us at 26/107, 3rd Floor, West Patel Nagar, Delhi or call +91-7015103488." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactContent,
});
