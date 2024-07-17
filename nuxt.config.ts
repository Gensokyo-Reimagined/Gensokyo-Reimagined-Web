// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    buildAssetsDir: 'static',
  },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  // other plugin
  extends: ['nuxt-seo-kit'],
  // css import
  css: ['@/assets/css/main.css'],
  // maybe sometime will turn off ssr mode
  ssr: true,
  colorMode: {
    classSuffix: '',
  },
  // Nuxt-i18n
  i18n: {
    //strategy: 'prefix',
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
        code: 'zh_hk',
        iso: 'zh-HK',
        file: 'zh_hk.json',
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
      {
        code: 'th',
        iso: 'th-TH',
        file: 'th.json',
      },
      {
        code: 'lt',
        iso: 'lt-LT',
        file: 'lt.json',
      },
    ],
    langDir: 'lang',
    defaultLocale: 'en',
    lazy: false,
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root', // recommended
    },
  },
  experimental: {
    writeEarlyHints: false,
    payloadExtraction: false,
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
  // optimization
  webpack: {
    optimization: {
      splitChunks: {
        chunks: 'async',
        maxSize: 2000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  },
})
