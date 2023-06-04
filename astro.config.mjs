import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://localhost',
   integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), alpinejs(), sitemap()]
});