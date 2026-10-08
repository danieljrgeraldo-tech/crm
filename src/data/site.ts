export const WHATSAPP_NUMBER = "5548998493150";

const whatsappMessage = "Olá, Daniel. Gostaria de solicitar uma análise.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

export const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Home Equity", href: "#capital" },
  { label: "Investidores", href: "#investidores" },
  { label: "Contato", href: "#contato" }
];

export const floatingTags = ["Crédito", "Capital", "Investimentos", "Patrimônio"];

export const solutions = [
  "Home Equity",
  "Crédito Estruturado",
  "Cartas Contempladas",
  "PIX Parcelado Garantido",
  "Capital Privado",
  "Antecipação de Recebíveis",
  "Operações Estruturadas"
];

export const homeEquityApplications = [
  "Crédito com Garantia de Imóvel",
  "Capital para Expansão Empresarial",
  "Reorganização Financeira",
  "Capital para Investimentos"
];

export const homeEquityBenefits = [
  {
    title: "Sem consulta de nome e renda",
    text: "O processo é ágil e simplificado, sem exigência de comprovação de renda ou consultas de score e CPF."
  },
  {
    title: "Acesso rápido ao capital",
    text: "Em até 10 dias após a aprovação, o valor solicitado está na sua conta, pronto para ser utilizado."
  },
  {
    title: "Liberdade de uso",
    text: "O capital pode ser usado para investir em projetos, quitar dívidas, reformar ou expandir seu negócio."
  },
  {
    title: "Condições flexíveis",
    text: "Até 60% de LTV para imóveis em áreas urbanas, com análise para imóveis sem averbação completa."
  },
  {
    title: "Taxas de juros acessíveis",
    text: "Condições competitivas para quem busca uma solução financeira vantajosa."
  }
];

export const patrimonyPossibilities = [
  "Cartas contempladas",
  "Crédito através de contemplação",
  "Imóveis e terrenos",
  "Veículos e equipamentos",
  "Expansão empresarial",
  "Planejamento patrimonial"
];

export const retailBenefits = [
  "PIX Parcelado Garantido",
  "Garantia contra inadimplência",
  "Mais aprovação de vendas",
  "Aumento do ticket médio",
  "Segurança para o estabelecimento"
];

export const investorPossibilities = [
  "Investimentos conservadores",
  "Operações com garantia real",
  "Renda recorrente",
  "Oportunidades de maior rentabilidade",
  "Capital privado"
];

export const reasons = [
  "Atendimento sem custo",
  "Simulações sem compromisso",
  "Análise personalizada",
  "Estratégias para diferentes cenários",
  "Acompanhamento completo"
];
