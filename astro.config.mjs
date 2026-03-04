import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import keystatic from '@keystatic/astro';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind({
    // Disable Astro's base styles to prevent conflicts with Tailwind's preflight
    applyBaseStyles: false,
  }), keystatic(), react()]
});
