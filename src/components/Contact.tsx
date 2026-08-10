import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import contactImage from "@/assets/contact-background.jpg";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const schema = z.object({
      name: z.string().trim().min(2, t("Nom requis.", "Name required.")).max(100),
      phone: z.string().trim().min(8, t("Téléphone invalide.", "Invalid phone.")).max(30),
      email: z.string().trim().email(t("Courriel invalide.", "Invalid email.")).max(255),
      type: z.string().trim().max(30),
      message: z.string().trim().max(1000),
    });
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? t("Formulaire invalide.", "Invalid form."));
      return;
    }
    const d = result.data;
    const body = [
      `${t("Demande de renseignements", "Information request")} — ${site.name}`,
      `${t("Nom", "Name")}: ${d.name}`,
      `${t("Téléphone", "Phone")}: ${d.phone}`,
      `${t("Courriel", "Email")}: ${d.email}`,
      `${t("Type de voyage", "Trip type")}: ${d.type || "-"}`,
      `${t("Message", "Message")}: ${d.message || "-"}`,
    ].join("\n");
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(body)}`, "_blank");
    toast.success(t("Votre demande est prête à être envoyée.", "Your request is ready to send."));
    setForm({ name: "", phone: "", email: "", type: "", message: "" });
  };

  const cards = [
    {
      icon: <Phone className="text-deep-brown" size={24} />,
      title: t("Téléphone", "Phone"),
      lines: [site.phone, t("Du lundi au vendredi, 9h-18h", "Monday to Friday, 9am-6pm")],
      href: site.phoneHref,
    },
    {
      icon: <MessageCircle className="text-deep-brown" size={24} />,
      title: "WhatsApp",
      lines: [site.phone, t("Réponse rapide, 7 jours sur 7", "Fast reply, 7 days a week")],
      href: site.whatsappHref,
    },
    {
      icon: <Mail className="text-deep-brown" size={24} />,
      title: t("Courriel", "Email"),
      lines: [site.email, t("Réponse sous 24h", "Reply within 24h")],
      href: `mailto:${site.email}`,
    },
    {
      icon: <MapPin className="text-deep-brown" size={24} />,
      title: t("Adresse", "Address"),
      lines: [site.addressLine1, site.addressLine2],
      href: site.addressMapUrl,
    },
    {
      icon: <Clock className="text-deep-brown" size={24} />,
      title: t("Horaires", "Opening hours"),
      lines: [
        t("Lundi - Vendredi : 9h00 - 18h00", "Monday - Friday: 9:00 am - 6:00 pm"),
        t("Samedi : 10h00 - 16h00", "Saturday: 10:00 am - 4:00 pm"),
        t("Dimanche : Fermé", "Sunday: Closed"),
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(245,239,230,0.95), rgba(245,239,230,0.95)), url('${contactImage}')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("Contactez-nous", "Contact us")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Prêt à planifier votre voyage spirituel ? Notre équipe est à votre disposition pour vous accompagner",
              "Ready to plan your spiritual journey? Our team is here to guide you",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0 animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">
                {t("Demande de renseignements", "Information request")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="c-name">
                      {t("Nom et prénom *", "Full name *")}
                    </label>
                    <Input
                      id="c-name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t("Votre nom complet", "Your full name")}
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="c-phone">
                      {t("Téléphone *", "Phone *")}
                    </label>
                    <Input
                      id="c-phone"
                      maxLength={30}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t("Votre numéro de téléphone", "Your phone number")}
                      className="border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="c-email">
                    {t("Courriel *", "Email *")}
                  </label>
                  <Input
                    id="c-email"
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="votre.courriel@exemple.com"
                    className="border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="c-type">
                    {t("Type de voyage", "Trip type")}
                  </label>
                  <select
                    id="c-type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">{t("Sélectionnez un type de voyage", "Select a trip type")}</option>
                    <option value="hajj">{t("Hajj 2027", "Hajj 2027")}</option>
                    <option value="omra">{t("Omra", "Umrah")}</option>
                    <option value="billet">{t("Billet d'avion", "Flight ticket")}</option>
                    <option value="assurance">{t("Assurance voyage", "Travel insurance")}</option>
                    <option value="autre">{t("Autre", "Other")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="c-message">
                    {t("Message", "Message")}
                  </label>
                  <Textarea
                    id="c-message"
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t(
                      "Décrivez vos besoins, vos questions ou demandez un devis personnalisé...",
                      "Describe your needs, your questions or ask for a personalized quote...",
                    )}
                    className="border-border min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="spiritual" className="w-full text-lg py-6">
                  {t("Envoyer ma demande", "Send my request")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            {cards.map((card) => (
              <Card key={card.title} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-spiritual p-3 rounded-full">{card.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg mb-2">{card.title}</h3>
                      {card.href ? (
                        <a
                          href={card.href}
                          target={card.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {card.lines[0]}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{card.lines[0]}</p>
                      )}
                      {card.lines.slice(1).map((line) => (
                        <p key={line} className="text-sm text-muted-foreground mt-1">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
