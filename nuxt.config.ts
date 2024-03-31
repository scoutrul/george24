export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/critters",
    "nuxt-marquee",
    "nuxt-delay-hydration",
    "@vueuse/nuxt",
    "nuxt-contextual-transition",
    "@nuxt/content",
  ],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
    baseURL: "/george24/",
    buildAssetsDir: "/assets/",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_main.scss" as *;',
        },
      },
    },
  },
  delayHydration: {
    mode: "init",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },
  experimental: {
    payloadExtraction: false,
  },
});
