<template>
  <div class="relative overflow-hidden pt-16 lg:h-screen">
    <!-- Preload the FIRST carousel image -->
    <Head>
      <Link 
        rel="preload" 
        as="image" 
        :href="imageUrls[0]"
        :imagesrcset="`
          /_ipx/w_640&q_80&blur_2/${imageUrls[0]} 640w,
          /_ipx/w_1280&q_80&blur_2/${imageUrls[0]} 1280w,
          /_ipx/w_1920&q_80&blur_2/${imageUrls[0]} 1920w
        `"
        imagesizes="100vw"
      />
    </Head>
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
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
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
  /* The blur is now handled by the preset, so you can remove it from here if you wish */
  /* filter: blur(2px) brightness(0.7); */
  filter: brightness(0.7);
  transition: filter 1s ease-in-out;
}
.swiper-slide-active .carousel-image {
  filter: brightness(0.8);
}

/* REMOVED: Scroll indicator styles */

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