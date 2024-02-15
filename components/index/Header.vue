<template>
  <div
    class="relative overflow-hidden bg-[var(--md-sys-color-background)] pt-16 lg:h-screen"
  >
    <div class="mx-auto max-w-7xl lg:h-screen flex items-center justify-center">
      <div
        class="max-lg:absolute max-lg:top-16 max-lg:left-0 lg:relative z-10 pt-10 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 flex justify-center"
      >
        <nuxt-img
          class="lg:absolute lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 object-cover max-lg:w-1/2 max-lg:h-1/2"
          :src="logoImg"
          quality="50"
          sizes="sm:100vw md:50vw lg:800px"
          alt="current image"
        />
      </div>
    </div>
    <div
      class="lg:pt-16 lg:absolute lg:inset-y-0 lg:right-0 w-full lg:h-screen lg:blur-sm"
    >
      <swiper
        class="w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
        :slidesPerView="1"
        :loop="true"
        :autoplay="{
          delay: changeTime,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide
          class="transition-opacity ease-in-out"
          v-for="currentImageUrl in imageUrls"
          :key="currentImageUrl"
        >
          <nuxt-img
            class="w-full lg:h-screen object-cover"
            :src="currentImageUrl"
            quality="50"
            sizes="sm:100vw md:50vw lg:800px"
            alt="current image"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="absolute inset-0 max-md:hidden">
      <div
        class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-[var(--md-sys-color-background)] h-24"
      ></div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import { Autoplay } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const appConfig = useAppConfig()

    const state = reactive({
      appConfig: appConfig,
    })

    return { state, modules: [Autoplay] }
  },
  data() {
    return {
      imageUrls: this.state.appConfig.IndexHeaderImg,
      changeTime: this.state.appConfig.IndexHeaderImgChangeTime,
      logoImg: this.state.appConfig.HeaderLogoImg,
    }
  },
}
</script>
