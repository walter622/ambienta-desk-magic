import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const linhas = [
  {
    mercado: {
      titulo: "Mesas de lojas comuns",
      texto:
        "Estrutura frágil que balança, acabamento que descasca fácil e sem organização de cabos.",
    },
    ambienta:
      "Engenharia corporativa de alta resistência, 5 anos de garantia e passa-cabos embutidos.",
  },
  {
    mercado: {
      titulo: "Fornecedores tradicionais",
      texto:
        "Terceirizam a montagem para equipes desqualificadas e atrasam entregas.",
    },
    ambienta:
      "Montagem própria, rápida, limpa e com cumprimento rigoroso do prazo (30 a 35 dias).",
  },
  {
    mercado: {
      titulo: "Atendimento de varejo",
      texto:
        "Apenas vende caixas de móveis soltos sem pensar no fluxo do escritório.",
    },
    ambienta:
      "Atendimento consultivo especializado em layouts operacionais de alta densidade.",
  },
];

export function Differential() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Comparativo</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Diferencial Real: O que o mercado não entrega
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {linhas.map((l, i) => (
            <Reveal
              key={l.mercado.titulo}
              delay={i * 90}
              className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-2"
            >
              <div className="bg-muted/60 p-6 md:p-8">
                <div className="flex items-center gap-2 text-destructive">
                  <X className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                    {l.mercado.titulo}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {l.mercado.texto}
                </p>
              </div>
              <div className="border-t border-border bg-card p-6 md:border-l md:border-t-0 md:p-8">
                <div className="flex items-center gap-2 text-primary">
                  <Check className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                    A Ambienta entrega
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {l.ambienta}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-10 text-center font-display text-2xl sm:text-3xl">
            Não é só uma mesa. É{" "}
            <span className="italic text-primary">inteligência operacional</span>{" "}
            aplicada ao seu layout.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
