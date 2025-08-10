import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        // Exclude specific pages from the sitemap http
        /* if (page.includes("/404") || page.includes("/500")) {
          return false;
        } */
        // Include all other pages in the sitemap

        return true;
      },
      changefreq: "weekly",
      priority: 0.5,
      trailingSlash: "never",
    }),
    solid(),
  ],
  site: "https://thelatinaction.com",
});
