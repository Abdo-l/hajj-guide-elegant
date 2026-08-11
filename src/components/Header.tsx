import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import Logo from "@/components/Logo";
import { PaymentBanner } from "@/components/PaymentNote";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export const navLinks = (t: (fr: string, en: string) => string) => [
  { to: "/", label: t("Accueil", "Home") },
  { to: "/services", label: t("Services", "Services") },
  { to: "/omras", label: t("Omras", "Umrah") },
  { to: "/hajj-2027", label: t("Hajj 2027", "Hajj 2027") },
  { to: "/sud", label: t("Sud tout inclus", "All-inclusive South") },
  { to: "/billetterie", label: t("Billetterie", "Tickets") },
  { to: "/souvenirs", label: t("Souvenirs", "Memories") },
  { to: "/a-propos", label: t("À propos", "About") },
  { to: "/contact", label: t("Contact", "Contact") },
];

const Header = () => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const links = navLinks(t);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 shadow-soft backdrop-blur-sm">
      <PaymentBanner />
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 py-2 text-sm text-muted-foreground">
          <div className="flex min-w-0 flex-wrap items-center gap-4">
            <a href={site.phoneHref} className="flex items-center gap-1 transition-colors hover:text-primary">
              <Phone size={14} className="shrink-0" />
              <span>{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden min-w-0 items-center gap-1 transition-colors hover:text-primary sm:flex"
            >
              <Mail size={14} className="shrink-0" />
              <span className="truncate">{site.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1 md:flex">
              <MapPin size={14} />
              <span>Montréal, Québec</span>
            </span>
            <LanguageToggle />
          </div>
        </div>

        {/* Main navigation */}
        <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
          <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <div className="hidden items-center gap-4 xl:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="justify-self-end text-primary xl:hidden"
            aria-label={t("Ouvrir le menu", "Open menu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {open && (
          <div className="grid gap-1 pb-4 xl:hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-muted text-primary" }}
                className="rounded-md px-3 py-2 font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
