export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/critters", "nuxt-marquee"],
  app: {
    baseURL: "/george24/",
    buildAssetsDir: "assets",
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
});
