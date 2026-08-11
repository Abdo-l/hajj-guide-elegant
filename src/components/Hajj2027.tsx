import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileCheck, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

const Hajj2027 = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", people: "1", stay: "" });

  const steps = [
    {
      title: t("Étape 1 — Préparez vos documents", "Step 1 — Prepare your documents"),
      text: t(
        "Passeport valide au minimum 6 mois après la date de départ (max 400 x 800 px) et photo d'identité nette sur fond blanc (max 200 x 200 px).",
        "Passport valid at least 6 months after departure (max 400 x 800 px) and a sharp ID photo on a white background (max 200 x 200 px).",
      ),
    },
    {
      title: t("Étape 2 — Importation & vérification", "Step 2 — Upload & verification"),
      text: t(
        "Nusuk pré-remplit vos informations dès l'importation du passeport. Relisez chaque champ et corrigez toute erreur avant de soumettre.",
        "Nusuk pre-fills your details as soon as the passport is uploaded. Review every field and fix any error before submitting.",
      ),
    },
    {
      title: t("Étape 3 — Informations complémentaires", "Step 3 — Additional information"),
      text: t(
        "Ambassade : Montréal. Durée et numéro de vol approximatifs sont acceptés puisque les forfaits ne sont pas encore publiés.",
        "Embassy: Montreal. Approximate duration and flight number are accepted since packages are not published yet.",
      ),
    },
    {
      title: t("Étape 4 — Questionnaire santé & sécurité", "Step 4 — Health & security questionnaire"),
      text: t(
        "Répondez « non » aux questions de formalité, sauf pour le vaccin obligatoire (méningite) et un éventuel handicap à préciser.",
        "Answer “no” to formality questions, except the mandatory meningitis vaccine and any disability you should describe.",
      ),
    },
    {
      title: t("Étape 5 — Liez votre famille", "Step 5 — Link your family"),
      text: t(
        "Ajoutez conjoint, enfants et parents sur le même compte principal pour un achat groupé dans le même forfait.",
        "Add spouse, children and parents to the same main account so you can buy as a group in the same package.",
      ),
    },
    {
      title: t("Étape 6 — Validation et suivi", "Step 6 — Validation and follow-up"),
      text: t(
        "Surveillez vos courriels : en cas de rejet (photo floue, mauvais format), corrigez le point précis et soumettez à nouveau.",
        "Watch your emails: if rejected (blurry photo, wrong format), fix the exact issue and submit again.",
      ),
    },
  ];

  const advantages = [
    { icon: <FileCheck className="text-gold" size={24} />, label: t("Accompagnement complet de votre dossier Nusuk", "Full support for your Nusuk application") },
    { icon: <Users className="text-gold" size={24} />, label: t("Équipe bilingue et imams accompagnateurs", "Bilingual team and accompanying imams") },
    { icon: <ShieldCheck className="text-gold" size={24} />, label: t("Aucun frais d'accompagnement, aucun engagement", "No guidance fees, no commitment") },
    { icon: <MessageCircle className="text-gold" size={24} />, label: t("Suivi par téléphone, courriel et WhatsApp", "Follow-up by phone, email and WhatsApp") },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const schema = z.object({
      name: z.string().trim().min(2, t("Nom requis.", "Name required.")).max(100),
      email: z.string().trim().email(t("Courriel invalide.", "Invalid email.")).max(255),
      phone: z.string().trim().min(8, t("Téléphone invalide.", "Invalid phone.")).max(30),
      people: z.string().trim().max(3),
      stay: z.string().trim().max(30),
    });
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? t("Formulaire invalide.", "Invalid form."));
      return;
    }
    const d = result.data;
    const message = [
      `${t("Inscription Hajj 2027", "Hajj 2027 registration")} — ${site.name}`,
      `${t("Nom", "Name")}: ${d.name}`,
      `${t("Courriel", "Email")}: ${d.email}`,
      `${t("Téléphone", "Phone")}: ${d.phone}`,
      `${t("Personnes", "People")}: ${d.people}`,
      `${t("Durée de séjour", "Length of stay")}: ${d.stay || "-"}`,
    ].join("\n");
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank");
    toast.success(t("Votre demande d'inscription est prête.", "Your registration request is ready."));
    setForm({ name: "", email: "", phone: "", people: "1", stay: "" });
  };

  return (
    <section id="hajj" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-slide-up">
          <span className="inline-block rounded-full bg-gradient-spiritual px-4 py-1 text-sm font-semibold text-deep-brown mb-4">
            {t("Grand pèlerinage", "Great pilgrimage")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("Inscription au Hajj 2027", "Hajj 2027 registration")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "Deux phases : votre pré-inscription auprès de Niyyah Voyages, puis votre dossier sur la plateforme officielle Nusuk Hajj.",
              "Two phases: your pre-registration with Niyyah Voyages, then your application on the official Nusuk Hajj platform.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="border-0 shadow-card animate-scale-in">
            <CardHeader>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                {t("Phase 1", "Phase 1")}
              </p>
              <CardTitle className="text-2xl text-primary">
                {t("Complétez votre pré-inscription", "Complete your pre-registration")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="h-name">
                    {t("Nom et prénom *", "Full name *")}
                  </label>
                  <Input
                    id="h-name"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("Votre nom complet", "Your full name")}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="h-email">
                      {t("Courriel *", "Email *")}
                    </label>
                    <Input
                      id="h-email"
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="nom@exemple.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="h-phone">
                      {t("Téléphone *", "Phone *")}
                    </label>
                    <Input
                      id="h-phone"
                      maxLength={30}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 514 000 0000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="h-stay">
                      {t("Durée de séjour", "Length of stay")}
                    </label>
                    <select
                      id="h-stay"
                      value={form.stay}
                      onChange={(e) => setForm({ ...form, stay: e.target.value })}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="">{t("Sélectionnez", "Select")}</option>
                      <option value="courte">{t("Courte", "Short")}</option>
                      <option value="moyenne">{t("Moyenne", "Medium")}</option>
                      <option value="longue">{t("Longue", "Long")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground" htmlFor="h-people">
                      {t("Nombre de personnes", "Number of people")}
                    </label>
                    <Input
                      id="h-people"
                      type="number"
                      min={1}
                      max={99}
                      value={form.people}
                      onChange={(e) => setForm({ ...form, people: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="submit" variant="spiritual" className="w-full text-lg py-6">
                  {t("Envoyer ma pré-inscription", "Send my pre-registration")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slide-up">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-2">
                {t("Phase 2", "Phase 2")}
              </p>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {t("Guide d'inscription sur Nusuk Hajj", "Nusuk Hajj registration guide")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "La plateforme hajj.nusuk.sa, supervisée par le ministère saoudien du Hajj et de la Omra, est le point d'accès unique. Commencez plusieurs mois avant le départ : les places sont limitées.",
                  "The hajj.nusuk.sa platform, supervised by the Saudi Ministry of Hajj and Umrah, is the single entry point. Start several months before departure: places are limited.",
                )}
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card key={step.title} className="border-0 shadow-soft">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-spiritual font-bold text-deep-brown">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4">
                  {t("Pourquoi Niyyah Voyages", "Why Niyyah Voyages")}
                </h4>
                <ul className="space-y-3">
                  {advantages.map((item) => (
                    <li key={item.label} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-0.5">{item.icon}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="spiritual" className="mt-6 w-full" asChild>
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} className="mr-2" />
                    {t("Rejoindre notre WhatsApp Hajj 2027", "Join our Hajj 2027 WhatsApp")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hajj2027;
