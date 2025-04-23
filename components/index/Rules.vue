<template>
  <div class="relative bg-[var(--md-sys-color-on-secondary-container)]">
    <div
        class="h-56 bg- bg-[var(--md-sys-color-background)] sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <nuxt-img
          :src="appConfig.IndexRulesImg"
          alt="Rules image"
          class="object-cover w-full h-full"
          loading="lazy"
          quality="80"
          sizes="sm:100vw md:50vw lg:400px"
      />
    </div>
    <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <!--
        <h2 class="text-base font-semibold tracking-wider text-[var(--md-sys-color-outline)] uppercase">
          {{ $t('index.rules.title') }}
        </h2>-->
        <p
            class="mt-2 text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-background)] sm:text-4xl"
        >
          {{ $t('index.rules.subtitle') }}
        </p>
        <p class="mt-3 text-lg text-[var(--md-sys-color-outline)]">
          {{ $t('index.rules.description') }}
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-secondary-container)] border border-transparent rounded-md hover:bg-[var(--md-sys-color-primary-container)"
                :href="appConfig.RulesUrl"
                target="_blank"
            >
              {{ $t('index.rules.button') }}
              <i class="fa-solid fa-arrow-up-right-from-square ml-3 -mr-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const appConfig = useAppConfig()
</script>
