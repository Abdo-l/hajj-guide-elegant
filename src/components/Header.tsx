import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+1 514 123 4567</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>contact@hajjassist.ca</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>Montréal, Québec</span>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-spiritual rounded-full flex items-center justify-center">
              <span className="text-deep-brown font-bold">🕌</span>
            </div>
            <h1 className="text-2xl font-bold text-primary">Safar Voyage</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors font-medium">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              À propos
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Témoignages
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>
          
          <Button variant="spiritual" className="hidden md:flex">
            Demander un devis
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;