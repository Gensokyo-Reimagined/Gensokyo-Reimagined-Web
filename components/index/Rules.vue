<template>
  <div class="relative py-20 bg-[var(--md-sys-color-background)]">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative rounded-3xl overflow-hidden bg-[var(--md-sys-color-on-secondary-container)] shadow-2xl">
        <div class="grid lg:grid-cols-2 gap-0">
          <!-- Image Section -->
          <div class="h-64 sm:h-80 lg:h-auto">
            <nuxt-img
                :src="appConfig.IndexRulesImg"
                alt="Rules image"
                class="object-cover w-full h-full"
                loading="lazy"
                quality="80"
            />
          </div>

          <!-- Content Section -->
          <div class="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <p class="text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-background)] sm:text-4xl mb-4">
              {{ $t('index.rules.subtitle') }}
            </p>
            <p class="text-lg text-[var(--md-sys-color-outline)] mb-8">
              {{ $t('index.rules.description') }}
            </p>
            <div>
              <a
                  :href="appConfig.RulesUrl"
                  class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-secondary-container)] border border-transparent rounded-xl hover:bg-[var(--md-sys-color-primary-container)] hover:scale-105 transition-all duration-300 shadow-lg"
                  target="_blank"
              >
                {{ $t('index.rules.button') }}
                <i class="fa-solid fa-arrow-up-right-from-square ml-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
</script>