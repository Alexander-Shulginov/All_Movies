import tailwindcss from '@tailwindcss/vite'
import { headConfig } from './config/head'

export default defineNuxtConfig({
    compatibilityDate: '2025-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    modules: ['@nuxt/fonts', '@nuxtjs/svg-sprite'],
    app: {
        head: headConfig,
    },
})
