import { images } from "@/lib/brand";
import { Reveal } from "./Reveal";

const modelos = [
  {
    src: images.densidade,
    titulo: "Plataformas de Escala (2, 4, 6, 8, 10 e 16 Pessoas)",
    texto:
      "Ideais para ilhas de atendimento, operação, vendas e desenvolvimento. Design contínuo e modular para acompanhar o crescimento da sua equipe.",
  },
  {
    src: images.reuniao,
    titulo: "Modelo Estação L-Shape (Executiva / Gestão)",
    texto:
      "Espaço amplo de trabalho com gaveteiros pedestais, passa-cabos ocultos e privacidade estratégica para lideranças.",
  },
  {
    src: images.vidro,
    titulo: "Modelo Linear com Divisória de Privacidade",
    texto:
      "Foco no conforto e na organização visual entre estações opostas, mantendo o ambiente moderno e limpo.",
  },
];

export function Models() {
  return (
    <section id="modelos" className="border-y border-border bg-card/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Conheça Nossas Configurações Modulares
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {modelos.map((m, i) => (
            <Reveal
              as="article"
              key={m.titulo}
              delay={i * 90}
              className="group overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="overflow-hidden">
                <img
                  src={m.src}
                  alt={m.titulo}
                  loading="lazy"
                  className="h-[230px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl leading-snug">{m.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
