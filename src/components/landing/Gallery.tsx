import { images } from "@/lib/brand";
import { Reveal } from "./Reveal";

const fotos = [
  {
    src: images.vidro,
    alt: "Plataforma corporativa de alta densidade com divisórias de privacidade",
    caption:
      "Plataforma de Alta Densidade e Durabilidade para 10 e 16 Pessoas com Divisórias de Privacidade",
    span: "lg:col-span-7 lg:row-span-2",
    height: "h-[280px] lg:h-[560px]",
  },
  {
    src: images.detalheClaro,
    alt: "Estação de trabalho quádrupla com passagem oculta de cabos",
    caption: "Estação de Trabalho Quádrupla com Passagem Oculta de Cabos",
    span: "lg:col-span-5",
    height: "h-[240px] lg:h-[270px]",
  },
  {
    src: images.densidade,
    alt: "Layout corporativo integrado de grande porte da Ambienta",
    caption: "Layout Corporativo Integrado de Grande Porte Ambienta",
    span: "lg:col-span-5",
    height: "h-[240px] lg:h-[270px]",
  },
  {
    src: images.detalheMadeira,
    alt: "Detalhe da calha passa-cabos embutida e acabamento de madeira premium",
    caption:
      "Detalhe Técnico da Calha Passa-Cabos Embutida e Acabamento de Madeira Premium",
    span: "lg:col-span-12",
    height: "h-[260px] lg:h-[380px]",
  },
];

export function Gallery() {
  return (
    <section id="projetos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary">Projetos instalados</p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Veja Nossas Soluções de Estações de Trabalho em Ação
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {fotos.map((f, i) => (
            <Reveal
              as="article"
              key={f.caption}
              delay={i * 90}
              className={`group overflow-hidden rounded-2xl border border-border bg-card ${f.span}`}
            >
              <div className="overflow-hidden">
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${f.height}`}
                />
              </div>
              <p className="px-5 py-4 text-sm leading-snug text-muted-foreground">
                {f.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
