import tailwindcss from '@tailwindcss/vite'
import { headConfig } from './config/head'


export default defineNuxtConfig({
    compatibilityDate: '2025-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
        public: {
            tmdbBaseUrl: 'https://api.themoviedb.org/3',
        },
        tmdbApiKey: process.env.TMDB_API_KEY
    },
    vite: {
        plugins: [tailwindcss()],
    },
    modules: ['@nuxt/fonts', '@nuxtjs/svg-sprite', '@nuxt/image'],
    app: {
        head: headConfig,
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    image: {
        provider: 'ipx',
        format: ['webp'],
        quality: 85,
    },
})
