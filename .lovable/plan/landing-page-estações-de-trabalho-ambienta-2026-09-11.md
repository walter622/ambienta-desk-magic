# Landing Page — Estações de Trabalho Ambienta

Página única em português, com a mesma identidade visual do site de referência da Ambienta (Focus Booth): fundo claro quase branco, azul-petróleo escuro para blocos de contraste, acento em turquesa, títulos em Playfair Display e textos em DM Sans.

## Fotos

As 7 fotos enviadas serão usadas como imagens reais do negócio:
- Foto do escritório amplo com painel colorido → imagem principal do topo.
- Plataformas de alta densidade (salas com muitas posições) → galeria e seção de escala.
- Mesa oval com cadeiras laranja → seção de reunião/executiva.
- Renders claros de bancadas → seções de detalhe técnico e modelos.

Cada foto entra com legenda profissional (as legendas da galeria do texto), enquadramento cuidadoso e tratamento consistente, sem parecer banco de imagens.

## Estrutura da página

1. Topo fixo com logo, âncoras das seções e botão de WhatsApp.
2. Hero: headline, subheadline, bullets de destaque, CTA principal, aviso de atendimento exclusivo B2B e foto real do escritório.
3. Faixa com as três linhas de modelos (plataformas 2 a 16 pessoas, individuais/L-Shape, executivas e reunião).
4. Seção de dor: o problema do layout tradicional, em lista visual com contraste escuro.
5. Galeria "Soluções em ação" com as fotos e legendas.
6. Solução Ambienta: cinco pilares (estrutura, organização de cabos, ergonomia NR-17, privacidade, montagem própria).
7. Diferencial real: comparativo em duas colunas (mercado x Ambienta).
8. Autoridade e institucional com marcadores de garantia, prazo e equipe própria.
9. Para quem é ideal: cinco perfis.
10. Chamada intermediária de oferta com CTA.
11. Modelos e configurações modulares.
12. Passo a passo da entrega (6 etapas numeradas).
13. FAQ em acordeão (6 perguntas).
14. Fechamento de conversão em bloco escuro + CTA.
15. Rodapé com nome, endereço completo e direitos reservados.

Todos os textos são exatamente os que você enviou.

## Modelo replicável

Cores, tipografia, logo, textos e imagens ficam concentrados em um único arquivo de tema/conteúdo, para trocar de empresa sem refazer a página.

## Detalhes técnicos

- Rota `/` substituindo o placeholder; seções em componentes separados em `src/components/landing/`.
- Tokens de cor em `src/styles.css` (oklch): fundo claro, tinta escura, turquesa de acento; fontes Playfair Display + DM Sans via `<link>` no root.
- Fotos publicadas como assets via `lovable-assets` a partir dos uploads.
- Título, descrição e metadados sociais próprios da página.
- Animações discretas de entrada ao rolar; layout responsivo mobile-first.

## Preciso de você

- Número de WhatsApp para os botões de CTA (enquanto isso uso um link marcado como provisório).
- Arquivo do logo da Ambienta (sem ele, uso a marca em texto no mesmo estilo da referência).
