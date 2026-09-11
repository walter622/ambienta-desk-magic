import { Reveal } from "./Reveal";

const etapas = [
  {
    titulo: "Diagnóstico do Layout",
    texto: "Análise do seu espaço e quantidade de posições necessárias.",
  },
  {
    titulo: "Confirmação do Projeto",
    texto: "Definição das configurações modulares, dimensões e acabamentos.",
  },
  {
    titulo: "Prazo Impecável",
    texto: "Entrega e montagem programada entre 30 a 35 dias.",
  },
  {
    titulo: "Instalação com Equipe Própria",
    texto: "Montagem técnica rápida, alinhada e limpa.",
  },
  {
    titulo: "Entrega Técnica e Validação",
    texto: "Vistoria completa de alinhamento e qualidade.",
  },
  {
    titulo: "Pós-Venda Dedicado",
    texto: "Acompanhamento contínuo e garantia de 5 anos.",
  },
];

export function Process() {
  return (
    <section id="entrega" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Como Funciona a Entrega Ambienta
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Simples. Profissional. Eficiente.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {etapas.map((e, i) => (
            <Reveal
              as="li"
              key={e.titulo}
              delay={i * 70}
              className="border-t border-border pt-6"
            >
              <span className="font-display text-3xl text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl">{e.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.texto}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
