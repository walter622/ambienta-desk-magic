import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, nav } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">
            {brand.name}
          </span>
          <span className="hidden text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground sm:inline">
            {brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:bg-foreground/90 sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
