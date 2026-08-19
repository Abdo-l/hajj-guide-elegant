import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";
import { recordConsentProof } from "@/lib/consent";

type Options = { form: string };

export function useConsentFields({ form }: Options) {
  const { t, lang } = useLang();
  const [privacy, setPrivacy] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const reset = () => {
    setPrivacy(false);
    setNewsletter(false);
  };

  /** Validates explicit consent (Loi 25) and stores a timestamped proof (CASL). */
  const validate = () => {
    if (!privacy) {
      toast.error(
        t(
          "Veuillez accepter la politique de confidentialité pour continuer.",
          "Please accept the privacy policy to continue.",
        ),
      );
      return null;
    }
    const proof = recordConsentProof({ form, privacy, newsletter, lang });
    return {
      newsletter,
      lines: [
        `${t("Consentement confidentialité", "Privacy consent")}: ${t("oui", "yes")} (${proof.at})`,
        `${t("Infolettre", "Newsletter")}: ${newsletter ? t("oui", "yes") : t("non", "no")}`,
      ],
    };
  };

  const node = (
    <div className="space-y-3 rounded-lg border border-border bg-muted/40 p-4">
      <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-primary"
        />
        <span>
          {t(
            "J'accepte que Niyyah Voyages recueille et utilise les renseignements de ce formulaire uniquement pour traiter ma demande de voyage, conformément à sa ",
            "I agree that Niyyah Voyages collects and uses the information in this form solely to process my travel request, in accordance with its ",
          )}
          <Link to="/confidentialite" className="font-medium text-primary underline">
            {t("politique de confidentialité", "privacy policy")}
          </Link>
          {t(". *", ". *")}
        </span>
      </label>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-primary"
        />
        <span>
          {t(
            "Facultatif : je souhaite recevoir l'infolettre de Niyyah Voyages (nouveaux forfaits Hajj et OMRAH, promotions de billets, départs de groupe), environ 1 à 2 courriels par mois. Je peux me désabonner à tout moment via le lien de désabonnement présent dans chaque courriel.",
            "Optional: I want to receive the Niyyah Voyages newsletter (new Hajj and UMRAH packages, ticket promotions, group departures), about 1 to 2 emails per month. I can unsubscribe at any time using the unsubscribe link in every email.",
          )}
        </span>
      </label>

      <p className="text-xs text-muted-foreground">
        {t(
          "Nous ne collectons que les renseignements nécessaires à votre demande et vous pouvez retirer votre consentement en tout temps en écrivant à ",
          "We only collect the information needed for your request and you may withdraw your consent at any time by writing to ",
        )}
        <a href="mailto:achraf@voyagesmaestro.com" className="underline">
          achraf@voyagesmaestro.com
        </a>
        .
      </p>
    </div>
  );

  return { node, validate, reset, newsletter, privacy };
}
