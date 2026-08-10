import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Omras from "@/components/Omras";
import Hajj2027 from "@/components/Hajj2027";
import Booking from "@/components/Booking";
import Souvenirs from "@/components/Souvenirs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niyyah Voyage — Hajj 2027 et Omra depuis Montréal" },
      {
        name: "description",
        content:
          "Niyyah Voyage organise votre Hajj 2027 et vos Omras : forfaits tout inclus, inscription Nusuk, billets d'avion, assurance et accompagnement spirituel depuis Montréal.",
      },
      {
        property: "og:title",
        content: "Niyyah Voyage — Votre voyage spirituel vers La Mecque",
      },
      {
        property: "og:description",
        content:
          "Forfaits Hajj 2027 et Omra, inscription Nusuk, billetterie et assurance voyage. Agence bilingue à Montréal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Omras />
        <Hajj2027 />
        <Booking />
        <Souvenirs />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
