import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users2, Clock } from "lucide-react";
import aboutImage from "@/assets/about-background.jpg";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

const About = () => {
  const { t } = useLang();

  const stats = [
    { icon: <Users2 className="text-gold" size={32} />, number: "5000+", label: t("Pèlerins accompagnés", "Pilgrims guided") },
    { icon: <Clock className="text-gold" size={32} />, number: "15+", label: t("Années d'expérience", "Years of experience") },
    { icon: <Award className="text-gold" size={32} />, number: "98%", label: t("Satisfaction client", "Client satisfaction") },
    { icon: <Heart className="text-gold" size={32} />, number: "100%", label: t("Dévouement", "Dedication") },
  ];

  const points = [
    t("Agence agréée et certifiée (OPC, IATA)", "Licensed and certified agency (OPC, IATA)"),
    t("Équipe bilingue français / anglais", "Bilingual French / English team"),
    t("Accompagnement spirituel personnalisé", "Personalized spiritual guidance"),
    t("Support 24h/24 pendant le voyage", "24/7 support during the trip"),
  ];

  return (
    <section
      id="about"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('${aboutImage}')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t(`À propos de ${site.name}`, `About ${site.name}`)}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t(
                "Depuis plusieurs années, Niyyah Voyages accompagne les musulmans du Canada dans leur voyage spirituel vers les lieux saints de l'Islam. Expertise Hajj et Omra, service personnalisé et attention aux détails font notre réputation.",
                "For several years, Niyyah Voyages has been guiding Canadian Muslims on their spiritual journey to the holy sites of Islam. Hajj and Umrah expertise, personalized service and attention to detail built our reputation.",
              )}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t(
                "Nous comprenons l'importance spirituelle de ce voyage unique dans une vie. C'est pourquoi nous mettons tout en œuvre pour que votre expérience soit sereine et conforme à vos attentes, avec un service adapté à la communauté québécoise.",
                "We understand the spiritual importance of this once-in-a-lifetime journey. That is why we do everything to make your experience serene and true to your expectations, with service tailored to the Quebec community.",
              )}
            </p>

            <div className="space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-gradient-spiritual border-0 shadow-card hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-deep-brown mb-2">{stat.number}</div>
                  <div className="text-sm text-deep-brown/80 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
