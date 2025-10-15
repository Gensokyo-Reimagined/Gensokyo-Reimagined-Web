// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    buildAssetsDir: 'static',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://gensokyoreimagined.net' },
        { rel: 'dns-prefetch', href: 'https://gensokyoreimagined.net' },
        {
          rel: 'preload',
          href: '/css/all.min.css',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        {
          rel: 'stylesheet',
          href: '/css/all.min.css',
          media: 'print',
          onload: "this.media='all'"
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],

  nitro: {
    prerender: {
      // Ignore image optimization URLs during prerender
      ignore: [
        '/.netlify/images',
        '/_ipx'
      ]
    }
  },

  image: {
    provider: 'netlify', //for local development ipx is required DONT FORGET TO SWITCH BACK TO NETLIFY ONCE UR DONE
    formats: ['avif', 'webp'],
    presets: {
      logo: {
        modifiers: {
          quality: '70',
        }
      },
      carousel: {
        modifiers: {
          quality: '70',
          blur: 2,
        }
      },
      featureCard: {
        modifiers: {
          quality: '50',
          sizes: 'sm:100vw md:50vw lg:400px',
        }
      },
      rulesImage: {
        modifiers: {
          quality: '80',
          sizes: 'sm:100vw md:50vw',
        }
      }
    }
  },

  plugins: [{ src: '~/plugins/router-nprogress.ts', mode: 'client' }],

  // css import
  css: ['@/assets/css/main.css'],

  // turn on ssr mode to optimize seo
  ssr: true,

  colorMode: {
    classSuffix: '',
  },
  schemaOrg: {
    enabled: true,
  },
  ogImage: {
    enabled: true,
  },
  sitemap: {
    enabled: true,
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://gensokyoreimagined.net',
    name: 'Gensokyo Reimagined',
    description: 'Welcome to Gensokyo!',
  },

  // Nuxt-i18n
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    strategy: 'prefix_and_default',
    locales: [
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    lazy: true,
  },

  experimental: {
    writeEarlyHints: true,
    payloadExtraction: true,
  },
  compatibilityDate: '2024-10-20',
})