import { MapPin } from "lucide-react";
import { brand, nav } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <p className="font-display text-2xl">{brand.fullName}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {brand.address}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
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
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-5 pt-6 sm:px-8">
        <p className="text-xs text-muted-foreground">{brand.copyright}</p>
      </div>
    </footer>
  );
}
