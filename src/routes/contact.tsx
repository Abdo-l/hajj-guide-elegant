import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Niyyah Voyages, Montréal" },
      {
        name: "description",
        content:
          "Contactez Niyyah Voyages : 9150 Bd de l'Acadie Ste 203, Montréal. Téléphone, WhatsApp et courriel pour planifier votre Omra, Hajj ou voyage Sud.",
      },
      { property: "og:title", content: "Contact — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Téléphone, WhatsApp, courriel et adresse de notre agence à Montréal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <Contact />;
}
