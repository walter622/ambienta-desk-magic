import { Check } from "lucide-react";
import { images } from "@/lib/brand";
import { Reveal } from "./Reveal";

const pontos = [
  "Execução técnica precisa e consultiva",
  "Acompanhamento rigoroso de prazos de entrega (30 a 35 dias)",
  "Equipe própria de montagem e entrega técnica",
  "Garantia de fábrica de até 5 anos",
  "Suporte de pós-venda dedicado de verdade",
];

export function Authority() {
  return (
    <section className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <img
              src={images.reuniao}
              alt="Mesa de reunião integrada ao layout corporativo Ambienta"
              className="h-[320px] w-full object-cover lg:h-[520px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <p className="eyebrow text-primary">Autoridade</p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Por Que a Ambienta Tem Autoridade Para Entregar Isso?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
              A Ambienta Mobiliário Corporativo nasceu com o propósito de
              eliminar o amadorismo e os atrasos do setor corporativo. Com anos
              de know-how e controle operacional total.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {pontos.map((p, i) => (
              <Reveal
                as="li"
                key={p}
                delay={i * 70}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-ink-foreground/90">{p}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <p className="mt-8 border-l-2 border-primary pl-5 font-display text-xl leading-snug sm:text-2xl">
              Ambienta não é loja de móveis. É parceira estratégica de empresas
              que não podem errar na expansão.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
