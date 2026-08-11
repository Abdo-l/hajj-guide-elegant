import logo from "@/assets/logo-niyyah.png";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const Logo = ({ className, compact = false }: { className?: string; compact?: boolean }) => (
  <span className={cn("flex min-w-0 items-center gap-2", className)}>
    <img
      src={logo}
      alt={`${site.name} — نية`}
      width={48}
      height={48}
      className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
    />
    <span className="min-w-0 leading-tight">
      <span className="block truncate text-lg font-bold text-primary sm:text-xl">{site.name}</span>
      {!compact && (
        <span className="block text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
          نية · Hajj &amp; Omra
        </span>
      )}
    </span>
  </span>
);

export default Logo;
