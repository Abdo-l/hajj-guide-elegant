import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";

const WhatsAppButton = () => {
  const { t } = useLang();

  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("Nous écrire sur WhatsApp", "Message us on WhatsApp")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-primary-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle size={22} />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
