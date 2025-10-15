<template>
  <div class="relative bg-[var(--md-sys-color-background)]">
    <div
      id="aboutus"
      class="pt-20 pb-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative"
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="info order-last lg:order-first space-y-6">
          <div class="inline-block">
            <span class="text-sm font-semibold tracking-wider text-[var(--md-sys-color-primary)] uppercase px-4 py-2 bg-[var(--md-sys-color-primary-container)] rounded-full">
              {{ $t('index.about.title') }}
            </span>
          </div>
          
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] leading-tight">
            {{ $t('index.about.subtitle') }}
          </h2>
          
          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-[var(--md-sys-color-outline)] leading-relaxed">
              {{ $t('index.about.description') }}
            </p>
          </div>

          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center p-4 rounded-xl bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] stat-card">
              <div class="text-3xl font-bold text-[var(--md-sys-color-primary)]">0</div>
              <div class="text-sm text-[var(--md-sys-color-outline)] mt-1">Mods Required</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] stat-card">
              <div class="text-3xl font-bold text-[var(--md-sys-color-primary)]">100%</div>
              <div class="text-sm text-[var(--md-sys-color-outline)] mt-1">Accessibility</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] stat-card">
              <div class="text-3xl font-bold text-[var(--md-sys-color-primary)]">∞</div>
              <div class="text-sm text-[var(--md-sys-color-outline)] mt-1">Possibilities</div>
            </div>
          </div>
        </div>

        <div class="order-first lg:order-last">
          <div class="relative">
            <div class="absolute -top-4 -right-4 w-72 h-72 bg-[var(--md-sys-color-primary)] opacity-10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-4 -left-4 w-72 h-72 bg-[var(--md-sys-color-tertiary)] opacity-10 rounded-full blur-3xl"></div>
            
            <div class="relative rounded-2xl overflow-hidden border-4 border-[var(--md-sys-color-outline-variant)] shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <nuxt-img
                :src="appConfig.IndexAbobutImg"
                alt="Gensokyo Reimagined"
                class="w-full h-auto"
                loading="lazy"
                quality="90"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[var(--md-sys-color-background)] via-transparent to-transparent opacity-40"></div>
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

<style scoped>
.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Ensure smooth transitions */
* {
  transition-property: transform, opacity, background-color, border-color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
</style>