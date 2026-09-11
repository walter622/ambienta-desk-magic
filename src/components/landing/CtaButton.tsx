import { ArrowRight } from "lucide-react";
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
      href={brand.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "solid"
          ? "cta-pulse bg-primary text-primary-foreground hover:-translate-y-0.5 hover:brightness-110"
          : "border border-primary/60 text-primary hover:bg-primary/10",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
