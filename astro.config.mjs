import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gestor.danieljunior.com.br",
  output: "static",
  integrations: [sitemap()]
});
