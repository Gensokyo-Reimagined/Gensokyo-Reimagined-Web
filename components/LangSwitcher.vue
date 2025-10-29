<template>
  <div
      class="relative"
      @mouseleave="handleMouseLeave"
  >
    <button
        :aria-expanded="isDropdownOpen"
        aria-label="Change language"
        class="text-xl leading-5 font-semibold bg-[var(--md-sys-color-secondary-container)] rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-[var(--md-sys-color-tertiary-container)] dark:highlight-white/5 transition-colors duration-200"
        @click="toggleDropdown"
    >
      <i :class="getFlag(selectedLang)" class="twa"></i>
      <svg
          :class="{ 'rotate-180': isDropdownOpen }"
          aria-hidden="true"
          class="ml-2 overflow-visible transition-transform duration-200"
          height="3"
          width="6"
      >
        <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
        ></path>
      </svg>
    </button>

    <transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 transform scale-95 -translate-y-2"
        enter-to-class="opacity-100 transform scale-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 transform scale-100 translate-y-0"
        leave-to-class="opacity-0 transform scale-95 -translate-y-2"
    >
      <div
          v-if="isDropdownOpen"
          id="language-dropdown"
          class="absolute top-full mt-2 py-2 w-40 rounded-lg bg-[var(--md-sys-color-background)] shadow-lg ring-1 ring-black/5 text-sm leading-6 font-semibold text-[var(--md-sys-color-on-background)] z-50"
          role="menu"
          @mouseenter="cancelClose"
          @mouseleave="scheduleClose"
      >
        <button
            v-for="language in languages"
            :key="language.lang"
            :class="[
              'w-full text-left px-3 py-2 cursor-pointer transition-all duration-150',
              'hover:bg-[var(--md-sys-color-surface-variant)]',
              language.lang === selectedLang
                ? 'text-[var(--md-sys-color-secondary)] bg-[var(--md-sys-color-surface-variant)]/50'
                : 'text-[var(--md-sys-color-on-background)]'
            ]"
            role="menuitem"
            @click="setLanguage(language.lang)"
        >
          <div class="flex items-center">
            <i
                :class="language.flag"
                class="twa mr-3 transition-transform duration-200"
            ></i>
            <span class="transition-all duration-200 group-hover:font-bold">
              {{ language.name }}
            </span>
          </div>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
const { setLocale, locale } = useI18n()

const isDropdownOpen = ref(false)
const closeTimeout = ref(null)

const languages = ref([
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
])

const selectedLang = computed(() => locale.value)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
  if (!isDropdownOpen.value) {
    clearTimeout(closeTimeout.value)
  }
}

const setLanguage = (lang) => {
  setLocale(lang)
  isDropdownOpen.value = false
  clearTimeout(closeTimeout.value)
}

const getFlag = (lang) => {
  const selectedLanguage = languages.value.find(
      (language) => language.lang === lang
  )
  return selectedLanguage ? selectedLanguage.flag : 'twa-flag-united-states'
}

const handleMouseLeave = () => {
  if (isDropdownOpen.value) {
    closeTimeout.value = setTimeout(() => {
      isDropdownOpen.value = false
    }, 300)
  }
}

const cancelClose = () => {
  clearTimeout(closeTimeout.value)
}

const scheduleClose = () => {
  if (isDropdownOpen.value) {
    closeTimeout.value = setTimeout(() => {
      isDropdownOpen.value = false
    }, 150)
  }
}

const handleClickOutside = (event) => {
  const dropdown = document.getElementById('language-dropdown')
  const button = event.target.closest('button')

  if (dropdown && !dropdown.contains(event.target) && button === null) {
    isDropdownOpen.value = false
    clearTimeout(closeTimeout.value)
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  clearTimeout(closeTimeout.value)
})
</script>

<style scoped>
.z-50 {
  z-index: 50;
}
</style>