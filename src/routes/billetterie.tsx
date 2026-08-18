import { createFileRoute } from "@tanstack/react-router";
import Booking from "@/components/Booking";
import PaymentNote from "@/components/PaymentNote";

export const Route = createFileRoute("/billetterie")({
  head: () => ({
    meta: [
      { title: "Billetterie & assurance voyages — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Réservez vos billets d'avion et votre assurance voyages avec Niyyah Voyages : demande rapide par WhatsApp, tarifs compétitifs et facilités de paiement.",
      },
      { property: "og:title", content: "Billetterie & assurance voyages — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Demandez vos billets d'avion et votre assurance voyages en quelques minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <>
      <Booking />
      <div className="container mx-auto px-4 pb-20">
        <PaymentNote className="mx-auto max-w-3xl" />
      </div>
    </>
  );
}
