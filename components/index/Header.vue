<template>
  <div
    class="relative overflow-hidden bg-[var(--md-sys-color-background)] pt-16 lg:h-screen"
  >
    <div class="mx-auto max-w-7xl lg:h-screen flex items-center justify-center">
      <div
        class="max-lg:absolute max-lg:top-16 max-lg:left-0 lg:relative z-10 pt-10 md:pb-20 w-full lg:pb-28 xl:pb-32 flex justify-center"
      >
        <img
          class="lg:absolute lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 object-cover max-lg:w-1/2 max-lg:h-1/2"
          :src="logoImg"
          quality="50"
          sizes="sm:100vw md:50vw lg:800px"
          alt="current image"
        />
      </div>
    </div>
    <div
      class="lg:pt-16 lg:absolute lg:inset-y-0 lg:right-0 w-full lg:h-screen blur-sm"
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
          <img
            class="w-full lg:h-screen object-cover"
            :src="currentImageUrl"
            quality="50"
            sizes="sm:100vw md:50vw lg:800px"
            alt="current image"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="absolute inset-0">
      <div
        class="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-[var(--md-sys-color-background)] lg:h-24 md:h-12 sm:h-6 h-4"
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
  mounted() {
    //suwako kawaii
    console.log(
      `font-size: 1px;padding: 120px 120px;background-image: url(data:image/png;base64,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);background-size: contain;background-repeat: no-repeat;color: transparent;`
    )
  },
}
</script>
