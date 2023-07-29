<template>
  <nav class="fixed w-full shadow-lg z-[100] bg-white">
    <div class="px-10 mx-auto">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="/logo.svg" alt="Logo">
            <img class="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Logo">
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <nuxt-link to="#" class="px-3 py-2 text-gray-900 font-medium">
              {{ $t('Navbar.home') }}
            </nuxt-link>
            <nuxt-link to="#" class="px-3 py-2 text-gray-500 hover:text-gray-900 font-medium">
              {{ $t('Navbar.about') }}
            </nuxt-link>
            <nuxt-link to="#" class="px-3 py-2 text-gray-500 hover:text-gray-900 font-medium">
              {{ $t('Navbar.contact') }}
            </nuxt-link>
          </div>
        </div>
        <div class="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4">
          <div class="relative">
            <button
              class="text-xl leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5"
              @click="toggleDropdown()">
              <i class="twa" :class="getFlag(selectedLang)"></i>
              <svg :class="{ 'transform rotate-180': isDropdownOpen }" width="6" height="3" class="ml-2 overflow-visible"
                aria-hidden="true">
                <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                </path>
              </svg>
            </button>
            <div v-if="isDropdownOpen"
              class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5"
              id="headlessui-menu-items-:r1:" role="menu" tabindex="0">
              <nuxt-link v-for="language in languages" :key="language.lang" :to="switchLocalePath(language.lang)"
                class="block px-3 py-1" :class="{ 'text-blue-500': language.lang === selectedLang }" role="menuitem"
                tabindex="-1">
                <i class="twa" :class="language.flag"></i>{{ language.name }}
              </nuxt-link>
            </div>
          </div>
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            @click="toggleColorMode">
            <i :class="ColorButtonClass"></i>
          </button>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="isMenuOpen = !isMenuOpen" type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            :aria-expanded="isMenuOpen" :class="{ 'bg-gray-100': isMenuOpen }">
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
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition duration-150 ease-in-out">
          {{ $t('Navbar.home') }}
        </nuxt-link>
        <nuxt-link to="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
          {{ $t('Navbar.about') }}
        </nuxt-link>
        <nuxt-link to="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
          {{ $t('Navbar.contact') }}
        </nuxt-link>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="space-x-2 flex items-center px-5 justify-between">
          <div class="relative">
            <button
              class="text-xl leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5"
              @click="toggleDropdown()">
              <i class="twa" :class="getFlag(selectedLang)"></i>
              <svg :class="{ 'transform rotate-180': isDropdownOpen }" width="6" height="3" class="ml-2 overflow-visible"
                aria-hidden="true">
                <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                </path>
              </svg>
            </button>
            <div v-if="isDropdownOpen"
              class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5"
              id="headlessui-menu-items-:r1:" role="menu" tabindex="0">
              <nuxt-link v-for="language in languages" :key="language.lang" :to="switchLocalePath(language.lang)"
                class="block px-3 py-1" :class="{ 'text-blue-500': language.lang === selectedLang }" role="menuitem"
                tabindex="-1">
                <i class="twa" :class="language.flag"></i>{{ language.name }}
              </nuxt-link>
            </div>
          </div>
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            @click="toggleColorMode">
            <i :class="ColorButtonClass"></i>
          </button>
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
    return {
      switchLocalePath
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
        this.ColorButtonClass = 'fa-duotone fa-sun'
      } else {
        this.$colorMode.preference = 'dark'
        this.ColorButtonClass = 'fa-duotone fa-moon'
      }
    }
  },
  mounted () {
    if (this.$colorMode.preference === 'dark') {
      this.ColorButtonClass = 'fa-duotone fa-moon'
    } else {
      this.ColorButtonClass = 'fa-duotone fa-sun'
    }
  }
};
</script>