import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Disable Astro's base styles to prevent conflicts with Tailwind's preflight
    applyBaseStyles: false,
  })]
});
