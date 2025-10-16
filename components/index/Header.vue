<template>
  <div class="relative overflow-hidden pt-16 lg:h-screen">
    <div class="lg:pt-16 lg:absolute lg:inset-y-0 lg:right-0 w-full lg:h-screen">
      <swiper
        :autoplay="{
          delay: changeTime,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules"
        :slidesPerView="1"
        class="w-full h-96 sm:h-[500px] md:h-[600px] lg:w-full lg:h-full"
      >
        <swiper-slide
          v-for="(currentImageUrl, index) in imageUrls"
          :key="currentImageUrl"
          class="transition-opacity ease-in-out"
        >
          <nuxt-img
            :src="currentImageUrl"
            alt="Gensokyo Reimagined background"
            :fetchpriority="index === 0 ? 'high' : 'low'"
            :loading="index === 0 ? 'eager' : 'lazy'"
            class="w-full h-full object-cover carousel-image"
            preset="carousel"
            :placeholder="index !== 0"
          />
        </swiper-slide>
      </swiper>
      
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--md-sys-color-background)] via-transparent to-[var(--md-sys-color-background)] opacity-60"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--md-sys-color-background)] via-transparent to-[var(--md-sys-color-background)]"></div>
    </div>

    <div class="mx-auto max-w-7xl lg:h-screen flex flex-col items-center justify-center relative z-20 px-4 text-center">
      
      <div class="logo-container relative mt-16 lg:mt-0">
        <nuxt-img
          :src="logoImg"
          alt="Gensokyo Reimagined Logo"
          fetchpriority="high"
          class="logo-image relative z-10 w-1/2 mx-auto h-auto lg:w-[450px] xl:w-[550px]"
          preset="logo" 
          preload 
        />
      </div>
      
      <p class="mt-4 text-base text-[var(--md-sys-color-outline)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl text-shadow">
        {{ $t('index.header.intro') }}
      </p>

      <div v-if="playerCount !== null" class="mt-4 text-base text-[var(--md-sys-color-outline)] sm:text-lg text-shadow">
        <i class="fa-solid fa-users mr-2 text-[var(--md-sys-color-primary)]"></i>
        Join <strong class="text-[var(--md-sys-color-on-background)]">{{ playerCount }}</strong> players online!
      </div>
      
      <div class="mt-6 sm:mt-8 mb-16 lg:mb-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          class="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--md-sys-color-on-primary)] bg-[var(--md-sys-color-primary)] border border-transparent rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl md:text-lg md:px-10 button-shine"
          href="https://discord.gg/U9fZSJJcte"
          target="_blank"
        >
          <span class="relative z-10 flex items-center">
            {{ $t('index.header.group') }}
            <i class="fa-solid fa-arrow-up-right-from-square ml-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 shimmer"></div>
        </a>
        
        <nuxt-link
          class="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--md-sys-color-on-primary)] bg-[var(--md-sys-color-primary)] border border-transparent rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl md:text-lg md:px-10 button-shine"
          to="#features"
        >
          <span class="relative z-10 flex items-center">
            {{ $t('index.header.continue') }}
            <svg class="ml-3 w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 shimmer"></div>
        </nuxt-link>
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
      playerCount: null,
    }
  },
  methods: {
    async fetchPlayerCount() {
      try {
        const response = await fetch('https://mcapi.us/server/status?ip=build.gensokyoreimagined.net&port=25565');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.online) {
          this.playerCount = data.players.now;
        } else {
          this.playerCount = 0; 
        }
      } catch (error) {
        console.error("Failed to fetch player count:", error);
        this.playerCount = 'N/A';
      }
    }
  },
  mounted() {
    this.fetchPlayerCount();
  }
}
</script>

<style scoped>
/* Text shadow for better readability on varied backgrounds */
.text-shadow {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

.logo-container {
  position: relative;
}

.logo-image {
  filter: drop-shadow(0 0 15px rgba(242, 131, 149, 0.15));
}

/* Carousel image effect */
.carousel-image {
  filter: brightness(0.7);
  transition: filter 1s ease-in-out;
}
.swiper-slide-active .carousel-image {
  filter: brightness(0.8);
}

/* Button shine effect */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.button-shine .shimmer {
  animation: shimmer 2s infinite;
}

/* Title shimmer effect */
@keyframes titleShimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.title-shimmer {
  animation: titleShimmer 3s ease-in-out infinite;
}
</style>