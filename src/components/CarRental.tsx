import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Car, Facebook, Fuel, MapPin, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  city: string;
  pickup: string;
  dropoff: string;
};

const emptyForm: FormState = { name: "", phone: "", city: "", pickup: "", dropoff: "" };

const CarRental = () => {
  const { t } = useLang();
  const [form, setForm] = useState<FormState>(emptyForm);

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, t("Veuillez indiquer votre nom complet.", "Please enter your full name."))
      .max(100),
    phone: z
      .string()
      .trim()
      .min(8, t("Veuillez indiquer un téléphone valide.", "Please enter a valid phone number."))
      .max(30),
    city: z.string().trim().max(100),
    pickup: z
      .string()
      .trim()
      .min(1, t("Veuillez indiquer la date de prise en charge.", "Please enter the pick-up date.")),
    dropoff: z.string().trim().max(30),
  });

  const update = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? t("Formulaire invalide.", "Invalid form."));
      return;
    }
    const data = result.data;
    const message = [
      `${t("Demande de location de voiture au Maroc", "Car rental request in Morocco")} — ${site.name}`,
      `${t("Nom", "Name")}: ${data.name}`,
      `${t("Téléphone", "Phone")}: ${data.phone}`,
      `${t("Ville", "City")}: ${data.city || "-"}`,
      `${t("Date de prise en charge", "Pick-up date")}: ${data.pickup}`,
      `${t("Date de retour", "Return date")}: ${data.dropoff || "-"}`,
    ].join("\n");

    window.open(`${site.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank");
    toast.success(
      t(
        "Votre demande de location est prête à être envoyée sur WhatsApp.",
        "Your rental request is ready to send on WhatsApp.",
      ),
    );
    setForm(emptyForm);
  };

  const perks = [
    {
      icon: Car,
      title: t("Véhicules récents", "Recent vehicles"),
      text: t(
        "Citadines, berlines, SUV et minibus selon vos besoins.",
        "City cars, sedans, SUVs and minibuses to suit your needs.",
      ),
    },
    {
      icon: MapPin,
      title: t("Livraison partout au Maroc", "Delivery across Morocco"),
      text: t(
        "Aéroports Casablanca, Marrakech, Rabat, Agadir, Fès et Tanger.",
        "Casablanca, Marrakech, Rabat, Agadir, Fez and Tangier airports.",
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Assurance incluse", "Insurance included"),
      text: t(
        "Assurance tous risques et assistance routière 24/7.",
        "All-risk insurance and 24/7 roadside assistance.",
      ),
    },
    {
      icon: Fuel,
      title: t("Kilométrage illimité", "Unlimited mileage"),
      text: t(
        "Tarifs clairs, sans frais cachés, à la journée ou au mois.",
        "Clear rates with no hidden fees, daily or monthly.",
      ),
    },
  ];

  return (
    <section id="location-voiture" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-14 animate-slide-up text-center">
          <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
            {t("Location de voiture au Maroc", "Car rental in Morocco")}
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
            {t(
              "Réservez votre voiture avant votre arrivée au Maroc : indiquez vos dates et nous vous confirmons la disponibilité et le tarif.",
              "Book your car before you land in Morocco: send us your dates and we confirm availability and pricing.",
            )}
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <Card key={perk.title} className="h-full border-0 shadow-soft">
              <CardContent className="p-6">
                <perk.icon size={28} className="mb-4 text-gold" />
                <h3 className="mb-2 font-semibold text-primary">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mx-auto max-w-3xl animate-scale-in border-0 shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">
              {t("Demande de location", "Rental request")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="c-name">
                    {t("Nom et prénom *", "Full name *")}
                  </label>
                  <Input
                    id="c-name"
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => update("name")(e.target.value)}
                    placeholder={t("Votre nom complet", "Your full name")}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="c-phone">
                    {t("Téléphone *", "Phone *")}
                  </label>
                  <Input
                    id="c-phone"
                    value={form.phone}
                    maxLength={30}
                    onChange={(e) => update("phone")(e.target.value)}
                    placeholder={t("Votre numéro de téléphone", "Your phone number")}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="c-city">
                  {t("Ville de prise en charge", "Pick-up city")}
                </label>
                <Input
                  id="c-city"
                  value={form.city}
                  maxLength={100}
                  onChange={(e) => update("city")(e.target.value)}
                  placeholder={t("Ex. Casablanca, Marrakech, Agadir", "e.g. Casablanca, Marrakech, Agadir")}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="c-pickup">
                    {t("Date de prise en charge *", "Pick-up date *")}
                  </label>
                  <Input
                    id="c-pickup"
                    type="date"
                    value={form.pickup}
                    onChange={(e) => update("pickup")(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="c-dropoff">
                    {t("Date de retour", "Return date")}
                  </label>
                  <Input
                    id="c-dropoff"
                    type="date"
                    value={form.dropoff}
                    onChange={(e) => update("dropoff")(e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" variant="spiritual" className="w-full py-6 text-lg">
                {t("Envoyer ma demande", "Send my request")}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                {t(
                  "Votre demande nous parvient instantanément sur WhatsApp.",
                  "Your request reaches us instantly on WhatsApp.",
                )}
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook size={18} />
              {t("Rejoindre notre groupe Facebook", "Join our Facebook group")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarRental;
