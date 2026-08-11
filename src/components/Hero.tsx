import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-kaaba.jpg";
import { useLang } from "@/lib/i18n";

const Hero = () => {
  const { t } = useLang();

  const packages = [
    {
      name: t("Standard", "Standard"),
      price: "2 980 CAD$",
      note: t("Forfait essentiel", "Essential package"),
      featured: false,
    },
    {
      name: t("Confort", "Comfort"),
      price: "3 750 CAD$",
      note: t("Forfait recommandé", "Recommended package"),
      featured: true,
    },
    {
      name: t("VIP", "VIP"),
      price: "6 000 CAD$",
      note: t("Forfait premium", "Premium package"),
      featured: false,
    },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${heroImage}')`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="text-gold fill-current" size={20} />
            <span className="text-gold-light font-medium">
              {t("Votre voyage spirituel commence ici", "Your spiritual journey starts here")}
            </span>
            <Star className="text-gold fill-current" size={20} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t("Facilitez votre pèlerinage", "We make your pilgrimage easy")}
            <span className="block text-gold-light">{t("vers La Mecque", "to Makkah")}</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {t(
              "Niyyah Voyages organise votre Omra ou Hajj de A à Z avec accompagnement complet et services personnalisés.",
              "Niyyah Voyages organizes your Umrah or Hajj from A to Z with complete support and personalized services.",
            )}
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="spiritual" className="text-lg px-8 py-6" asChild>
              <Link to="/omras">
                {t("Découvrir nos forfaits", "Discover our packages")}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-deep-brown"
              asChild
            >
              <Link to="/contact">{t("Contactez-nous", "Contact us")}</Link>
            </Button>
          </div>

          <p className="mb-8 text-base font-semibold text-gold-light">
            {t(
              "Facilités de paiement disponibles — dépôt puis versements.",
              "Payment plans available — deposit then installments.",
            )}
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {packages.map((pack) => (
              <div
                key={pack.name}
                className={
                  pack.featured
                    ? "bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-gold/30 scale-105"
                    : "bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                }
              >
                <h3 className="text-gold font-semibold text-lg mb-2">{pack.name}</h3>
                <p className="text-3xl font-bold mb-2">{pack.price}</p>
                <p className="text-gray-300">{pack.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
