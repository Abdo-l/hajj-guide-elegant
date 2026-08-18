import { createFileRoute } from "@tanstack/react-router";
import Omras from "@/components/Omras";
import PaymentNote from "@/components/PaymentNote";

export const Route = createFileRoute("/omras")({
  head: () => ({
    meta: [
      { title: "Forfaits OMRAH 2026-2027 — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Découvrez nos forfaits OMRAH 2026-2027 au départ de Montréal : dates, tarifs, hôtels, vols et accompagnement spirituel. Facilités de paiement disponibles.",
      },
      { property: "og:title", content: "Forfaits OMRAH 2026-2027 — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Dates, tarifs et inclusions de nos programmes OMRAH au départ de Montréal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OmrasPage,
});

function OmrasPage() {
  return (
    <>
      <Omras />
      <div className="container mx-auto px-4 pb-20">
        <PaymentNote className="mx-auto max-w-3xl" />
      </div>
    </>
  );
}
