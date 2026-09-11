import { X } from "lucide-react";
import { images } from "@/lib/brand";
import { Reveal } from "./Reveal";

const dores = [
  "Fiação solta e bagunçada pelo chão",
  "Mesas frágeis que balançam, descascam e estragam em poucos meses",
  "Falta de padronização ao tentar encaixar novas posições no futuro",
  "Ambientes visualmente poluídos que passam imagem de improviso",
  "Atrasos na entrega e montagens amadoras que travam a rotina do escritório",
];

export function Problem() {
  return (
    <section id="problema" className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl leading-tight sm:text-4xl">
              O Problema que Ninguém Resolve na Infraestrutura de Mesas
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/70 sm:text-base">
              Ambientes corporativos em expansão precisam de densidade,
              organização e resistência. Mas existe um efeito colateral oculto
              em comprar mesas comuns de varejo:
            </p>
          </Reveal>

          <ul className="mt-8 space-y-px overflow-hidden rounded-2xl border border-white/10">
            {dores.map((d, i) => (
              <Reveal
                as="li"
                key={d}
                delay={i * 70}
                className="flex items-start gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-4 last:border-b-0"
              >
                <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                <span className="text-sm leading-snug text-ink-foreground/90">
                  {d}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={160}>
            <div className="mt-8 space-y-4 border-l-2 border-primary pl-5 text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
              <p>
                O resultado? Perda de tempo na mudança, custo com trocas
                precoces de mobiliário, queda de produtividade e péssima
                impressão para clientes.
              </p>
              <p>
                A maioria das empresas tenta resolver isso comprando móveis
                soltos em lojas comuns. Mas isso significa falta de
                padronização, fragilidade estrutural, montagem terceirizada e
                prazos estourados.
              </p>
              <p className="font-display text-xl text-primary sm:text-2xl">
                A Ambienta resolve de forma inteligente.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <img
              src={images.colunas}
              alt="Ambiente corporativo com estações de trabalho alinhadas e cabeamento organizado"
              className="h-[380px] w-full object-cover lg:h-[560px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
