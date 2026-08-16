import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plane, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  destination: string;
  destinationCountry: string;
  destinationCity: string;
  origin: string;
  originCountry: string;
  originCity: string;
  birthDate: string;
  departure: string;
  ret: string;
};

const emptyForm: FormState = {
  name: "",
  phone: "",
  destination: "",
  destinationCountry: "",
  destinationCity: "",
  origin: "",
  originCountry: "",
  originCity: "",
  birthDate: "",
  departure: "",
  ret: "",
};

const Booking = () => {
  const { t } = useLang();
  const [tab, setTab] = useState<"flight" | "insurance">("flight");
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
    destination: z
      .string()
      .trim()
      .max(100)
      .optional(),
    destinationCountry: z
      .string()
      .trim()
      .max(100)
      .optional(),
    destinationCity: z
      .string()
      .trim()
      .max(100)
      .optional(),
    origin: z
      .string()
      .trim()
      .max(100)
      .optional(),
    originCountry: z
      .string()
      .trim()
      .max(100)
      .optional(),
    originCity: z
      .string()
      .trim()
      .max(100)
      .optional(),
    birthDate: z
      .string()
      .trim()
      .max(30)
      .optional(),
    departure: z
      .string()
      .trim()
      .min(1, t("Veuillez indiquer la date de départ.", "Please enter the departure date.")),
    ret: z.string().trim().max(30).optional(),
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
    const subject =
      tab === "flight"
        ? t("Demande de billet d'avion", "Flight ticket request")
        : t("Demande d'assurance voyage", "Travel insurance request");
    const message = [
      `${subject} — ${site.name}`,
      `${t("Nom", "Name")}: ${data.name}`,
      `${t("Téléphone", "Phone")}: ${data.phone}`,
      `${t("Destination", "Destination")}: ${data.destination}`,
      `${t("Départ", "Departure")}: ${data.departure}`,
      `${t("Retour", "Return")}: ${data.ret || "-"}`,
    ].join("\n");

    window.open(`${site.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank");
    toast.success(
      t(
        "Votre demande est prête à être envoyée sur WhatsApp.",
        "Your request is ready to send on WhatsApp.",
      ),
    );
    setForm(emptyForm);
  };

  return (
    <section id="reservations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("Billetterie & assurance voyage", "Flight tickets & travel insurance")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Réservez votre billet d'avion vers n'importe quelle destination ou protégez votre voyage avec une assurance adaptée.",
              "Book your flight ticket to any destination or protect your trip with the right insurance.",
            )}
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-0 shadow-card animate-scale-in">
          <CardHeader className="space-y-6">
            <div className="grid grid-cols-2 gap-2 rounded-lg bg-muted p-1">
              <button
                type="button"
                onClick={() => setTab("flight")}
                aria-pressed={tab === "flight"}
                className={
                  tab === "flight"
                    ? "flex items-center justify-center gap-2 rounded-md bg-card px-4 py-3 text-sm font-semibold text-primary shadow-soft"
                    : "flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                }
              >
                <Plane size={18} />
                {t("Billet d'avion", "Flight ticket")}
              </button>
              <button
                type="button"
                onClick={() => setTab("insurance")}
                aria-pressed={tab === "insurance"}
                className={
                  tab === "insurance"
                    ? "flex items-center justify-center gap-2 rounded-md bg-card px-4 py-3 text-sm font-semibold text-primary shadow-soft"
                    : "flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                }
              >
                <ShieldCheck size={18} />
                {t("Assurance voyage", "Travel insurance")}
              </button>
            </div>
            <CardTitle className="text-2xl text-primary text-center">
              {tab === "flight"
                ? t("Demande de réservation de vol", "Flight booking request")
                : t("Demande de devis d'assurance", "Insurance quote request")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="b-name">
                    {t("Nom et prénom *", "Full name *")}
                  </label>
                  <Input
                    id="b-name"
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => update("name")(e.target.value)}
                    placeholder={t("Votre nom complet", "Your full name")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="b-phone">
                    {t("Téléphone *", "Phone *")}
                  </label>
                  <Input
                    id="b-phone"
                    value={form.phone}
                    maxLength={30}
                    onChange={(e) => update("phone")(e.target.value)}
                    placeholder={t("Votre numéro de téléphone", "Your phone number")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="b-dest">
                  {t("Destination *", "Destination *")}
                </label>
                <Input
                  id="b-dest"
                  value={form.destination}
                  maxLength={100}
                  onChange={(e) => update("destination")(e.target.value)}
                  placeholder={t("Ex. Djeddah, Casablanca, Istanbul", "e.g. Jeddah, Casablanca, Istanbul")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="b-dep">
                    {t("Date de départ *", "Departure date *")}
                  </label>
                  <Input
                    id="b-dep"
                    type="date"
                    value={form.departure}
                    onChange={(e) => update("departure")(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="b-ret">
                    {t("Date de retour", "Return date")}
                  </label>
                  <Input
                    id="b-ret"
                    type="date"
                    value={form.ret}
                    onChange={(e) => update("ret")(e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" variant="spiritual" className="w-full text-lg py-6">
                {tab === "flight"
                  ? t("Demander mon billet", "Request my ticket")
                  : t("Demander mon assurance", "Request my insurance")}
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
      </div>
    </section>
  );
};

export default Booking;
