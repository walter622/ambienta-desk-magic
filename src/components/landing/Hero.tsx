import { ShieldCheck, Cable, Ruler, PanelsTopLeft } from "lucide-react";
import { images } from "@/lib/brand";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const bullets = [
  { icon: ShieldCheck, label: "Estrutura metálica de alta resistência" },
  { icon: Cable, label: "Calhas passa-cabos embutidas" },
  { icon: PanelsTopLeft, label: "Divisórias ergonômicas de privacidade" },
  { icon: Ruler, label: "Acabamento premium e ergonomia NR-17" },
];

const modelos = [
  "Plataformas de Trabalho Modulares para 2, 4, 6, 8, 10 e até 16 Pessoas",
  "Estações de Trabalho Individuais e L-Shape",
  "Mesas Executivas e de Reunião Integradas ao Layout",
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 lg:pt-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-primary/12 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
        <div>
          <Reveal>
            <p className="eyebrow text-primary">Mobiliário corporativo B2B</p>
            <h1 className="mt-5 font-display text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Estações de Trabalho Corporativas para Escritórios que Precisam de{" "}
              <span className="italic text-primary">Organização, Escala</span> e
              Alta Performance
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Transforme seu ambiente corporativo com plataformas modulares de
              alta durabilidade, sem móveis genéricos, sem atrasos no cronograma
              e prontas para otimizar o fluxo de trabalho do seu time no mesmo
              dia da montagem.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-snug text-foreground/85">
                    {b.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col items-start gap-4">
              <p className="text-sm text-muted-foreground">
                Clique abaixo e fale com um especialista da Ambienta pelo
                WhatsApp
              </p>
              <CtaButton />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Atendimento exclusivo para empresas, escritórios, coworkings,
                gestores de facilities e arquitetos.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.55)]">
            <img
              src={images.hero}
              alt="Escritório corporativo com plataformas de trabalho Ambienta instaladas"
              className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-lg sm:block">
            <p className="font-display text-2xl">30 a 35 dias</p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Prazo de entrega e montagem
            </p>
          </div>
        </Reveal>
      </div>

      <div className="border-y border-border/70 bg-card/60">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">
          {modelos.map((m, i) => (
            <Reveal
              key={m}
              delay={i * 90}
              className="flex items-start gap-3 md:border-l md:border-border md:pl-6 md:first:border-l-0 md:first:pl-0"
            >
              <span className="font-display text-sm text-primary">
                0{i + 1}
              </span>
              <p className="text-sm leading-snug text-foreground/85">{m}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
