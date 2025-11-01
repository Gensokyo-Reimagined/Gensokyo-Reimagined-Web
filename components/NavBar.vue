<template>
  <nav
      class="fixed w-full shadow-lg z-[100] bg-[var(--md-sys-color-background)]"
  >
    <div class="px-10 mx-auto">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <nuxt-img
                alt="Logo"
                class="block lg:hidden h-8 w-auto"
                loading="lazy"
                quality="80"
                sizes="sm:100vw md:50vw lg:400px"
                src="/logo.svg"
            />
            <nuxt-img
                alt="Logo"
                class="hidden lg:block h-8 w-auto"
                loading="lazy"
                quality="80"
                sizes="sm:100vw md:50vw lg:400px"
                src="/logo.svg"
            />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <nuxt-link
                :to="'/' + selectedLang"
                class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium"
            >
              {{ $t('Navbar.home') }}
            </nuxt-link>
            <a
                :href="appConfig.NavBarLinkAbout"
                class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium"
            >
              {{ $t('Navbar.about') }}
            </a>
            <a
                :href="appConfig.NavBarLinkWiki"
                class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium"
                target="_blank"
            >
              {{ $t('Navbar.wiki') }}
            </a>
            <a
                :href="appConfig.NavBarLinkMap"
                class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium"
                target="_blank"
            >
              {{ $t('Navbar.map') }}
            </a>
            <a
                :href="appConfig.NavBarLinkTranslation"
                class="px-3 py-2 text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)] font-medium"
                target="_blank"
            >
              {{ $t('Navbar.translation') }}
            </a>
          </div>
        </div>
        <div class="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4">
          <LangSwitcher/>
          <button
              v-if="isMounted"
              :aria-label="`Switch to ${nextColorMode} mode`"
              class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]"
              @click="toggleColorMode"
          >
            <i :class="colorButtonClass"></i>
          </button>
          <a
              :href="appConfig.NavBarLinkGithub"
              aria-label="Visit our GitHub repository"
              class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]"
              target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <button
              :aria-expanded="isMenuOpen"
              :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
              :class="{
              'bg-[var(--md-sys-color-secondary-container)]': isMenuOpen,
            }"
              class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]"
              type="button"
              @click="isMenuOpen = !isMenuOpen"
          >
            <svg
                :class="{ hidden: isMenuOpen, block: !isMenuOpen }"
                aria-hidden="true"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
              />
            </svg>
            <svg
                :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
                aria-hidden="true"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="{ block: isMenuOpen, hidden: !isMenuOpen }" class="sm:hidden">
      <div class="px-2 pt-2 pb-3">
        <nuxt-link
            class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]"
            to="#"
        >
          {{ $t('Navbar.home') }}
        </nuxt-link>
        <a
            :href="appConfig.NavBarLinkAbout"
            class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]"
        >
          {{ $t('Navbar.about') }}
        </a>
        <a
            :href="appConfig.NavBarLinkMap"
            class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]"
            target="_blank"
        >
          {{ $t('Navbar.map') }}
        </a>
        <a
            :href="appConfig.NavBarLinkWiki"
            class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]"
            target="_blank"
        >
          {{ $t('Navbar.wiki') }}
        </a>
        <a
            :href="appConfig.NavBarLinkTranslation"
            class="block px-3 py-2 rounded-md text-base font-medium text-[var(--md-sys-color-on-background)] hover:text-[var(--md-sys-color-on-secondary-container)]"
            target="_blank"
        >
          {{ $t('Navbar.translation') }}
        </a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="space-x-2 flex items-center px-5 justify-between">
          <LangSwitcher/>
          <button
              v-if="isMounted"
              :aria-label="`Switch to ${nextColorMode} mode`"
              class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]"
              @click="toggleColorMode"
          >
            <i :class="colorButtonClass"></i>
          </button>
          <a
              :href="appConfig.NavBarLinkGithub"
              aria-label="Visit our GitHub repository"
              class="inline-flex items-center justify-center p-2 rounded-md text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-secondary)] hover:bg-[var(--md-sys-color-secondary-container)] focus:outline-none focus:[var(--md-sys-color-secondary-container)] focus:[var(--md-sys-color-secondary)]"
              target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const appConfig = useAppConfig()
const colorMode = useColorMode()

const isMenuOpen = ref(false)
const isMounted = ref(false)

const selectedLang = computed(() => {
  const { locale } = useI18n()
  return locale.value
})

const nextColorMode = computed(() => {
  const modes = ['system', 'light', 'dark']
  const currentIndex = modes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % modes.length
  return modes[nextIndex]
})

const colorButtonClass = computed(() => {
  console.log(colorMode.preference)
  switch (colorMode.preference) {
    case 'system':
      return 'fa-solid fa-circle-half-stroke'
    case 'light':
      return 'fa-solid fa-sun'
    case 'dark':
      return 'fa-solid fa-moon'
    default:
      return 'fa-solid fa-circle-half-stroke'
  }
})

const toggleColorMode = () => {
  const modes = ['system', 'light', 'dark']
  const currentIndex = modes.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % modes.length
  colorMode.preference = modes[nextIndex]
}

onMounted(() => {
  isMounted.value = true
  if (!colorMode.preference || colorMode.preference === 'system') {
    colorMode.preference = 'system'
  }
})
</script>
