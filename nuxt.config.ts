// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  mode: 'static',
  app: {
    baseURL: '/cyprus-freelance/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    head: {
      title: 'Pafilia',
      meta: [
        {
          name: 'description',
          content: "If you're considering relocating with your family, the stunning island of Cyprus is definitely worth exploring this"
        },
        { property: 'og:title', content: 'Pafilia' },
        { property: 'og:description', content: 'A COMPREHENSIVE PROGRAM TO FACILITATE RELOCATING TO CYPRUS WITH YOUR FAMILY' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
      ],

      link: [
        { rel:"icon", href:"images/favicon.png", sizes:"32x32" },
        { rel: "stylesheet", type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
      ],
      script: [
        {
          src: "https://smtpjs.com/v3/smtp.js",
        }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "./plugins/aos.client.ts", ssr: false }],
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url))
  }
})
