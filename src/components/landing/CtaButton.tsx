import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function CtaButton({
  children = brand.ctaPrimary,
  variant = "solid",
  className,
}: {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <a
      href="#contato"
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold tracking-wide transition-all duration-300",
        variant === "solid"
          ? "cta-pulse bg-cta text-cta-foreground hover:-translate-y-0.5 hover:brightness-105"
          : "border border-cta/60 text-cta hover:bg-cta/10",
        className,
      )}
    >
      {children}
    </a>
  );
}
