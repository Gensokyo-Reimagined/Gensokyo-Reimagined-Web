<template>
  <div class="relative overflow-hidden pt-16 lg:h-screen">
    <!-- Background Image Carousel with enhanced effects -->
    <div class="lg:pt-16 lg:absolute lg:inset-y-0 lg:right-0 w-full lg:h-screen">
      <swiper
        :autoplay="{
          delay: changeTime,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules"
        :slidesPerView="1"
        class="w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
      >
        <swiper-slide
          v-for="currentImageUrl in imageUrls"
          :key="currentImageUrl"
          class="transition-opacity ease-in-out"
        >
          <nuxt-img
            :src="currentImageUrl"
            alt="Gensokyo Reimagined background"
            class="w-full lg:h-screen object-cover carousel-image"
            quality="60"
            sizes="sm:100vw md:50vw lg:800px"
          />
        </swiper-slide>
      </swiper>
      
      <!-- Enhanced overlay with multiple gradients -->
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--md-sys-color-background)] via-transparent to-[var(--md-sys-color-background)] opacity-60"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--md-sys-color-background)] via-transparent to-[var(--md-sys-color-background)]"></div>
    </div>

    <!-- Logo/Center Content -->
    <div class="mx-auto max-w-7xl lg:h-screen flex items-center justify-center relative z-20">
      <div class="max-lg:pt-10 lg:relative w-full flex justify-center items-center">
        <div class="logo-container relative">
          <!-- Main logo -->
          <nuxt-img
            :src="logoImg"
            alt="Gensokyo Reimagined Logo"
            class="logo-image relative z-10 w-64 h-auto sm:w-80 md:w-96 lg:w-[1000px]"
            quality="80"
          />
        </div>
      </div>
    </div>

    <!-- Bottom gradient fade -->
    <div class="absolute inset-x-0 bottom-0 z-10">
      <div class="h-32 bg-gradient-to-t from-[var(--md-sys-color-background)] to-transparent"></div>
    </div>

    <!-- Scroll indicator (only on large screens) -->
    <div class="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
        <span class="text-sm text-[var(--md-sys-color-outline)] mt-2">Scroll to explore</span>
      </div>
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
      logoImg: this.state.appConfig.HeaderLogoImg,
      imageUrls: this.state.appConfig.IndexHeaderImg,
      changeTime: parseInt(this.state.appConfig.IndexHeaderImgChangeTime) || 5000,
    }
  },
}
</script>

<style scoped>
/* Logo animations */
.logo-container {
  position: relative;
  display: inline-block;
}

.logo-image {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(242, 131, 149, 0.15));
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Carousel image effect */
.carousel-image {
  filter: blur(2px) brightness(0.7);
  transition: filter 1s ease-in-out;
}

.swiper-slide-active .carousel-image {
  filter: blur(2px) brightness(0.8);
}

/* Scroll indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid var(--md-sys-color-primary);
  border-bottom: 2px solid var(--md-sys-color-primary);
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>