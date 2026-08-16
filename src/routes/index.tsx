import { createFileRoute, Link } from "@tanstack/react-router";

import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import PaymentNote from "@/components/PaymentNote";
import Testimonials from "@/components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niyyah Voyages — Hajj 2027, Omra et Sud depuis Montréal" },
      {
        name: "description",
        content:
          "Niyyah Voyages organise votre Hajj 2027, vos Omras et vos voyages Sud tout inclus : assistance Nusuk, billets d'avion, assurance et facilités de paiement depuis Montréal.",
      },
      { property: "og:title", content: "Niyyah Voyages — Votre voyage spirituel vers La Mecque" },
      {
        property: "og:description",
        content:
          "Forfaits Hajj 2027 et Omra, assistance Nusuk, billetterie, assurance et voyages Sud tout inclus. Agence bilingue à Montréal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  const sections = [
    { to: "/omras", title: t("Forfaits Omra", "Umrah packages"), text: t("Programmes 2026-2027 avec dates et tarifs.", "2026-2027 programs with dates and prices.") },
    { to: "/hajj-2027", title: t("Hajj 2027", "Hajj 2027"), text: t("Pré-inscription et accompagnement Nusuk.", "Pre-registration and Nusuk support.") },
    { to: "/sud", title: t("Sud tout inclus", "All-inclusive South"), text: t("Soleil et plage au départ de Montréal.", "Sun and beach from Montreal.") },
    { to: "/services", title: t("Nos services", "Our services"), text: t("Visa, Nusuk, transport, assurance et plus.", "Visa, Nusuk, transport, insurance and more.") },
    { to: "/billetterie", title: t("Billetterie & assurance", "Tickets & insurance"), text: t("Réservez vos vols et votre couverture.", "Book your flights and coverage.") },
    { to: "/location-voiture", title: t("Location de voiture au Maroc", "Car rental in Morocco"), text: t("Voiture livrée à l'aéroport, assurance incluse.", "Car delivered at the airport, insurance included.") },
    { to: "/souvenirs", title: t("Souvenirs", "Memories"), text: t("Photos et vidéos de nos groupes.", "Photos and videos of our groups.") },
  ];

  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Certifications className="mb-12" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="group">
                <Card className="h-full border-0 shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card">
                  <CardContent className="p-6">
                    <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold text-primary">
                      {s.title}
                      <ArrowRight size={18} className="text-gold transition-transform group-hover:translate-x-1" />
                    </h2>
                    <p className="text-muted-foreground">{s.text}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <PaymentNote className="mx-auto mt-12 max-w-3xl" />
        </div>
      </section>
      <Testimonials />
    </>
  );
}
