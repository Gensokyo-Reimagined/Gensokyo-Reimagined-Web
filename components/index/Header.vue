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
          v-for="currentImageUrl in imageUrls"
          :key="currentImageUrl"
          class="transition-opacity ease-in-out"
        >
          <nuxt-img
            :src="currentImageUrl"
            alt="Gensokyo Reimagined background"
            class="w-full h-full object-cover carousel-image"
            quality="60"
            sizes="sm:100vw md:50vw lg:800px"
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
          class="logo-image relative z-10 w-1/2 mx-auto h-auto lg:w-[450px] xl:w-[550px]"
          quality="80"
        />
      </div>

      <h1 class="text-4xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-5xl md:text-6xl mt-6 text-shadow">
        <span class="block text-[var(--md-sys-color-primary)] xl:inline title-shimmer">
          {{ $t('servername') }}
        </span>
      </h1>
      
      <p class="mt-3 text-base text-[var(--md-sys-color-outline)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-shadow">
        {{ $t('index.header.intro') }}
      </p>

      <div v-if="playerCount !== null" class="mt-6 text-base text-[var(--md-sys-color-outline)] sm:text-lg text-shadow">
        <i class="fa-solid fa-users mr-2 text-[var(--md-sys-color-primary)]"></i>
        Join <strong class="text-[var(--md-sys-color-on-background)]">{{ playerCount }}</strong> players online!
      </div>
      
      <div class="mt-8 sm:mt-10 mb-16 lg:mb-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          class="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[var(--md-sys-color-on-secondary-container)] bg-[var(--md-sys-color-secondary-container)] border-2 border-[var(--md-sys-color-outline)] rounded-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--md-sys-color-primary-container)] hover:border-[var(--md-sys-color-primary)] md:text-lg md:px-10"
          to="#features"
        >
          {{ $t('index.header.continue') }}
          <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </nuxt-link>
      </div>
    </div>

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
      // NEW: State for storing the player count, initialized to null
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
        // Check if the server is online before getting the player count
        if (data.online) {
          this.playerCount = data.players.now;
        } else {
          // If the server is offline, you can show 0 or a message
          this.playerCount = 0; 
        }
      } catch (error) {
        console.error("Failed to fetch player count:", error);
        // Display a fallback value if the API fails
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