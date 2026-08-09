import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-kaaba.jpg";

const Hero = () => {
  return (
    <section 
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${heroImage}')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="text-gold fill-current" size={20} />
            <span className="text-gold-light font-medium">Votre voyage spirituel commence ici</span>
            <Star className="text-gold fill-current" size={20} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Facilitez votre pèlerinage
            <span className="block text-gold-light">vers La Mecque</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Nous organisons votre Omra ou Hajj de A à Z avec accompagnement complet et services personnalisés
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="spiritual" className="text-lg px-8 py-6">
              Découvrir nos forfaits
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-deep-brown">
              Contactez-nous
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-gold font-semibold text-lg mb-2">Standard</h3>
              <p className="text-3xl font-bold mb-2">1950 CAD$</p>
              <p className="text-gray-300">Forfait essentiel</p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-gold/30 scale-105">
              <h3 className="text-gold font-semibold text-lg mb-2">Confort</h3>
              <p className="text-3xl font-bold mb-2">3750 CAD$</p>
              <p className="text-gray-300">Forfait recommandé</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-gold font-semibold text-lg mb-2">VIP</h3>
              <p className="text-3xl font-bold mb-2">6000 CAD$</p>
              <p className="text-gray-300">Forfait premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;