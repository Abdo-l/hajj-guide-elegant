import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const Certifications = ({ className, variant = "light" }: { className?: string; variant?: "light" | "dark" }) => {
  const { t } = useLang();

  const badges = [
    {
      code: "IATA",
      label: t("Agence accréditée IATA", "IATA accredited agency"),
    },
    {
      code: "OPC",
      label: t("Titulaire d'un permis OPC (Québec)", "Licensed by the OPC (Quebec)"),
    },
  ];

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4", className)}>
      {badges.map((badge) => (
        <div
          key={badge.code}
          className={cn(
            "flex items-center gap-3 rounded-xl border px-4 py-3",
            variant === "dark"
              ? "border-primary-foreground/20 bg-primary-foreground/10"
              : "border-border bg-card shadow-soft",
          )}
        >
          <span
            className={cn(
              "grid h-11 w-14 shrink-0 place-items-center rounded-md bg-gradient-spiritual text-sm font-black tracking-wider text-deep-brown",
            )}
          >
            {badge.code}
          </span>
          <span
            className={cn(
              "text-xs font-medium sm:text-sm",
              variant === "dark" ? "text-primary-foreground/80" : "text-muted-foreground",
            )}
          >
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
