<template>
  <div class="py-12 bg-[var(--md-sys-color-background)]" id="features">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base font-semibold tracking-wide text-[var(--md-sys-color-primary)] uppercase">
          {{ $t('index.feature.title') }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-[var(--md-sys-color-on-background)] sm:text-4xl">
          {{ $t('index.feature.subtitle') }}
        </p>
        <p class="max-w-2xl mt-4 text-xl text-[var(--md-sys-color-outline)] lg:mx-auto"></p>
      </div>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in feature" :key="feature.name" class="relative flex flex-col">
            <dt>
              <div
                class="absolute flex items-center justify-center w-12 h-12 text-[var(--md-sys-color-on-tertiary-container)] bg-[var(--md-sys-color-tertiary-container)] rounded-md">
                <i :class="feature.icon"></i>
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-[var(--md-sys-color-on-background)]"> {{ $t(feature.name)
              }} </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-[var(--md-sys-color-outline)]">
              {{ $t(feature.description) }}
            </dd>
            <div class="mt-auto pt-5 m-5">
              <nuxt-img class="rounded-xl" :src="feature.img" quality="80" loading="lazy"
                sizes="sm:100vw md:50vw lg:400px" width="400" height="212" />
            </div>

          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    const appConfig = useAppConfig()

    const state = reactive({
      appConfig: appConfig,
    })

    return { state }
  },
  data () {
    return {
      feature: [
        {
          name: this.$t('index.feature.items[0].name'),
          description: this.$t('index.feature.items[0].description'),
          icon: this.state.appConfig.IndexFeatureIcon[0],
          img: this.state.appConfig.IndexFeatureImg[0],
        },
        {
          name: this.$t('index.feature.items[1].name'),
          description: this.$t('index.feature.items[1].description'),
          icon: this.state.appConfig.IndexFeatureIcon[1],
          img: this.state.appConfig.IndexFeatureImg[1],
        },
        {
          name: this.$t('index.feature.items[2].name'),
          description: this.$t('index.feature.items[2].description'),
          icon: this.state.appConfig.IndexFeatureIcon[2],
          img: this.state.appConfig.IndexFeatureImg[2],
        },
        {
          name: this.$t('index.feature.items[3].name'),
          description: this.$t('index.feature.items[3].description'),
          icon: this.state.appConfig.IndexFeatureIcon[3],
          img: this.state.appConfig.IndexFeatureImg[3],
        },
      ],
    }
  },
}
</script>
