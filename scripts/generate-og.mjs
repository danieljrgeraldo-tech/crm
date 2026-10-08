import sharp from "sharp";
import { fileURLToPath } from "node:url";

const outputPath = fileURLToPath(new URL("../public/images/og-daniel-junior.webp", import.meta.url));

const socialCard = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#08090d"/>
        <stop offset=".55" stop-color="#0d0c18"/>
        <stop offset="1" stop-color="#08090d"/>
      </linearGradient>
      <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#805cff"/>
        <stop offset="1" stop-color="#557cff"/>
      </linearGradient>
      <radialGradient id="glow">
        <stop offset="0" stop-color="#7257ff" stop-opacity=".3"/>
        <stop offset="1" stop-color="#7257ff" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
        <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#000" flood-opacity=".6"/>
      </filter>
      <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M64 0H0V64" fill="none" stroke="#fff" stroke-opacity=".045"/>
      </pattern>
    </defs>

    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <ellipse cx="865" cy="300" rx="430" ry="390" fill="url(#glow)"/>

    <g transform="translate(64 54)">
      <rect width="38" height="38" rx="10" fill="url(#brand)"/>
      <text x="19" y="26" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="17" font-weight="700">D</text>
      <text x="52" y="16" fill="#fff" font-family="Arial, sans-serif" font-size="16" font-weight="700">Daniel Junior</text>
      <text x="52" y="35" fill="#737887" font-family="Arial, sans-serif" font-size="9" font-weight="700" letter-spacing="1.8">AUTOMAÇÃO COM IA</text>
    </g>

    <g transform="translate(64 168)">
      <rect width="248" height="32" rx="16" fill="#7657ff" fill-opacity=".08" stroke="#927cff" stroke-opacity=".22"/>
      <circle cx="18" cy="16" r="4" fill="#42d392"/>
      <text x="32" y="21" fill="#b8afcf" font-family="Arial, sans-serif" font-size="10" font-weight="700" letter-spacing="1">IA PARA ATENDIMENTO E VENDAS</text>

      <text x="0" y="94" fill="#fff" font-family="Arial, sans-serif" font-size="55" font-weight="700" letter-spacing="-2.2">Inteligência Artificial</text>
      <text x="0" y="155" fill="#fff" font-family="Arial, sans-serif" font-size="55" font-weight="700" letter-spacing="-2.2">direto no WhatsApp.</text>
      <text x="0" y="210" fill="#959aa8" font-family="Arial, sans-serif" font-size="19">Atendimento, CRM e distribuição de conversas.</text>

      <g transform="translate(0 256)">
        <rect width="190" height="48" rx="10" fill="url(#brand)"/>
        <text x="95" y="30" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="14" font-weight="700">Agendar demonstração</text>
      </g>
    </g>

    <g transform="translate(700 120)" filter="url(#shadow)">
      <rect width="438" height="428" rx="18" fill="#f7f8fa" stroke="#fff" stroke-opacity=".2"/>
      <rect width="438" height="48" rx="18" fill="#fff"/>
      <path d="M0 48H438" stroke="#e4e6eb"/>
      <rect x="16" y="12" width="24" height="24" rx="7" fill="url(#brand)"/>
      <text x="28" y="28" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="7" font-weight="700">DJ</text>
      <text x="50" y="27" fill="#20232b" font-family="Arial, sans-serif" font-size="10" font-weight="700">Central Comercial</text>
      <circle cx="410" cy="24" r="4" fill="#42d392"/>

      <rect x="0" y="48" width="132" height="380" fill="#fff"/>
      <path d="M132 48V428" stroke="#e4e6eb"/>
      <text x="16" y="77" fill="#999da7" font-family="Arial, sans-serif" font-size="7" font-weight="700" letter-spacing=".7">CONVERSAS</text>
      <g transform="translate(10 92)">
        <rect width="112" height="68" rx="8" fill="#eeebff"/>
        <circle cx="20" cy="23" r="12" fill="#6d8fae"/>
        <text x="20" y="26" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="6" font-weight="700">MC</text>
        <text x="40" y="18" fill="#252832" font-family="Arial, sans-serif" font-size="8" font-weight="700">Mariana Costa</text>
        <text x="40" y="32" fill="#696d77" font-family="Arial, sans-serif" font-size="7">Quero conhecer...</text>
        <rect x="40" y="42" width="42" height="13" rx="4" fill="#e5f5ec"/>
        <text x="61" y="51" text-anchor="middle" fill="#498065" font-family="Arial, sans-serif" font-size="5">WhatsApp</text>
      </g>
      <g transform="translate(10 170)">
        <circle cx="20" cy="20" r="12" fill="#9e78bd"/>
        <text x="20" y="23" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="6" font-weight="700">RA</text>
        <text x="40" y="16" fill="#252832" font-family="Arial, sans-serif" font-size="8" font-weight="700">Rafael Alves</text>
        <text x="40" y="30" fill="#696d77" font-family="Arial, sans-serif" font-size="7">Proposta recebida</text>
      </g>

      <text x="154" y="79" fill="#252832" font-family="Arial, sans-serif" font-size="10" font-weight="700">Mariana Costa</text>
      <circle cx="418" cy="76" r="3" fill="#42d392"/>
      <rect x="152" y="105" width="208" height="48" rx="10" fill="#fff" stroke="#e6e8ec"/>
      <text x="166" y="125" fill="#3b3e47" font-family="Arial, sans-serif" font-size="8">Quero entender as condições</text>
      <text x="166" y="138" fill="#3b3e47" font-family="Arial, sans-serif" font-size="8">para comprar no atacado.</text>
      <rect x="189" y="171" width="228" height="66" rx="10" fill="#e9e5ff"/>
      <text x="204" y="189" fill="#674ff4" font-family="Arial, sans-serif" font-size="6" font-weight="700">ASSISTENTE DE IA</text>
      <text x="204" y="205" fill="#3b3e47" font-family="Arial, sans-serif" font-size="8">Qual volume você pretende</text>
      <text x="204" y="219" fill="#3b3e47" font-family="Arial, sans-serif" font-size="8">comprar por mês?</text>

      <g transform="translate(152 265)">
        <rect width="266" height="52" rx="9" fill="#fff" stroke="#e5e7eb"/>
        <circle cx="20" cy="26" r="10" fill="#e7f7ef"/>
        <path d="M16 26l3 3 6-7" fill="none" stroke="#42b77f" stroke-width="2"/>
        <text x="38" y="22" fill="#8b8f98" font-family="Arial, sans-serif" font-size="6" font-weight="700">CRM ATUALIZADO</text>
        <text x="38" y="37" fill="#292c34" font-family="Arial, sans-serif" font-size="9" font-weight="700">Novo → Qualificado</text>
      </g>
      <g transform="translate(152 329)">
        <rect width="266" height="68" rx="9" fill="#10121a"/>
        <text x="16" y="21" fill="#8f94a2" font-family="Arial, sans-serif" font-size="6" font-weight="700">DISTRIBUIÇÃO AUTOMÁTICA</text>
        <circle cx="25" cy="46" r="10" fill="#735cff"/>
        <text x="25" y="49" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="6">IA</text>
        <text x="46" y="49" fill="#737887" font-family="Arial, sans-serif" font-size="11">→</text>
        <circle cx="68" cy="46" r="10" fill="#5f87a5"/>
        <text x="68" y="49" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="6">RA</text>
        <text x="88" y="49" fill="#fff" font-family="Arial, sans-serif" font-size="9" font-weight="700">Vendedor certo</text>
      </g>
    </g>
  </svg>
`);

await sharp(socialCard)
  .webp({ quality: 90, effort: 5 })
  .toFile(outputPath);
