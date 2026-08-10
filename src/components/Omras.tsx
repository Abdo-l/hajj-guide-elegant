import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, BedDouble, Check, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

type Omra = {
  title: { fr: string; en: string };
  dates: { fr: string; en: string };
  price: string;
  status: "available" | "full";
};

const omras: Omra[] = [
  {
    title: { fr: "Août 2026", en: "August 2026" },
    dates: { fr: "Du 9 au 19 août 2026", en: "Aug 9 – 19, 2026" },
    price: "3 870 $",
    status: "full",
  },
  {
    title: { fr: "Septembre — Combinée Istanbul", en: "September — Istanbul combo" },
    dates: { fr: "Du 25 sep au 7 oct 2026", en: "Sep 25 – Oct 7, 2026" },
    price: "3 590 $",
    status: "full",
  },
  {
    title: { fr: "Octobre Directe 1", en: "October Direct 1" },
    dates: { fr: "Du 4 au 14 octobre 2026", en: "Oct 4 – 14, 2026" },
    price: "2 980 $",
    status: "full",
  },
  {
    title: { fr: "Octobre Directe 2", en: "October Direct 2" },
    dates: { fr: "Du 11 au 21 octobre 2026", en: "Oct 11 – 21, 2026" },
    price: "3 190 $",
    status: "available",
  },
  {
    title: { fr: "Novembre Directe 1", en: "November Direct 1" },
    dates: { fr: "Du 1 au 11 novembre 2026", en: "Nov 1 – 11, 2026" },
    price: "3 150 $",
    status: "available",
  },
  {
    title: { fr: "Novembre Directe 2", en: "November Direct 2" },
    dates: { fr: "Du 13 au 22 novembre 2026", en: "Nov 13 – 22, 2026" },
    price: "3 120 $",
    status: "available",
  },
  {
    title: { fr: "Novembre — Combinée Istanbul", en: "November — Istanbul combo" },
    dates: { fr: "Du 27 nov au 9 déc 2026", en: "Nov 27 – Dec 9, 2026" },
    price: "3 690 $",
    status: "available",
  },
  {
    title: { fr: "Novembre Directe 3", en: "November Direct 3" },
    dates: { fr: "Du 29 nov au 9 déc 2026", en: "Nov 29 – Dec 9, 2026" },
    price: "3 190 $",
    status: "available",
  },
  {
    title: { fr: "Décembre — Istanbul / Dubaï", en: "December — Istanbul / Dubai" },
    dates: { fr: "Du 13 au 27 décembre 2026", en: "Dec 13 – 27, 2026" },
    price: "4 980 $",
    status: "available",
  },
  {
    title: { fr: "Décembre — Combinée Istanbul", en: "December — Istanbul combo" },
    dates: { fr: "Du 23 déc 2026 au 3 jan 2027", en: "Dec 23, 2026 – Jan 3, 2027" },
    price: "4 890 $",
    status: "available",
  },
  {
    title: { fr: "Décembre Directe", en: "December Direct" },
    dates: { fr: "Du 28 déc 2026 au 6 jan 2027", en: "Dec 28, 2026 – Jan 6, 2027" },
    price: "4 980 $",
    status: "available",
  },
];

const Omras = () => {
  const { lang, t } = useLang();

  const included = [
    t("Billet d'avion", "Flight ticket"),
    t("TGV entre Médine et Makkah (optionnel)", "High-speed train Medina–Makkah (optional)"),
    t("Petit-déjeuner avec buffet", "Buffet breakfast"),
    t("Transferts dans des bus climatisés", "Transfers in air-conditioned buses"),
    t(
      "Visite guidée des sites religieux à Médine et Makkah",
      "Guided visits of religious sites in Medina and Makkah",
    ),
    t("Frais de visa Arabie Saoudite", "Saudi Arabia visa fees"),
    t("Accompagnateur de groupe", "Group guide"),
  ];

  const excluded = [
    t("Déjeuner et dîner", "Lunch and dinner"),
    t("Dépenses personnelles et pourboires", "Personal expenses and tips"),
    t("Assurance voyage", "Travel insurance"),
  ];

  return (
    <section id="omras" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("Nos forfaits Omra 2026 / 2027", "Our Umrah packages 2026 / 2027")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Départs de Montréal, hébergement à proximité des lieux saints et accompagnement bilingue du début à la fin.",
              "Departures from Montreal, accommodation close to the holy sites and bilingual guidance from start to finish.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {omras.map((omra, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-primary leading-snug">
                    {omra.title[lang]}
                  </h3>
                  <span
                    className={
                      omra.status === "full"
                        ? "shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground"
                        : "shrink-0 rounded-full bg-gradient-spiritual px-3 py-1 text-xs font-semibold text-deep-brown"
                    }
                  >
                    {omra.status === "full"
                      ? t("Complet", "Sold out")
                      : t("Disponible", "Available")}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <Calendar size={16} className="text-gold" />
                    {omra.dates[lang]}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={16} className="text-gold" />
                    {t("Montréal → Madina", "Montreal → Madinah")}
                  </li>
                  <li className="flex items-center gap-2">
                    <BedDouble size={16} className="text-gold" />
                    {t("Chambre quadruple", "Quadruple room")}
                  </li>
                </ul>

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {t("Prix par personne", "Price per person")}
                    </p>
                    <p className="text-2xl font-bold text-primary">{omra.price}</p>
                  </div>
                  <Button
                    variant={omra.status === "full" ? "outline" : "spiritual"}
                    asChild
                  >
                    <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                      {omra.status === "full"
                        ? t("Liste d'attente", "Waiting list")
                        : t("Explorer", "Explore")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t("Inclus", "Included")}
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Check size={20} className="text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t("Non inclus", "Not included")}
              </h3>
              <ul className="space-y-3">
                {excluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <X size={20} className="text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Omras;
