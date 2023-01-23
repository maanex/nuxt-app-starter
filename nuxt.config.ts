// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'smaragd'
  ],
  modules: [
    '@nuxtjs/color-mode'
  ],
  nitro: {
    plugins: ["~/server/mongo-plugin.ts"],
  },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },
})
