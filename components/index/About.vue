<template>
  <div class="bg-[var(--md-sys-color-background)]">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row relative">
      <div class="info order-last mt-5 md:order-first md:mr-4 md:mt-0">
        <div
          class="text-2xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-3xl md:text-4xl">
          <span class="block text-[var(--md-sys-color-primary)] xl:inline">{{ $t('index.about.title') }}</span>
        </div>
        <div
          class="text-lg font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-xl md:text-2xl">
          <span class="block text-[var(--md-sys-color-outline)] xl:inline">{{ $t('index.about.subtitle') }}</span>
        </div>
        <hr class="my-2 border-y-0 md:border-y-2 bg-[var(--md-sys-color-tertiary-container)]">
        <div class="text-base md:text-lg font-medium leading-6 text-[var(--md-sys-color-on-background)]"
          v-html="$t('index.about.description')">

        </div>
      </div>
      <div class="order-first mx-auto md:ml-auto md:mb-auto md:mx-0 md:order-last md:self-endS max-w-xl">
        <img :src="appConfig.IndexAbobutImg" class="rounded-xl">
      </div>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>

<style scoped></style>