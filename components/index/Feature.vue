<template>
  <div id="features" class="relative py-20 overflow-hidden">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
      <div class="lg:text-center mb-16">
        <p
            class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-[var(--md-sys-color-on-background)] sm:text-4xl"
        >
          {{ $t('index.feature.subtitle') }}
        </p>
        <div class="flex justify-center mt-4">
          <div class="h-1 w-20 rounded-full bg-[var(--md-sys-color-primary)]"></div>
        </div>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div
            v-for="(feature, index) in features"
            :key="feature.name"
            class="group relative feature-card flex flex-col"
        >
          <div
              class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 spell-border"
          >
            <div class="h-full w-full rounded-xl bg-[var(--md-sys-color-background)]"></div>
          </div>

          <div
              class="relative rounded-xl p-6 bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col h-full"
          >
            <div class="flex items-start mb-4">
              <div
                  class="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              >
                <i :class="feature.icon" class="text-2xl"></i>
              </div>
              <div class="ml-4 flex-1">
                <h3
                    class="text-xl font-bold mb-2 text-[var(--md-sys-color-on-background)]"
                >
                  {{ $t(feature.name) }}
                </h3>
                <p
                    class="text-base leading-relaxed text-[var(--md-sys-color-outline)]"
                >
                  {{ $t(feature.description) }}
                </p>
              </div>
            </div>

            <div class="relative mt-auto rounded-lg overflow-hidden">
              <div class="aspect-[16/9] w-full">
                <nuxt-img
                    :alt="$t(feature.name)"
                    :src="feature.img"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    placeholder
                    preset="featureCard"
                />
              </div>
              <div
                  class="absolute inset-0 bg-gradient-to-br from-[var(--md-sys-color-primary)] to-[var(--md-sys-color-tertiary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              ></div>
            </div>

            <div
                class="absolute top-4 right-4 w-16 h-16 opacity-10 dot-pattern"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const appConfig = useAppConfig()
    const state = reactive({
      appConfig: appConfig,
    })
    return {state}
  },
  data() {
    return {
      features: [
        {
          name: 'index.feature.items[0].name',
          description: 'index.feature.items[0].description',
          icon: this.state.appConfig.IndexFeatureIcon[0],
          img: this.state.appConfig.IndexFeatureImg[0],
        },
        {
          name: 'index.feature.items[1].name',
          description: 'index.feature.items[1].description',
          icon: this.state.appConfig.IndexFeatureIcon[1],
          img: this.state.appConfig.IndexFeatureImg[1],
        },
        {
          name: 'index.feature.items[2].name',
          description: 'index.feature.items[2].description',
          icon: this.state.appConfig.IndexFeatureIcon[2],
          img: this.state.appConfig.IndexFeatureImg[2],
        },
        {
          name: 'index.feature.items[3].name',
          description: 'index.feature.items[3].description',
          icon: this.state.appConfig.IndexFeatureIcon[3],
          img: this.state.appConfig.IndexFeatureImg[3],
        },
      ],
    }
  },
}
</script>

<style scoped>
.spell-border {
  background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-secondary-container) 100%);
  padding: 2px;
}

.dot-pattern {
  background-image: radial-gradient(circle, var(--md-sys-color-primary) 1px, transparent 1px);
  background-size: 8px 8px;
}
</style>