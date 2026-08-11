import { CreditCard } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const PaymentBanner = ({ className }: { className?: string }) => {
  const { t } = useLang();
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 bg-gradient-spiritual px-4 py-2 text-center text-sm font-semibold text-deep-brown",
        className,
      )}
    >
      <CreditCard size={16} className="shrink-0" />
      <span>
        {t(
          "Facilités de paiement disponibles — réservez avec un dépôt et payez en versements.",
          "Payment plans available — book with a deposit and pay in installments.",
        )}
      </span>
    </div>
  );
};

const PaymentNote = ({ className }: { className?: string }) => {
  const { t } = useLang();
  return (
    <div
      className={cn(
        "rounded-xl border border-gold/40 bg-card p-5 text-center shadow-soft",
        className,
      )}
    >
      <div className="mb-2 flex items-center justify-center gap-2 text-primary">
        <CreditCard size={18} className="text-gold" />
        <h3 className="text-lg font-semibold">
          {t("Facilités de paiement disponibles", "Payment plans available")}
        </h3>
      </div>
      <p className="text-muted-foreground">
        {t(
          "Réservez votre forfait avec un dépôt et étalez le solde en versements sans stress. Contactez-nous pour établir un plan de paiement adapté à votre budget.",
          "Book your package with a deposit and spread the balance over installments, stress-free. Contact us to set up a payment plan that fits your budget.",
        )}
      </p>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-semibold text-primary underline decoration-gold underline-offset-4"
      >
        {t("Parler à un conseiller", "Talk to an advisor")}
      </a>
    </div>
  );
};

export default PaymentNote;
