import { useState } from "react";
import { brand } from "@/lib/brand";
import { Reveal } from "./Reveal";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá, sou ${nome.trim()}. Quero falar sobre estações de trabalho corporativas.\nWhatsApp: ${whats.trim()}\nE-mail: ${email.trim()}`;
    window.open(
      `${brand.whatsappUrl.split("?")[0]}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const field =
    "w-full rounded-xl border border-ink-foreground/20 bg-ink-foreground/10 px-5 py-4 text-sm text-ink-foreground placeholder:text-ink-foreground/45 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <section id="contato" className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="mx-auto max-w-lg px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Quer mais organização e escala{" "}
            <span className="text-primary">para o seu escritório?</span>
          </h2>
          <p className="mt-4 text-sm text-ink-foreground/75">
            Entre em contato conosco.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="mt-10 space-y-4">
            <input
              type="text"
              required
              maxLength={100}
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={field}
            />
            <input
              type="tel"
              required
              maxLength={20}
              placeholder="WhatsApp"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              className={field}
            />
            <input
              type="email"
              required
              maxLength={255}
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
            <button
              type="submit"
              className="cta-pulse w-full rounded-xl bg-cta px-8 py-4 text-base font-semibold text-cta-foreground transition-all hover:brightness-105"
            >
              {brand.ctaFinal}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
