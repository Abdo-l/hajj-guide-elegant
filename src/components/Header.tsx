import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

const Header = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#accueil", label: t("Accueil", "Home") },
    { href: "#services", label: t("Services", "Services") },
    { href: "#omras", label: t("Omras", "Umrah") },
    { href: "#hajj", label: t("Hajj 2027", "Hajj 2027") },
    { href: "#reservations", label: t("Billetterie", "Tickets") },
    { href: "#souvenirs", label: t("Souvenirs", "Memories") },
    { href: "#about", label: t("À propos", "About") },
    { href: "#contact", label: t("Contact", "Contact") },
  ];

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex flex-wrap justify-between items-center gap-2 py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex flex-wrap items-center gap-4">
            <a href={site.phoneHref} className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="hidden sm:flex items-center gap-1 hover:text-primary transition-colors">
              <Mail size={14} />
              <span>{site.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-1">
              <MapPin size={14} />
              <span>Montréal, Québec</span>
            </span>
            <LanguageToggle />
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <a href="#accueil" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-spiritual rounded-full flex items-center justify-center">
              <span className="text-deep-brown font-bold">🕌</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-primary">{site.name}</h1>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="spiritual" className="hidden lg:flex" asChild>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} className="mr-2" />
                {t("Demander un devis", "Get a quote")}
              </a>
            </Button>
            <button
              type="button"
              className="lg:hidden text-primary"
              aria-label={t("Ouvrir le menu", "Open menu")}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden pb-4 grid gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button variant="spiritual" className="mt-2" asChild>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                {t("Demander un devis", "Get a quote")}
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
