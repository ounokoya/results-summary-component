import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base : le site est servi par GitHub Pages sous /results-summary-component/
export default defineConfig({ base: '/results-summary-component/', plugins: [tailwindcss()] })
