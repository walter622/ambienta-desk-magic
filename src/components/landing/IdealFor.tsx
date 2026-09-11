import { Building2, Users, ClipboardCheck, Compass, Network } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const perfis = [
  { icon: Building2, text: "Empresas em Fase de Expansão ou Mudança de Sede" },
  {
    icon: Users,
    text: "Operações de Médio e Grande Porte que Precisam de Escala (10 a 16+ Posições)",
  },
  {
    icon: ClipboardCheck,
    text: "Gestores de Facilities e RH que Buscam Ergonomia (NR-17) e Organização Visual",
  },
  {
    icon: Compass,
    text: "Escritórios de Arquitetura que Exigem Execução Técnica Impecável e Padrão Luxo",
  },
  { icon: Network, text: "Coworkings e Centros Operacionais de Alta Densidade" },
];

export function IdealFor() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Para Quem Essas Estações de Trabalho São Ideais?
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Se você precisa escalar sua operação com organização, durabilidade e
            agilidade, este produto é para você:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perfis.map((p, i) => (
            <Reveal
              key={p.text}
              delay={i * 80}
              className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_24px_50px_-40px_rgba(15,23,42,0.6)]"
            >
              <p.icon className="h-6 w-6 text-primary" />
              <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-10 flex justify-center">
          <CtaButton />
        </Reveal>
      </div>
    </section>
  );
}
