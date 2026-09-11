import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Gallery } from "@/components/landing/Gallery";
import { Solution } from "@/components/landing/Solution";
import { Differential } from "@/components/landing/Differential";
import { Authority } from "@/components/landing/Authority";
import { IdealFor } from "@/components/landing/IdealFor";
import { OfferBreak } from "@/components/landing/OfferBreak";
import { Models } from "@/components/landing/Models";
import { Process } from "@/components/landing/Process";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const title =
  "Estações de Trabalho Corporativas | Ambienta Mobiliário Corporativo";
const description =
  "Plataformas modulares de 2 a 16 posições com passa-cabos embutidos, ergonomia NR-17, montagem própria e 5 anos de garantia. Entrega em 30 a 35 dias.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Gallery />
        <Solution />
        <Differential />
        <Authority />
        <IdealFor />
        <OfferBreak />
        <Models />
        <Process />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
