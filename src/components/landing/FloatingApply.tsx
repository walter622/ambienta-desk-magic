import { Briefcase } from "lucide-react";

export function FloatingApply() {
  return (
    <a
      href="https://lp.ambientamobiliario.com.br/trabalhe-conosco"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-ink-foreground shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)] ring-1 ring-ink-foreground/15 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <Briefcase className="h-4 w-4 text-primary" />
      Trabalhe Conosco
    </a>
  );
}
