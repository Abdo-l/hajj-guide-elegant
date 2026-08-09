import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-deep-brown font-bold">🕌</span>
              </div>
              <h3 className="text-2xl font-bold">Safar Voyage</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Votre partenaire de confiance pour vos voyages spirituels vers les lieux saints de l'Islam depuis plus de 15 ans au service de la communauté musulmane du Québec.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="hover:text-gold transition-colors cursor-pointer">Forfaits Hajj</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Forfaits Omra</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Assistance Visa</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Transport</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Accompagnement spirituel</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Assurance voyage</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#accueil" className="hover:text-gold transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">À propos</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              <li className="hover:text-gold transition-colors cursor-pointer">Conditions générales</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>+1 514 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span>contact@hajjassist.ca</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1" />
                <div>
                  <p>3450 Rue Saint-Denis</p>
                  <p>Montréal, QC H2X 3L1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Safar Voyage. Tous droits réservés. Agence agréée et certifiée.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;