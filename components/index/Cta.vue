<template>
  <!-- IP card -->
  <div v-if="appConfig.IPCtaShow" class="bg-[var(--md-sys-color-background)]">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
          class="overflow-hidden bg-[var(--md-sys-color-error)] rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <nuxt-img
              :src="appConfig.IndexIPCtaImg"
              alt="App screenshot"
              class="object-cover object-left-top transform rounded-md sm:translate-x-16 lg:translate-y-20"
              height="300"
              loading="lazy"
              quality="80"
              sizes="sm:100vw md:50vw lg:400px"
              width="400"
          />
        </div>
        <div
            class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:pl-10 xl:pr-4"
        >
          <div class="lg:self-center">
            <h2
                class="text-3xl font-extrabold text-[var(--md-sys-color-on-error)] sm:text-4xl"
            >
              <span class="block">
                {{ $t('index.IPcta.title') }}
              </span>
              <!--
              <span class="block">
                {{ $t('index.cta.subtitle') }}
              </span>-->
            </h2>
            <p
                class="mt-4 text-lg leading-6 text-[var(--md-sys-color-error-container)]"
            >
              {{ $t('index.IPcta.description') }}
            </p>
            <p>
              <span
                  class="mr-8 text-lg leading-6 text-[var(--md-sys-color-error-container)]"
              >
                {{ $t('index.IPcta.survivaltitle') }}:
              </span>
              <button
                  class="font-mono inline-flex items-center px-5 py-1 my-4 text-xs font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-on-error)] border border-transparent rounded-md shadow hover:bg-[var(--md-sys-color-error-container)]"
                  @click="copyToClipboard(appConfig.SurvivalServerIP)"
              >
                {{ appConfig.SurvivalServerIP }}
                <i :class="iconClass"></i>
              </button>
            </p>
            <p>
              <span
                  class="mr-8 text-lg leading-6 text-[var(--md-sys-color-error-container)]"
              >
                {{ $t('index.IPcta.buildtitle') }}:
              </span>
              <button
                  class="font-mono inline-flex items-center px-5 py-1 my-4 text-xs font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-on-error)] border border-transparent rounded-md shadow hover:bg-[var(--md-sys-color-error-container)]"
                  @click="copyToClipboard(appConfig.BuildServerIP)"
              >
                {{ appConfig.BuildServerIP }}
                <i :class="iconClass"></i>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- discord card -->
  <div v-if="appConfig.DCCtaShow" class="bg-[var(--md-sys-color-background)]">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
          class="overflow-hidden bg-[var(--md-sys-color-error)] rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div
            class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="lg:self-center">
            <h2
                class="text-3xl font-extrabold text-[var(--md-sys-color-on-error)] sm:text-4xl"
            >
              <span class="block">
                {{ $t('index.cta.title') }}
              </span>
              <!--
              <span class="block">
                {{ $t('index.cta.subtitle') }}
              </span>-->
            </h2>
            <p
                class="mt-4 text-lg leading-6 text-[var(--md-sys-color-error-container)]"
            >
              {{ $t('index.cta.description') }}
            </p>
            <a
                :href="appConfig.DCLink"
                class="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-on-error)] border border-transparent rounded-md shadow hover:bg-[var(--md-sys-color-error-container)]"
                target="_blank"
            >
              {{ $t('index.cta.button') }}
              <i class="fa-solid fa-arrow-up-right-from-square ml-3 -mr-1"></i>
            </a>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <nuxt-img
              :src="appConfig.IndexCtaImg"
              alt="App screenshot"
              class="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
              height="300"
              loading="lazy"
              quality="80"
              sizes="sm:100vw md:50vw lg:400px"
              width="400"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- modpack card -->
  <div v-if="appConfig.MPCtaShow" class="bg-[var(--md-sys-color-background)]">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
          class="overflow-hidden bg-[var(--md-sys-color-error)] rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <nuxt-img
              :src="appConfig.IndexModPackCtaImg"
              alt="App screenshot"
              class="object-cover object-left-top transform rounded-md sm:translate-x-16 lg:translate-y-20"
              height="300"
              loading="lazy"
              quality="80"
              sizes="sm:100vw md:50vw lg:400px"
              width="400"
          />
        </div>
        <div
            class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="lg:self-center">
            <h2
                class="text-3xl font-extrabold text-[var(--md-sys-color-on-error)] sm:text-4xl"
            >
              <span class="block">
                {{ $t('index.MPcta.title') }}
              </span>
              <!--
              <span class="block">
                {{ $t('index.cta.subtitle') }}
              </span>-->
            </h2>
            <!--
            <p
              class="mt-4 text-lg leading-6 text-[var(--md-sys-color-error-container)]"
            >
              {{ $t('index.MPcta.description') }}
            </p>-->
            <a
                :href="appConfig.MPLink"
                class="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-on-error)] border border-transparent rounded-md shadow hover:bg-[var(--md-sys-color-error-container)]"
                target="_blank"
            >
              {{ $t('index.MPcta.button') }}
              <i class="fa-solid fa-arrow-up-right-from-square ml-3 -mr-1"></i>
            </a>
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
    return {
      appConfig,
    }
  },
  methods: {
    copyToClipboard(text) {
      try {
        this.iconClass = 'fa-solid fa-copy ml-3 -mr-1'
        navigator.clipboard.writeText(text)
        this.iconClass = 'fa-solid fa-check ml-3 -mr-1'
        setTimeout(() => {
          this.iconClass = 'fa-solid fa-copy ml-3 -mr-1'
        }, 3000)
      } catch (e) {
        console.error(e)
        this.iconClass = 'fa-solid fa-xmark ml-3 -mr-1'
      }
    },
  },
  data() {
    return {
      iconClass: 'fa-solid fa-copy ml-3 -mr-1',
    }
  },
}
</script>
