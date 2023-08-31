<template>
  <nav class="fixed w-full shadow-lg z-[100] bg-[var(--md-sys-color-background)]">
    <div class="px-10 mx-auto">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <nuxt-img class="block lg:hidden h-8 w-auto" src="/logo.svg" alt="Logo" quality="80" loading="lazy"
              sizes="sm:100vw md:50vw lg:400px" />
            <nuxt-img class="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Logo" quality="80" loading="lazy"
              sizes="sm:100vw md:50vw lg:400px" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <nuxt-link to="/"
              class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium">
              {{ $t('Navbar.home') }}
            </nuxt-link>
            <a :href="appConfig.NavBarLinkAbout"
              class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium">
              {{ $t('Navbar.about') }}
            </a>
            <a :href="appConfig.NavBarLinkWiki"
              class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium">
              {{ $t('Navbar.wiki') }}
            </a>
            <a :href="appConfig.NavBarLinkMap"
              class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium">
              {{ $t('Navbar.map') }}
            </a>
            <a :href="appConfig.NavBarLinkTranslation"
              class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium">
              {{ $t('Navbar.translation') }}
            </a>
          </div>
        </div>
        <div class="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4">
          <div class="relative">
            <button
              class="text-xl leading-5 font-semibold bg-[var(--md-sys-color-secondary-container)] rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-[var(--md-sys-color-tertiary-container)] dark:highlight-white/5"
              @click="toggleDropdown()">
              <i class="twa" :class="getFlag(selectedLang)"></i>
              <svg :class="{ 'transform rotate-180': isDropdownOpen }" width="6" height="3" class="ml-2 overflow-visible "
                aria-hidden="true">
                <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                </path>
              </svg>
            </button>
            <div v-if="isDropdownOpen"
              class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-[var(--md-sys-color-background)] shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-[var(--md-sys-color-on-background)]"
              id="headlessui-menu-items-:r1:" role="menu" tabindex="0">
              <nuxt-link v-for="language in languages" :key="language.lang" :to="switchLocalePath(language.lang)"
                class="block px-3 py-1"
                :class="{ 'text-[var(--md-sys-color-secondary)] ': language.lang === selectedLang }" role="menuitem"
                tabindex="-1">
                <i class="twa" :class="language.flag"></i>{{ language.name }}
              </nuxt-link>
            </div>
          </div>
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]  "
            @click="toggleColorMode">
            <i :class="ColorButtonClass"></i>
          </button>
          <a class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]  "
            :href="appConfig.NavBarLinkGithub">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="isMenuOpen = !isMenuOpen" type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)] "
            :aria-expanded="isMenuOpen" :class="{ 'bg-[var(--md-sys-color-secondary-container)]': isMenuOpen }">
            <svg :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }" class="h-6 w-6" stroke="currentColor" fill="none"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }" class="h-6 w-6" stroke="currentColor" fill="none"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:hidden ">
      <div class="px-2 pt-2 pb-3">
        <nuxt-link to="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]">
          {{ $t('Navbar.home') }}
        </nuxt-link>
        <a :href="appConfig.NavBarLinkAbout"
          class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]">
          {{ $t('Navbar.about') }}
        </a>
        <a :href="appConfig.NavBarLinkWiki"
          class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]">
          {{ $t('Navbar.wiki') }}
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="space-x-2 flex items-center px-5 justify-between">
          <div class="relative">
            <button
              class="text-xl leading-5 font-semibold bg-[var(--md-sys-color-secondary-container)] rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-[var(--md-sys-color-tertiary-container)] dark:highlight-white/5"
              @click="toggleDropdown()">
              <i class="twa" :class="getFlag(selectedLang)"></i>
              <svg :class="{ 'transform rotate-180': isDropdownOpen }" width="6" height="3" class="ml-2 overflow-visible "
                aria-hidden="true">
                <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                </path>
              </svg>
            </button>
            <div v-if="isDropdownOpen"
              class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-[var(--md-sys-color-background)] shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-[var(--md-sys-color-on-background)]"
              id="headlessui-menu-items-:r1:" role="menu" tabindex="0">
              <nuxt-link v-for="language in languages" :key="language.lang" :to="switchLocalePath(language.lang)"
                class="block px-3 py-1"
                :class="{ 'text-[var(--md-sys-color-secondary)] ': language.lang === selectedLang }" role="menuitem"
                tabindex="-1">
                <i class="twa" :class="language.flag"></i>{{ language.name }}
              </nuxt-link>
            </div>
          </div>
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]  "
            @click="toggleColorMode">
            <i :class="ColorButtonClass"></i>
          </button>
          <a class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]  "
            :href="appConfig.NavBarLinkGithub">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    selectedLang () {
      return this.$i18n.locale
    }
  },
  setup () {
    const switchLocalePath = useSwitchLocalePath()
    const appConfig = useAppConfig()
    return {
      switchLocalePath,
      appConfig
    }
  },
  data () {
    return {
      isMenuOpen: false,
      isDropdownOpen: false,
      ColorButtonClass: "",
      //selectedLang: this.$i18n.locale,
      languages: [
        {
          lang: "en",
          name: "English",
          flag: "twa-flag-united-states"
        }, {
          lang: "ja",
          name: "日本語",
          flag: "twa-flag-japan"
        },
        {
          lang: "zh",
          name: "简体中文",
          flag: "twa-flag-china"
        },
        {
          lang: "es",
          name: "español",
          flag: "twa-flag-spain"
        },
        {
          lang: "fr",
          name: "français",
          flag: "twa-flag-france"
        },
        {
          lang: "de",
          name: "Deutsch",
          flag: "twa-flag-germany"
        },
        {
          lang: "pl",
          name: "polski",
          flag: "twa-flag-poland"
        },
        {
          lang: "el",
          name: "ελληνικά",
          flag: "twa-flag-greece"
        },
        {
          lang: "ru",
          name: "русский",
          flag: "twa-flag-russia"
        },
        {
          lang: "tr",
          name: "Türkçe",
          flag: "twa-flag-turkey"
        },
        {
          lang: "uk",
          name: "українська",
          flag: "twa-flag-ukraine"
        },
        {
          lang: "cs",
          name: "čeština",
          flag: "twa-flag-czechia"
        },
        {
          lang: "it",
          name: "italiano",
          flag: "twa-flag-italy"
        },
      ]
    };
  },
  methods: {

    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    getFlag (lang) {
      const selectedLanguage = this.languages.find(
        language => language.lang === lang
      );

      if (selectedLanguage) {
        return selectedLanguage.flag;
      }
    },
    toggleColorMode () {
      if (this.$colorMode.preference === 'dark') {
        this.$colorMode.preference = 'light'
        this.ColorButtonClass = 'fa-solid fa-sun'
      } else {
        this.$colorMode.preference = 'dark'
        this.ColorButtonClass = 'fa-solid fa-moon'
      }
    }
  },
  mounted () {
    if (this.$colorMode.preference === 'dark') {
      this.ColorButtonClass = 'fa-solid fa-moon'
    } else {
      this.ColorButtonClass = 'fa-solid fa-sun'
    }
  }
};
</script>