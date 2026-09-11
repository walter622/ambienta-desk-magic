import img1 from "@/assets/ambienta-1.jpg.asset.json";
import img2 from "@/assets/ambienta-2.jpg.asset.json";
import img3 from "@/assets/ambienta-3.jpg.asset.json";
import img4 from "@/assets/ambienta-4.jpg.asset.json";
import img5 from "@/assets/ambienta-5.jpg.asset.json";
import img6 from "@/assets/ambienta-6.jpg.asset.json";
import img7 from "@/assets/ambienta-7.jpg.asset.json";

/**
 * Ponto único de personalização da landing page.
 * Para adaptar o modelo a outra empresa, altere apenas este arquivo
 * (marca, contato, textos, imagens) e os tokens de cor em src/styles.css.
 */

export const brand = {
  name: "Ambienta",
  fullName: "Ambienta Mobiliário Corporativo",
  tagline: "Mobiliário Corporativo",
  whatsappUrl: "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20esta%C3%A7%C3%B5es%20de%20trabalho",
  ctaPrimary: "Fale com um Especialista",
  ctaFinal: "Quero Falar com a Ambienta sobre Estações de Trabalho",
  address:
    "Rua Adib Auada, 35 - Cj 402 C - Granja Viana - Cotia - SP | CEP 06710-700",
  copyright: "© Ambienta Mobiliário Corporativo. Todos os direitos reservados.",
};

export const images = {
  hero: img6.url,
  densidade: img3.url,
  colunas: img4.url,
  reuniao: img5.url,
  vidro: img7.url,
  detalheClaro: img2.url,
  detalheMadeira: img1.url,
};

export const nav = [
  { label: "O problema", href: "#problema" },
  { label: "Projetos", href: "#projetos" },
  { label: "Solução", href: "#solucao" },
  { label: "Modelos", href: "#modelos" },
  { label: "Entrega", href: "#entrega" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];
