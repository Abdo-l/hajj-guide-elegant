import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Niyyah Voyages, agence Hajj et Omra à Montréal" },
      {
        name: "description",
        content:
          "Niyyah Voyages, agence bilingue accréditée IATA et titulaire d'un permis OPC, accompagne les pèlerins du Québec vers les lieux saints depuis Montréal.",
      },
      { property: "og:title", content: "À propos de Niyyah Voyages" },
      {
        property: "og:description",
        content: "Une équipe bilingue, accréditée IATA et OPC, au service des pèlerins du Québec.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <About />
      <div className="container mx-auto px-4 py-12">
        <Certifications />
      </div>
      <Testimonials />
    </>
  );
}
