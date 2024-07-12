// https://nuxt.com/docs/api/configuration/nuxt-config
import {defaultRoutes} from "./src/config/routes";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "./src",
  nitro: {
    alias: {
      pinia: "pinia",
    },
  },
  css: ['@/assets/custom.scss'],
  modules: [
    "@storefront-ui/nuxt",
    "@pinia/nuxt",
  ],
  hooks:{
    'pages:extend'(routes){
      defaultRoutes.forEach((route) => routes.push(route));
    }
  },
});
