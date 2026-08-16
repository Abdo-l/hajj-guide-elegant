import { createFileRoute } from "@tanstack/react-router";
import CarRental from "@/components/CarRental";
import PaymentNote from "@/components/PaymentNote";

export const Route = createFileRoute("/location-voiture")({
  head: () => ({
    meta: [
      { title: "Location de voiture au Maroc — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Réservez votre location de voiture au Maroc avec Niyyah Voyages : dates, ville de prise en charge, assurance incluse et confirmation rapide par WhatsApp.",
      },
      { property: "og:title", content: "Location de voiture au Maroc — Niyyah Voyages" },
      {
        property: "og:description",
        content:
          "Voitures récentes livrées dans les aéroports du Maroc, assurance incluse et demande en quelques minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CarRentalPage,
});

function CarRentalPage() {
  return (
    <>
      <CarRental />
      <div className="container mx-auto px-4 pb-20">
        <PaymentNote className="mx-auto max-w-3xl" />
      </div>
    </>
  );
}
