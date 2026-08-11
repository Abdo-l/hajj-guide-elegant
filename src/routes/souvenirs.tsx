import { createFileRoute } from "@tanstack/react-router";
import Souvenirs from "@/components/Souvenirs";

export const Route = createFileRoute("/souvenirs")({
  head: () => ({
    meta: [
      { title: "Souvenirs : photos et vidéos — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Revivez nos voyages : galerie photos et vidéos de nos groupes Omra et Hajj, de Montréal à Makkah et Médine.",
      },
      { property: "og:title", content: "Souvenirs de nos voyages — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Photos et vidéos de nos groupes de pèlerins.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SouvenirsPage,
});

function SouvenirsPage() {
  return <Souvenirs />;
}
