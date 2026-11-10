import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = { className?: string; inverted?: boolean };

/** Pictogramme « sourire » : un point et un arc. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M2 4.5 L3 5.5" />
      <path d="M30 3 V10 A14 14 0 0 1 16 24 A14 14 0 0 1 6 19.5" />
    </svg>
  );
}

export function Logo({ className, inverted }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} – accueil`}
      className={cn(
        "inline-flex items-center gap-3",
        inverted ? "text-white" : "text-white",
        className,
      )}
    >
      <LogoMark className="h-7 w-8" />
      <span className="text-lg font-bold tracking-tight">pagesvertes</span>
    </Link>
  );
}
