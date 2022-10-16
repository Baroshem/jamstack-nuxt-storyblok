// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }]
      ],
})
