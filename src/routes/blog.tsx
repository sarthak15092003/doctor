import { createFileRoute } from "@tanstack/react-router";
import { BlogContent } from "@/components/ClinicContent";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Health Blog | MediCare Health Clinic" },
      { name: "description", content: "Health tips and news from the doctors at MediCare Health Clinic." },
      { property: "og:title", content: "Health Blog | MediCare Health Clinic" },
      { property: "og:description", content: "Health tips and news from the doctors at MediCare Health Clinic." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogContent,
});
