import { createFileRoute } from "@tanstack/react-router";
import Sud from "@/components/Sud";

export const Route = createFileRoute("/sud")({
  head: () => ({
    meta: [
      { title: "Voyages Sud tout inclus — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Forfaits Sud tout inclus au départ de Montréal : Punta Cana, Cancún, Cuba et Jamaïque. Vols, hôtel, repas et transferts, avec facilités de paiement.",
      },
      { property: "og:title", content: "Voyages Sud tout inclus — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Soleil, plage et détente : nos forfaits tout inclus au départ de Montréal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SudPage,
});

function SudPage() {
  return <Sud />;
}
