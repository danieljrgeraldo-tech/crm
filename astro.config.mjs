import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ia-financeira.crm-1xm.pages.dev",
  output: "static",
  integrations: [sitemap()]
});
