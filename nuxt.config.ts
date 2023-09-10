// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel:"stylesheet", type:"text/css", href:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }],
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
  modules: [
    //...
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
  ],
})
