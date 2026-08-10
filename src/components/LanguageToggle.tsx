import { Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LanguageToggle = ({ className }: { className?: string }) => {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-border bg-card px-2 py-1",
        className,
      )}
    >
      <Globe size={14} className="text-muted-foreground" />
      {(["fr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "rounded-full px-2 py-0.5 text-xs font-semibold uppercase transition-colors",
            lang === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
