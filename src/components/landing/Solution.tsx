import { Boxes, Cable, Ruler, PanelLeftClose, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const pilares = [
  {
    icon: Boxes,
    title: "Estrutura Reforçada e Durável",
    text: "Materiais de alta densidade e acabamento resistente para uso intenso.",
  },
  {
    icon: Cable,
    title: "Organização Visual Impecável",
    text: "Calhas passa-cabos e passagem oculta de fiação para manter o ambiente limpo.",
  },
  {
    icon: Ruler,
    title: "Design e Ergonomia Certificada",
    text: "Altura e profundidade rigorosamente alinhadas à NR-17.",
  },
  {
    icon: PanelLeftClose,
    title: "Divisórias de Privacidade",
    text: "Foco individual mantendo a integração e a fluidez do time.",
  },
  {
    icon: Wrench,
    title: "Montagem Própria e Rápida",
    text: "Execução limpa, ágil e realizada por equipe própria especializada.",
  },
];

export function Solution() {
  return (
    <section id="solucao" className="border-y border-border bg-card/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            A Solução: Plataformas Modulares de Alta Performance Ambienta
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Sua equipe trabalha com conforto, estabilidade e organização desde o
            primeiro dia. As Estações de Trabalho da Ambienta Mobiliário
            Corporativo entregam:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {pilares.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="bg-background p-7 transition-colors hover:bg-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </Reveal>
          ))}
          <Reveal
            delay={400}
            className="flex items-end bg-ink p-7 text-ink-foreground"
          >
            <p className="font-display text-2xl leading-snug">
              Conforto, estabilidade e organização{" "}
              <span className="text-primary">desde o primeiro dia.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
