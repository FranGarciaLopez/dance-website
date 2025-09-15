import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        // Exclude specific pages from the sitemap
        // if (page.includes("/404") || page.includes("/500")) return false;
        return true;
      },
      changefreq: "weekly",
      priority: 0.5,
    }),
    solid(),
  ],

  site: "https://thelatinaction.com",
  trailingSlash: "always",

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
