import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const perguntas = [
  {
    q: "Como funciona o gerenciamento de cabos nas mesas?",
    a: "Nossas plataformas contam com calhas passa-cabos embutidas e aberturas no tampo para direcionar a fiação dos computadores de forma limpa e oculta, eliminando a poluição visual no ambiente.",
  },
  {
    q: "Conseguimos montar ilhas grandes para 10, 16 ou mais pessoas integradas?",
    a: "Sim! Nosso sistema é 100% modular, permitindo criar plataformas contínuas para 2, 4, 6, 8, 10, 16 ou mais posições perfeitamente alinhadas.",
  },
  {
    q: "Qual é o tempo de garantia do mobiliário?",
    a: "Oferecemos até 5 anos de garantia estrutural de fábrica contra defeitos de fabricação, comprovando a durabilidade das nossas estações.",
  },
  {
    q: "Vocês fazem a montagem do mobiliário?",
    a: "Sim. Possuímos equipe própria de montadores capacitados. Não terceirizamos a entrega do seu projeto.",
  },
  {
    q: "Qual é o prazo médio de entrega?",
    a: "Nosso prazo para estações de trabalho e plataformas varia entre 30 e 35 dias úteis, cumpridos de forma rigorosa.",
  },
  {
    q: "Vocês atendem pessoa física ou residências?",
    a: "Não. Nosso atendimento é 100% exclusivo para empresas, escritórios e projetos corporativos B2B.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-card/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {perguntas.map((p, i) => (
              <AccordionItem key={p.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base sm:text-lg">
                  {p.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {p.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
