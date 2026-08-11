import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import Certifications from "@/components/Certifications";
import { navLinks } from "@/components/Header";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.1v12.4a2.59 2.59 0 1 1-1.85-2.48V9.75a5.7 5.7 0 1 0 4.95 5.65V8.99a7.34 7.34 0 0 0 4.3 1.38V7.27a4.25 4.25 0 0 1-3.24-1.45z" />
  </svg>
);

const Footer = () => {
  const { t } = useLang();

  const services = [
    t("Forfaits Hajj 2027", "Hajj 2027 packages"),
    t("Forfaits Omra 2026-2027", "Umrah packages 2026-2027"),
    t("Assistance Nusuk", "Nusuk assistance"),
    t("Assistance visa", "Visa assistance"),
    t("Billets d'avion", "Flight tickets"),
    t("Voyages Sud tout inclus", "All-inclusive South trips"),
    t("Assurance voyage", "Travel insurance"),
  ];

  const socials = [
    { href: site.social.facebook, label: "Facebook", icon: <Facebook size={20} /> },
    { href: site.social.instagram, label: "Instagram", icon: <Instagram size={20} /> },
    { href: site.social.tiktok, label: "TikTok", icon: <TikTokIcon /> },
    { href: site.whatsappHref, label: "WhatsApp", icon: <MessageCircle size={20} /> },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">{site.name}</h3>
            <p className="mb-4 leading-relaxed text-primary-foreground/80">
              {t(
                "Votre partenaire de confiance pour vos voyages spirituels vers les lieux saints de l'Islam, au service de la communauté musulmane du Québec.",
                "Your trusted partner for spiritual journeys to the holy sites of Islam, serving the Muslim community of Quebec.",
              )}
            </p>
            <p className="mb-6 text-sm font-semibold text-gold">
              {t("Facilités de paiement disponibles.", "Payment plans available.")}
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-deep-brown"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t("Nos Services", "Our Services")}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t("Liens rapides", "Quick links")}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {navLinks(t).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">{t("Contact", "Contact")}</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold">
                <Phone size={18} className="shrink-0 text-gold" />
                <span>{site.phone}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex min-w-0 items-center gap-3 transition-colors hover:text-gold"
              >
                <Mail size={18} className="shrink-0 text-gold" />
                <span className="truncate">{site.email}</span>
              </a>
              <a
                href={site.addressMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-gold"
              >
                <MapPin size={18} className="mt-1 shrink-0 text-gold" />
                <div>
                  <p>{site.addressLine1}</p>
                  <p>{site.addressLine2}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Certifications variant="dark" className="mt-12 justify-center lg:justify-start" />

        <div className="mt-10 border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
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
