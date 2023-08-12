// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-typed-router',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/partytown',
  ],
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja.json',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh.json',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
      },
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl.json',
      },
      {
        code: 'el',
        iso: 'el-GR',
        file: 'el.json',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.json',
      },
      {
        code: 'tr',
        iso: 'tr-TR',
        file: 'tr.json',
      },
      {
        code: 'uk',
        iso: 'uk-UA',
        file: 'uk.json',
      },
      {
        code: 'cs',
        iso: 'cs-CZ',
        file: 'cs.json',
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it.json',
      },
    ],
    langDir: 'lang',
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  extends: ['nuxt-seo-kit'],
  css: ['@/assets/css/main.css'],
  experimental: {
    writeEarlyHints: false,
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || 'https://gensokyoreimagined.net',
      siteName: 'Gensokyo Reimagined',
      siteDescription: 'Welcome to Gensokyo!',
      siteImage: '/img/about_pic_embed.webp',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
})
