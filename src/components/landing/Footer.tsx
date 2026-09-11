import { MapPin } from "lucide-react";
import { brand, logo, nav } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <img
            src={logo}
            alt={brand.fullName}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-5 flex items-start gap-2 text-sm text-ink-foreground/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {brand.address}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-ink-foreground/15 px-5 pt-6 sm:px-8">
        <p className="text-xs text-ink-foreground/60">{brand.copyright}</p>
      </div>
    </footer>
  );
}
