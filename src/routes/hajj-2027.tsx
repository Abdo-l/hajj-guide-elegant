import { createFileRoute } from "@tanstack/react-router";
import Hajj2027 from "@/components/Hajj2027";
import PaymentNote from "@/components/PaymentNote";

export const Route = createFileRoute("/hajj-2027")({
  head: () => ({
    meta: [
      { title: "Hajj 2027 : inscription et assistance Nusuk — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Pré-inscription Hajj 2027 avec Niyyah Voyages et assistance complète sur la plateforme officielle Nusuk Hajj, depuis Montréal.",
      },
      { property: "og:title", content: "Hajj 2027 — Inscription et assistance Nusuk" },
      {
        property: "og:description",
        content: "Les étapes de votre inscription au Hajj 2027 et notre accompagnement Nusuk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HajjPage,
});

function HajjPage() {
  return (
    <>
      <Hajj2027 />
      <div className="container mx-auto px-4 pb-20">
        <PaymentNote className="mx-auto max-w-3xl" />
      </div>
    </>
  );
}
