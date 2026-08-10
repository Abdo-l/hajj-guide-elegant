import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

const Footer = () => {
  const { t } = useLang();

  const services = [
    t("Forfaits Hajj 2027", "Hajj 2027 packages"),
    t("Forfaits Omra 2026-2027", "Umrah packages 2026-2027"),
    t("Assistance visa", "Visa assistance"),
    t("Billets d'avion", "Flight tickets"),
    t("Assurance voyage", "Travel insurance"),
    t("Accompagnement spirituel", "Spiritual guidance"),
  ];

  const links = [
    { href: "#accueil", label: t("Accueil", "Home") },
    { href: "#services", label: t("Services", "Services") },
    { href: "#omras", label: t("Omras", "Umrah") },
    { href: "#hajj", label: t("Hajj 2027", "Hajj 2027") },
    { href: "#reservations", label: t("Billetterie", "Tickets") },
    { href: "#souvenirs", label: t("Souvenirs", "Memories") },
    { href: "#contact", label: t("Contact", "Contact") },
  ];

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
              <h3 className="text-2xl font-bold">{site.name}</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              {t(
                "Votre partenaire de confiance pour vos voyages spirituels vers les lieux saints de l'Islam, au service de la communauté musulmane du Québec.",
                "Your trusted partner for spiritual journeys to the holy sites of Islam, serving the Muslim community of Quebec.",
              )}
            </p>
            <div className="flex gap-4">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-deep-brown transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-deep-brown transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-deep-brown transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("Nos Services", "Our Services")}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("Liens rapides", "Quick links")}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t("Contact", "Contact")}</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone size={18} className="text-gold" />
                <span>{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail size={18} className="text-gold" />
                <span>{site.email}</span>
              </a>
              <a
                href={site.addressMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold transition-colors"
              >
                <MapPin size={18} className="text-gold mt-1" />
                <div>
                  <p>{site.addressLine1}</p>
                  <p>{site.addressLine2}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} {site.name}.{" "}
            {t("Tous droits réservés. Agence agréée et certifiée.", "All rights reserved. Licensed and certified agency.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
