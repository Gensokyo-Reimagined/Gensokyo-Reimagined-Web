<template>
  <div class="relative">
    <button
        class="text-xl leading-5 font-semibold bg-[var(--md-sys-color-secondary-container)] rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-[var(--md-sys-color-tertiary-container)] dark:highlight-white/5"
        @click="toggleDropdown()"
    >
      <i class="twa" :class="getFlag(selectedLang)"></i>
      <svg
          :class="{ 'transform rotate-180': isDropdownOpen }"
          width="6"
          height="3"
          class="ml-2 overflow-visible"
          aria-hidden="true"
      >
        <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
        ></path>
      </svg>
    </button>
    <div
        v-if="isDropdownOpen"
        class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-[var(--md-sys-color-background)] shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-[var(--md-sys-color-on-background)]"
        id="headlessui-menu-items-:r1:"
        role="menu"
        tabindex="0"
    >
      <nuxt-link
          v-for="language in languages"
          :key="language.lang"
          @click.prevent.stop="setLocale(language.lang)"
          class="block px-3 py-1 cursor-pointer"
          :class="{
                  'text-[var(--md-sys-color-secondary)] ':
                    language.lang === selectedLang,
                }"
          role="menuitem"
          tabindex="-1"
      >
        <i
            class="twa"
            style="margin-right: 10px"
            :class="language.flag"
        ></i
        >{{ language.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const {setLocale} = useI18n()
    return {
      setLocale,
    }
  },
  computed: {
    selectedLang() {
      return this.$i18n.locale
    },
  },
  data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false,
      ColorButtonClass: '',
      //selectedLang: this.$i18n.locale,
      languages: [
        {
          lang: 'en',
          name: 'English',
          flag: 'twa-flag-united-states',
        },
        {
          lang: 'ja',
          name: '日本語',
          flag: 'twa-flag-japan',
        },
        {
          lang: 'zh',
          name: '简体中文',
          flag: 'twa-flag-china',
        },
        {
          lang: 'hk',
          name: '繁體中文',
          flag: 'twa-flag-hong-kong-sar-china',
        },
        {
          lang: 'es',
          name: 'español',
          flag: 'twa-flag-spain',
        },
        {
          lang: 'fr',
          name: 'français',
          flag: 'twa-flag-france',
        },
        {
          lang: 'de',
          name: 'Deutsch',
          flag: 'twa-flag-germany',
        },
        {
          lang: 'pl',
          name: 'polski',
          flag: 'twa-flag-poland',
        },
        {
          lang: 'el',
          name: 'ελληνικά',
          flag: 'twa-flag-greece',
        },
        {
          lang: 'ru',
          name: 'русский',
          flag: 'twa-flag-russia',
        },
        {
          lang: 'tr',
          name: 'Türkçe',
          flag: 'twa-flag-turkey',
        },
        {
          lang: 'uk',
          name: 'українська',
          flag: 'twa-flag-ukraine',
        },
        {
          lang: 'cs',
          name: 'čeština',
          flag: 'twa-flag-czechia',
        },
        {
          lang: 'it',
          name: 'italiano',
          flag: 'twa-flag-italy',
        },
        {
          lang: 'th',
          name: 'ภาษาไทย',
          flag: 'twa-flag-thailand',
        },
        {
          lang: 'lt',
          name: 'Lietuvių',
          flag: 'twa-flag-lithuania',
        },
        {
          lang: 'by',
          name: 'беларуская',
          flag: 'twa-flag-belarus',
        },
      ],
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    getFlag(lang) {
      const selectedLanguage = this.languages.find(
          (language) => language.lang === lang
      )

      if (selectedLanguage) {
        return selectedLanguage.flag
      }
    },
  }
}
</script>