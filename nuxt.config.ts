// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/critters", "nuxt-marquee"],
  app: {
    baseURL: "/george24/",
    buildAssetsDir: "assets",
  },
});
