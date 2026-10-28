import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/ClinicContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediCare Health Clinic | West Patel Nagar, Delhi" },
      { name: "description", content: "Personalized healthcare with dedicated physicians at 26/107, 3rd Floor, West Patel Nagar, Delhi." },
      { property: "og:title", content: "MediCare Health Clinic | West Patel Nagar, Delhi" },
      { property: "og:description", content: "Personalized healthcare with dedicated physicians at 26/107, 3rd Floor, West Patel Nagar, Delhi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomeContent,
});
