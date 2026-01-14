import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import path from "path";

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes("/404") && 
        !page.includes("/500") && 
        !page.includes("/admin") &&
        !page.includes("/test"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://thelatinaction.com/',
        'https://thelatinaction.com/bachata-y-salsa-en-pareja-elche/',
        'https://thelatinaction.com/lady-style-elche/',
        'https://thelatinaction.com/galeria/',
        'https://thelatinaction.com/contacto/',
      ],
      serialize(item) {
        if (item.url === 'https://thelatinaction.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (
          item.url.includes('/bachata-y-salsa-en-pareja-elche/') ||
          item.url.includes('/lady-style-elche/')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/galeria/')) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/contacto/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  site: "https://thelatinaction.com",
  trailingSlash: "always",
  output: "static",
  compressHTML: true,
  
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
      chunkSizeWarningLimit: 1000,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },
  
  image: {
    remotePatterns: [{
      protocol: "https",
      hostname: "res.cloudinary.com",
    }],
  },
  
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
