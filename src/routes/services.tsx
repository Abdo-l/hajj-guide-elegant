import { createFileRoute } from "@tanstack/react-router";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import PaymentNote from "@/components/PaymentNote";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Hajj, Omra, assistance Nusuk, visa, billetterie, transport, assurance voyage et forfaits Sud tout inclus : tous les services de Niyyah Voyages à Montréal.",
      },
      { property: "og:title", content: "Nos services — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Assistance Nusuk, visa, billetterie, transport et assurance pour votre pèlerinage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Services />
      <div className="container mx-auto px-4 pb-20">
        <Certifications className="mb-10" />
        <PaymentNote className="mx-auto max-w-3xl" />
      </div>
    </>
  );
}
