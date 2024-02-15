<template>
  <div class="bg-[var(--md-sys-color-background)]">
    <navbar>
      <main
        class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-[11] relative"
      >
        <div
          class="text-center lg:bg-white/30 lg:dark:bg-black/30 lg:backdrop-blur lg:p-5 lg:rounded-xl"
        >
          <h1
            class="text-4xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-5xl md:text-6xl"
          >
            <span class="block text-[var(--md-sys-color-primary)] xl:inline">
              {{ $t('servername') }}
            </span>
            <!--<span class="block xl:inline">
                  {{ $t('index.header.title') }}
                </span>-->
          </h1>
          <p
            class="mt-3 text-base text-[var(--md-sys-color-outline)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
          >
            {{ $t('index.header.intro') }}
          </p>
          <div class="mt-5 sm:mt-8 sm:flex justify-center">
            <div class="rounded-md shadow">
              <a
                href="https://discord.gg/U9fZSJJcte"
                target="_blank"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-[var(--md-sys-color-background)] bg-[var(--md-sys-color-primary)] border border-transparent rounded-md hover:bg-[var(--md-sys-color-secondary)] md:py-4 md:text-lg md:px-10"
              >
                {{ $t('index.header.group') }}
                <i
                  class="fa-solid fa-arrow-up-right-from-square ml-3 -mr-1"
                ></i>
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <nuxt-link
                to="#features"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-secondary-container)] border border-transparent rounded-md hover:bg-[var(--md-sys-color-primary-container)] md:py-4 md:text-lg md:px-10"
              >
                {{ $t('index.header.continue') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </main>
    </navbar>
    <div
      class="pt-32 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row relative"
    >
      <div class="info order-last mt-5 md:order-first md:mr-4 md:mt-0">
        <div
          class="text-2xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-3xl md:text-4xl"
        >
          <span class="block text-[var(--md-sys-color-primary)] xl:inline">{{
            $t('index.about.title')
          }}</span>
        </div>
        <div
          class="text-lg font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-xl md:text-2xl"
        >
          <span class="block text-[var(--md-sys-color-outline)] xl:inline">{{
            $t('index.about.subtitle')
          }}</span>
        </div>
        <hr
          class="my-2 border-y-0 md:border-y-2 bg-[var(--md-sys-color-tertiary-container)]"
        />
        <div
          class="text-base md:text-lg font-medium leading-6 text-[var(--md-sys-color-on-background)]"
          v-html="$t('index.about.description')"
        ></div>
      </div>
      <div
        class="order-first mx-auto md:ml-auto md:mb-auto md:mx-0 md:order-last md:self-endS max-w-xl"
      >
        <nuxt-img
          :src="appConfig.IndexAbobutImg"
          class="rounded-xl"
          quality="80"
          loading="lazy"
          alt="about us image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>

<style scoped></style>
