import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safar Voyage — Hajj et Omra depuis Montréal, Québec" },
      {
        name: "description",
        content:
          "Safar Voyage organise votre pèlerinage Hajj et Omra : forfaits tout inclus, assistance visa, transport et accompagnement spirituel depuis Montréal.",
      },
      {
        property: "og:title",
        content: "Safar Voyage — Votre voyage spirituel vers La Mecque",
      },
      {
        property: "og:description",
        content:
          "Forfaits Hajj et Omra complets, accompagnement spirituel et services personnalisés depuis Montréal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
