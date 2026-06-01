// vue-i18n runtime options. Module options (locales, strategy, langDir) stay in nuxt.config.ts.
export default defineI18nConfig(() => ({
  // Fall back to English for any keys not yet translated in a locale (e.g. the store.* strings
  // until they're translated via Weblate), instead of rendering raw key paths.
  fallbackLocale: 'en',
}))
