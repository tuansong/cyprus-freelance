// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'A COMPREHENSIVE PROGRAM TO FACILITATE RELOCATING TO CYPRUS WITH YOUR FAMILY',
      meta: [
        {
          name: 'description',
          content: "If you're considering relocating with your family, the stunning island of Cyprus is definitely worth exploring this"
        },
        { property: 'og:title', content: 'The Intuitive Web Framework' },
        { property: 'og:description', content: 'Build your next Vue.js application with confidence using Nuxt...' },
        { property: 'og:type', content: 'website' },
        // { property: 'og:url', content: 'https://nuxt.com' },
        { property: 'og:locale', content: 'en_US' },
      ],

      link: [{ rel: "stylesheet", type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
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
})
