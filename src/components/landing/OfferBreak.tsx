import { Check } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const itens = [
  "Sem poluição visual ou cabos soltos",
  "Sem atraso no cronograma de inauguração",
  "Com 5 anos de garantia de fábrica",
];

export function OfferBreak() {
  return (
    <section className="px-5 pb-4 sm:px-8">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-14 text-ink-foreground sm:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <h2 className="font-display text-2xl leading-snug sm:text-3xl">
            Uma solução de layout de alta performance com o melhor
            custo-benefício e durabilidade por estação do mercado.
          </h2>
          <div>
            <ul className="space-y-3">
              {itens.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-ink-foreground/85">{i}</span>
                </li>
              ))}
            </ul>
            <CtaButton className="mt-8" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
