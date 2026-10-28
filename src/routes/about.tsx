import { createFileRoute } from "@tanstack/react-router";
import { AboutContent } from "@/components/ClinicContent";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | MediCare Health Clinic" },
      { name: "description", content: "Meet the team and story behind MediCare Health Clinic in West Patel Nagar, Delhi." },
      { property: "og:title", content: "About Us | MediCare Health Clinic" },
      { property: "og:description", content: "Meet the team and story behind MediCare Health Clinic in West Patel Nagar, Delhi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutContent,
});
