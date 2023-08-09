<template>
  <div class=" bg-[var(--md-sys-color-background)]">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="overflow-hidden bg-[var(--md-sys-color-error)] rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-[var(--md-sys-color-on-error)] sm:text-4xl">
              <span class="block">
                {{ $t('index.cta.title') }}
              </span>
              <span class="block">
                {{ $t('index.cta.subtitle') }}
              </span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-[var(--md-sys-color-error-container)]">
              {{ $t('index.cta.description') }}
            </p>
            <a href="https://discord.gg/U9fZSJJcte" target="_blank"
              class="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-on-error)] border border-transparent rounded-md shadow hover:bg-[var(--md-sys-color-error-container)">
              {{ $t('index.cta.button') }}
              <i class="fa-solid fa-arrow-up-right-from-square ml-3 -mr-1"></i>
            </a>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <nuxt-img
            class="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
            :src="appConfig.IndexCtaImg" alt="App screenshot" quality="80" loading="lazy"
            sizes="sm:100vw md:50vw lg:400px" width="400" height="300" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const appConfig = useAppConfig()
</script>