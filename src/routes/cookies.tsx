import { createFileRoute, Link } from "@tanstack/react-router";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { clearCookiePreferences } from "@/lib/consent";
import { toast } from "sonner";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Politique de cookies — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Politique de cookies de Niyyah Voyages : témoins nécessaires, mesure d'audience, technologies utilisées et façon de modifier ou retirer votre consentement (Loi 25).",
      },
      { property: "og:title", content: "Politique de cookies — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Quels témoins nous utilisons et comment retirer votre consentement en un clic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const { t } = useLang();

  return (
    <LegalPage
      updated={t("Mise à jour : août 2026", "Updated: August 2026")}
      title={t("Politique de cookies", "Cookie policy")}
      intro={t(
        "Ce site utilise un nombre volontairement minimal de témoins (cookies) et de technologies de stockage local. Aucun témoin non nécessaire n'est activé avant votre consentement explicite, conformément à la Loi 25.",
        "This site uses a deliberately minimal number of cookies and local storage technologies. No non-essential cookie is activated before your explicit consent, in accordance with Law 25.",
      )}
    >
      <LegalSection title={t("1. Témoins strictement nécessaires", "1. Strictly necessary cookies")}>
        <ul>
          <li>{t("niyyah-cookie-consent : conserve votre choix de consentement aux témoins.", "niyyah-cookie-consent: stores your cookie consent choice.")}</li>
          <li>{t("niyyah-lang : conserve votre langue d'affichage (français ou anglais).", "niyyah-lang: stores your display language (French or English).")}</li>
          <li>{t("niyyah-consent-proofs : conserve localement la preuve horodatée de vos consentements de formulaire.", "niyyah-consent-proofs: locally stores timestamped proof of your form consents.")}</li>
        </ul>
        <p>
          {t(
            "Ces éléments sont stockés dans le stockage local de votre navigateur, sur votre appareil, et ne servent à aucun profilage publicitaire.",
            "These items are stored in your browser's local storage, on your device, and are never used for advertising profiling.",
          )}
        </p>
      </LegalSection>

      <LegalSection title={t("2. Mesure d'audience (facultative)", "2. Analytics (optional)")}>
        <p>
          {t(
            "Si vous l'acceptez, nous pouvons mesurer de façon agrégée le nombre de visites et les pages consultées afin d'améliorer le site. Ces mesures ne permettent pas de vous identifier et ne sont jamais activées si vous refusez.",
            "If you accept, we may measure in aggregate the number of visits and pages viewed in order to improve the site. These measurements do not identify you and are never activated if you refuse.",
          )}
        </p>
      </LegalSection>

      <LegalSection title={t("3. Contenus et services tiers", "3. Third-party content and services")}>
        <ul>
          <li>{t("YouTube : les vidéos de la section Souvenirs sont chargées depuis YouTube, qui peut déposer ses propres témoins lors de la lecture.", "YouTube: videos in the Memories section are loaded from YouTube, which may set its own cookies during playback.")}</li>
          <li>{t("WhatsApp (Meta) : utilisé pour l'envoi de vos demandes lorsque vous cliquez sur un bouton d'envoi.", "WhatsApp (Meta): used to send your requests when you click a send button.")}</li>
          <li>{t("Google Maps : ouvert dans un nouvel onglet lorsque vous cliquez sur notre adresse.", "Google Maps: opened in a new tab when you click our address.")}</li>
        </ul>
      </LegalSection>

      <LegalSection title={t("4. Modifier ou retirer votre consentement", "4. Change or withdraw your consent")}>
        <p>
          {t(
            "Vous pouvez rouvrir la bannière de consentement en un clic et modifier vos choix, ou bloquer les témoins directement dans les réglages de votre navigateur.",
            "You can reopen the consent banner in one click and change your choices, or block cookies directly in your browser settings.",
          )}
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            onClick={() => {
              clearCookiePreferences();
              toast.success(
                t("Consentement retiré. La bannière va réapparaître.", "Consent withdrawn. The banner will reappear."),
              );
              window.location.reload();
            }}
          >
            {t("Retirer mon consentement aux témoins", "Withdraw my cookie consent")}
          </Button>
        </div>
        <p>
          {t("Voir aussi notre", "See also our")}{" "}
          <Link to="/confidentialite">{t("politique de confidentialité", "privacy policy")}</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
