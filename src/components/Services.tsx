import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, FileText, Bus, Hotel, Users, Shield, Ticket, Camera } from "lucide-react";
import mosqueImage from "@/assets/mosque-services.jpg";
import { useLang } from "@/lib/i18n";

const Services = () => {
  const { t } = useLang();

  const services = [
    {
      icon: <Plane className="text-gold" size={32} />,
      title: t("Forfaits Hajj", "Hajj packages"),
      description: t(
        "Organisez votre pèlerinage du Hajj avec nos forfaits complets incluant vol, hébergement et accompagnement spirituel.",
        "Organize your Hajj pilgrimage with complete packages including flights, accommodation and spiritual guidance.",
      ),
    },
    {
      icon: <Hotel className="text-gold" size={32} />,
      title: t("Forfaits Omra", "Umrah packages"),
      description: t(
        "Découvrez nos offres Omra sur mesure avec différents niveaux de confort pour votre petit pèlerinage.",
        "Discover our tailor-made Umrah offers with different comfort levels for your lesser pilgrimage.",
      ),
    },
    {
      icon: <FileText className="text-gold" size={32} />,
      title: t("Assistance visa", "Visa assistance"),
      description: t(
        "Nous vous accompagnons dans toutes les démarches administratives pour l'obtention de votre visa.",
        "We guide you through every administrative step to obtain your visa.",
      ),
    },
    {
      icon: <Ticket className="text-gold" size={32} />,
      title: t("Billetterie", "Flight tickets"),
      description: t(
        "Réservation de billets d'avion vers toutes les destinations aux meilleurs tarifs disponibles.",
        "Flight bookings to every destination at the best available fares.",
      ),
    },
    {
      icon: <Bus className="text-gold" size={32} />,
      title: t("Transport", "Transport"),
      description: t(
        "Transport terrestre organisé entre les lieux saints avec des véhicules climatisés et confortables.",
        "Organized ground transport between the holy sites in comfortable air-conditioned vehicles.",
      ),
    },
    {
      icon: <Users className="text-gold" size={32} />,
      title: t("Accompagnement spirituel", "Spiritual guidance"),
      description: t(
        "Guides religieux expérimentés pour vous accompagner dans votre démarche spirituelle.",
        "Experienced religious guides to support you throughout your spiritual journey.",
      ),
    },
    {
      icon: <Shield className="text-gold" size={32} />,
      title: t("Assurance voyage", "Travel insurance"),
      description: t(
        "Couverture complète : annulation, rapatriement et bagages, adaptée au pèlerinage.",
        "Complete coverage: cancellation, repatriation and baggage, tailored to pilgrimage.",
      ),
    },
    {
      icon: <Camera className="text-gold" size={32} />,
      title: t("Médiathèque & souvenirs", "Media library & memories"),
      description: t(
        "Photos et vidéos professionnelles de chaque groupe pour garder un souvenir de votre voyage.",
        "Professional photos and videos of every group so you keep a memory of your journey.",
      ),
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,248,240,0.95), rgba(255,248,240,0.95)), url('${mosqueImage}')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("Nos Services", "Our Services")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Une gamme complète de services pour faire de votre pèlerinage une expérience inoubliable et sereine",
              "A complete range of services to make your pilgrimage an unforgettable and serene experience",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
