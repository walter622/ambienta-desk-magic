import { brand, images } from "@/lib/brand";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Quer Levar Mais Organização e Eficiência Para Sua Empresa?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-ink-foreground/80 sm:text-base">
            Ambientes corporativos de alto nível exigem planejamento,
            durabilidade e pontualidade. Invista na infraestrutura do seu
            crescimento.
          </p>
          <p className="mt-4 text-sm text-ink-foreground/70">
            Clique abaixo e fale agora com a Ambienta Mobiliário Corporativo
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton className="px-8 text-center">{brand.ctaFinal}</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
