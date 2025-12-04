/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'charcoal': '#333333',
        'off-white': '#F5F5F5',
        'lavender': '#C5B4E3',
        'soft-black': '#1A1A1A',
        'tagline-gray': '#AAAAAA',
        'border-gray': '#444',
        'footer-gray': '#666',
      },
      fontFamily: {
        sans: ['Varela Round', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}