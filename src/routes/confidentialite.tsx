import { createFileRoute, Link } from "@tanstack/react-router";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Niyyah Voyages" },
      {
        name: "description",
        content:
          "Politique de confidentialité de Niyyah Voyages conforme à la LPRPDE (PIPEDA) et à la Loi 25 du Québec : données collectées, finalités, protection, accès et suppression.",
      },
      { property: "og:title", content: "Politique de confidentialité — Niyyah Voyages" },
      {
        property: "og:description",
        content: "Comment Niyyah Voyages recueille, utilise et protège vos renseignements personnels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useLang();

  return (
    <LegalPage
      updated={t("Mise à jour : août 2026", "Updated: August 2026")}
      title={t("Politique de confidentialité", "Privacy policy")}
      intro={t(
        "Niyyah Voyages s'engage à protéger vos renseignements personnels conformément à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE / PIPEDA) et à la Loi 25 du Québec (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels).",
        "Niyyah Voyages is committed to protecting your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Quebec's Law 25 (Act to modernize legislative provisions as regards the protection of personal information).",
      )}
    >
      <LegalSection title={t("1. Responsable de la protection des renseignements personnels", "1. Privacy officer")}>
        <p>
          {t(
            "Conformément à la Loi 25, la personne responsable de la protection des renseignements personnels chez Niyyah Voyages est :",
            "In accordance with Law 25, the person responsible for the protection of personal information at Niyyah Voyages is:",
          )}
        </p>
        <ul>
          <li>{t("Nom : Achraf Amrani, responsable de la protection des renseignements personnels", "Name: Achraf Amrani, Privacy Officer")}</li>
          <li>{t("Courriel :", "Email:")} <a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li>{t("Téléphone :", "Phone:")} <a href={site.phoneHref}>{site.phone}</a></li>
          <li>{`${site.addressLine1}, ${site.addressLine2}`}</li>
        </ul>
      </LegalSection>

      <LegalSection title={t("2. Renseignements que nous recueillons", "2. Information we collect")}>
        <ul>
          <li>{t("Identité et coordonnées : nom, prénom, téléphone, courriel, ville.", "Identity and contact details: first and last name, phone, email, city.")}</li>
          <li>{t("Renseignements de voyage : dates de départ et de retour, destination, ville d'origine, date de naissance, informations de passeport lorsque requises par les autorités (Nusuk, visa).", "Travel information: departure and return dates, destination, city of origin, date of birth, passport details when required by authorities (Nusuk, visa).")}</li>
          <li>{t("Renseignements liés à une inscription Hajj ou OMRAH : lien familial du mahram, informations de santé de base exigées par les autorités saoudiennes.", "Hajj or UMRAH registration details: mahram family relationship, basic health information required by Saudi authorities.")}</li>
          <li>{t("Renseignements techniques : type d'appareil, navigateur et préférences de langue et de témoins (cookies) enregistrées localement.", "Technical information: device type, browser, language and cookie preferences stored locally.")}</li>
        </ul>
        <p>
          {t(
            "Nous appliquons le principe de minimisation : aucun champ facultatif n'est exigé et nous ne demandons jamais de numéro d'assurance sociale ni de renseignements bancaires par formulaire web.",
            "We apply data minimization: no optional field is mandatory, and we never request a social insurance number or banking details through a web form.",
          )}
        </p>
      </LegalSection>

      <LegalSection title={t("3. Pourquoi nous recueillons ces renseignements", "3. Why we collect this information")}>
        <ul>
          <li>{t("Traiter votre demande de forfait, de billet d'avion, d'assurance ou de location de voiture.", "Process your package, flight, insurance or car rental request.")}</li>
          <li>{t("Effectuer les réservations et inscriptions obligatoires (compagnies aériennes, hôtels, plateforme Nusuk, assureurs).", "Complete required bookings and registrations (airlines, hotels, Nusuk platform, insurers).")}</li>
          <li>{t("Vous transmettre les confirmations, documents de voyage et suivis de dossier.", "Send you confirmations, travel documents and file follow-ups.")}</li>
          <li>{t("Vous envoyer notre infolettre, uniquement si vous y avez consenti explicitement.", "Send you our newsletter, only if you have explicitly consented.")}</li>
          <li>{t("Respecter nos obligations légales et comptables au Québec et au Canada.", "Meet our legal and accounting obligations in Quebec and Canada.")}</li>
        </ul>
      </LegalSection>

      <LegalSection title={t("4. Comment nous utilisons et partageons vos données", "4. How we use and share your data")}>
        <p>
          {t(
            "Vos renseignements ne sont jamais vendus ni loués. Ils sont communiqués uniquement aux partenaires nécessaires à la réalisation de votre voyage : compagnies aériennes, hôtels, agences réceptives, assureurs, autorités saoudiennes (Nusuk) et services de visa. Certains de ces partenaires sont situés à l'extérieur du Québec et du Canada ; vos renseignements peuvent donc être communiqués hors Québec, uniquement pour l'exécution de votre voyage et selon des ententes limitant leur utilisation.",
            "Your information is never sold or rented. It is shared only with the partners required to deliver your trip: airlines, hotels, ground agencies, insurers, Saudi authorities (Nusuk) and visa services. Some of these partners are located outside Quebec and Canada, so your information may be disclosed outside Quebec, solely to deliver your trip and under agreements limiting its use.",
          )}
        </p>
        <p>
          {t(
            "Les formulaires du site n'hébergent aucune base de données : ils préparent un message que vous envoyez vous-même par WhatsApp ou par courriel. Ce message est traité par WhatsApp (Meta) selon ses propres conditions.",
            "The site's forms do not host any database: they prepare a message that you send yourself via WhatsApp or email. That message is handled by WhatsApp (Meta) under its own terms.",
          )}
        </p>
      </LegalSection>

      <LegalSection title={t("5. Comment vos renseignements sont protégés", "5. How your information is protected")}>
        <ul>
          <li>{t("Site diffusé exclusivement en HTTPS (chiffrement en transit).", "Website served exclusively over HTTPS (encryption in transit).")}</li>
          <li>{t("Accès aux dossiers clients limité au personnel autorisé de l'agence, sur la base du besoin de savoir.", "Access to client files limited to authorized agency staff on a need-to-know basis.")}</li>
          <li>{t("Appareils et comptes professionnels protégés par mot de passe et authentification à deux facteurs.", "Business devices and accounts protected by passwords and two-factor authentication.")}</li>
          <li>{t("Conservation limitée : les dossiers sont conservés le temps requis par nos obligations légales et comptables, puis détruits de façon sécuritaire.", "Limited retention: files are kept for as long as required by our legal and accounting obligations, then securely destroyed.")}</li>
        </ul>
      </LegalSection>

      <LegalSection title={t("6. Vos droits : accès, rectification, retrait et suppression", "6. Your rights: access, correction, withdrawal and deletion")}>
        <p>
          {t(
            "Vous pouvez en tout temps demander l'accès à vos renseignements, leur rectification, leur suppression, la portabilité de vos données ou le retrait de votre consentement (y compris à l'infolettre). Écrivez à",
            "You may at any time request access to your information, its correction, its deletion, the portability of your data, or the withdrawal of your consent (including newsletter consent). Write to",
          )}{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
          {t(
            "en indiquant votre nom et votre demande. Nous répondons dans un délai maximal de 30 jours. Si notre réponse ne vous satisfait pas, vous pouvez porter plainte à la Commission d'accès à l'information du Québec ou au Commissariat à la protection de la vie privée du Canada.",
            "with your name and your request. We respond within a maximum of 30 days. If our answer does not satisfy you, you may file a complaint with Quebec's Commission d'accès à l'information or the Office of the Privacy Commissioner of Canada.",
          )}
        </p>
      </LegalSection>

      <LegalSection title={t("7. Incident de confidentialité", "7. Privacy incident")}>
        <p>
          {t(
            "En cas d'incident de confidentialité (perte, vol ou accès non autorisé à des renseignements personnels), nous appliquons la procédure suivante : contenir l'incident, en évaluer le risque de préjudice sérieux, le consigner dans notre registre d'incidents, aviser sans délai les personnes concernées ainsi que la Commission d'accès à l'information lorsque le risque de préjudice sérieux est établi, puis mettre en place des mesures correctives.",
            "In the event of a privacy incident (loss, theft or unauthorized access to personal information), we apply the following procedure: contain the incident, assess the risk of serious injury, log it in our incident register, promptly notify affected individuals and the Commission d'accès à l'information when a risk of serious injury is established, then implement corrective measures.",
          )}
        </p>
      </LegalSection>

      <LegalSection title={t("8. Témoins et technologies utilisées", "8. Cookies and technologies used")}>
        <p>
          {t(
            "Le détail des témoins et technologies employés se trouve dans notre",
            "Details of the cookies and technologies used are available in our",
          )}{" "}
          <Link to="/cookies">{t("politique de cookies", "cookie policy")}</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
