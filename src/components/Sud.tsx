import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Palmtree, Plane, Sun, Users } from "lucide-react";
import sudResort from "@/assets/sud-resort.jpg";
import sudResort2 from "@/assets/sud-resort-2.jpg";
import PaymentNote from "@/components/PaymentNote";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

const Sud = () => {
  const { t } = useLang();

  const destinations = [
    {
      name: t("Punta Cana, République dominicaine", "Punta Cana, Dominican Republic"),
      price: t("dès 1 195 CAD$", "from CAD$1,195"),
      note: t("7 nuits · hôtel 5★ tout inclus", "7 nights · 5-star all-inclusive"),
    },
    {
      name: t("Cancún & Riviera Maya, Mexique", "Cancún & Riviera Maya, Mexico"),
      price: t("dès 1 290 CAD$", "from CAD$1,290"),
      note: t("7 nuits · vols directs de Montréal", "7 nights · direct flights from Montreal"),
    },
    {
      name: t("Varadero, Cuba", "Varadero, Cuba"),
      price: t("dès 995 CAD$", "from CAD$995"),
      note: t("7 nuits · idéal familles", "7 nights · ideal for families"),
    },
    {
      name: t("Montego Bay, Jamaïque", "Montego Bay, Jamaica"),
      price: t("dès 1 450 CAD$", "from CAD$1,450"),
      note: t("7 nuits · forfait premium", "7 nights · premium package"),
    },
  ];

  const included = [
    t("Vol aller-retour au départ de Montréal", "Round-trip flight from Montreal"),
    t("Hébergement tout inclus (repas et boissons)", "All-inclusive stay (meals and drinks)"),
    t("Transferts aéroport - hôtel", "Airport - hotel transfers"),
    t("Taxes et frais de service", "Taxes and service fees"),
    t("Assistance de notre équipe avant et pendant le séjour", "Support from our team before and during your stay"),
  ];

  const perks = [
    { icon: <Sun className="text-gold" size={28} />, label: t("Départs toute l'année", "Departures all year") },
    { icon: <Users className="text-gold" size={28} />, label: t("Forfaits familles et groupes", "Family and group packages") },
    { icon: <Plane className="text-gold" size={28} />, label: t("Vols directs de Montréal", "Direct flights from Montreal") },
    { icon: <Palmtree className="text-gold" size={28} />, label: t("Options halal sur demande", "Halal options on request") },
  ];

  return (
    <section id="sud" className="bg-warm-beige py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            {t("Voyages Sud tout inclus", "All-inclusive South getaways")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
            {t(
              "Soleil, plage et détente : nos forfaits tout inclus vers le Sud au départ de Montréal, avec facilités de paiement.",
              "Sun, beach and relaxation: our all-inclusive South packages from Montreal, with payment plans available.",
            )}
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={sudResort}
              alt={t("Complexe tout inclus en bord de mer", "Beachfront all-inclusive resort")}
              loading="lazy"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={sudResort2}
              alt={t("Familles au bord de la piscine", "Families by the pool")}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {perks.map((perk) => (
            <Card key={perk.label} className="border-0 bg-card text-center shadow-soft">
              <CardContent className="flex flex-col items-center gap-3 p-5">
                {perk.icon}
                <span className="text-sm font-medium text-foreground">{perk.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <Card key={dest.name} className="border-0 bg-card shadow-card">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{dest.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-deep-brown">{dest.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{dest.note}</p>
                <Button variant="spiritual" className="mt-4 w-full" asChild>
                  <a
                    href={`${site.whatsappHref}?text=${encodeURIComponent(
                      `${t("Bonjour, je souhaite un devis pour", "Hello, I would like a quote for")} ${dest.name}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("Demander les disponibilités", "Check availability")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="border-0 bg-card shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{t("Inclus dans nos forfaits", "Included in our packages")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <PaymentNote className="self-start" />
        </div>
      </div>
    </section>
  );
};

export default Sud;
