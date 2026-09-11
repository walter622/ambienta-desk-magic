import { Check } from "lucide-react";
import { images } from "@/lib/brand";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const fotos = [
  {
    src: images.vidro,
    alt: "Plataforma corporativa de alta densidade com divisórias de privacidade",
    span: "lg:col-span-7",
    height: "h-[260px] lg:h-[420px]",
  },
  {
    src: images.detalheClaro,
    alt: "Estação de trabalho quádrupla com passagem oculta de cabos",
    span: "lg:col-span-5",
    height: "h-[260px] lg:h-[420px]",
  },
  {
    src: images.densidade,
    alt: "Layout corporativo integrado de grande porte da Ambienta",
    span: "lg:col-span-5",
    height: "h-[240px] lg:h-[320px]",
  },
  {
    src: images.detalheMadeira,
    alt: "Detalhe da calha passa-cabos embutida e acabamento de madeira premium",
    span: "lg:col-span-7",
    height: "h-[240px] lg:h-[320px]",
  },
];

const destaques = [
  "Plataformas de alta densidade e durabilidade para 10 e 16 pessoas com divisórias de privacidade",
  "Estações de trabalho quádruplas com passagem oculta de cabos",
  "Layout corporativo integrado de grande porte",
  "Calha passa-cabos embutida e acabamento de madeira premium",
];

export function Gallery() {
  return (
    <section id="projetos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Veja Nossas Soluções de Estações de Trabalho em Ação
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {fotos.map((f, i) => (
            <Reveal
              as="article"
              key={f.alt}
              delay={i * 90}
              className={`group overflow-hidden rounded-2xl border border-border bg-card ${f.span}`}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${f.height}`}
              />
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-7 sm:grid-cols-2 sm:p-9"
        >
          {destaques.map((d) => (
            <p key={d} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm leading-snug text-foreground/85">{d}</span>
            </p>
          ))}
        </Reveal>

        <Reveal delay={160} className="mt-10 flex justify-center">
          <CtaButton />
        </Reveal>
      </div>
    </section>
  );
}
