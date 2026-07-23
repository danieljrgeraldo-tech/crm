import sharp from "sharp";
import { fileURLToPath } from "node:url";

const heroPath = fileURLToPath(new URL("../public/images/daniel-hero.webp", import.meta.url));
const outputPath = fileURLToPath(new URL("../public/images/og-daniel-junior.webp", import.meta.url));

const hero = await sharp(heroPath)
  .resize(620, 820, { fit: "cover", position: "centre" })
  .extract({ left: 20, top: 95, width: 580, height: 630 })
  .modulate({ saturation: 0.88, brightness: 0.92 })
  .toBuffer();

const typography = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" x2="1">
        <stop offset="0" stop-color="#f4efe7"/>
        <stop offset="0.72" stop-color="#f4efe7" stop-opacity=".94"/>
        <stop offset="1" stop-color="#f4efe7" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="760" height="630" fill="url(#fade)"/>
    <text x="68" y="78" fill="#ad6a45" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="3">GESTÃO DE AUTOMAÇÃO COM IA</text>
    <text x="68" y="174" fill="#171916" font-family="Georgia, serif" font-size="62">Atendimento com</text>
    <text x="68" y="244" fill="#171916" font-family="Georgia, serif" font-size="62">clareza, ritmo</text>
    <text x="68" y="314" fill="#ad6a45" font-family="Georgia, serif" font-size="62" font-style="italic">e controle.</text>
    <line x1="68" y1="378" x2="515" y2="378" stroke="#cfc6bb"/>
    <text x="68" y="425" fill="#55574f" font-family="Arial, sans-serif" font-size="22">Estratégia, implantação e acompanhamento</text>
    <text x="68" y="458" fill="#55574f" font-family="Arial, sans-serif" font-size="22">para operações que vendem pelo WhatsApp.</text>
    <text x="68" y="556" fill="#171916" font-family="Georgia, serif" font-size="29" font-weight="700">Daniel Junior</text>
    <text x="68" y="585" fill="#77796f" font-family="Arial, sans-serif" font-size="14" letter-spacing="2">DANIELJUNIOR.COM.BR</text>
  </svg>
`);

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: "#f4efe7",
  },
})
  .composite([
    { input: hero, left: 620, top: 0 },
    { input: typography, left: 0, top: 0 },
  ])
  .webp({ quality: 88, effort: 5 })
  .toFile(outputPath);
