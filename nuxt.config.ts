import tailwindcss from '@tailwindcss/vite'
import { headConfig } from './config/head'

export default defineNuxtConfig({
    compatibilityDate: '2025-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
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
        // screens: {
        //     xs: 150,
        //     sm: 320,
        //     md: 640,
        //     lg: 1024,
        //     xl: 1280,
        // },
    },
})
