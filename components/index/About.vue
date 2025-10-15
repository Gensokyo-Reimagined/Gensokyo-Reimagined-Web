<template>
  <div class="relative bg-[var(--md-sys-color-background)]">
    <!-- Main Hero Content -->
    <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-[11] relative">
      <div class="text-center bg-[var(--md-sys-color-background)] lg:backdrop-blur-sm lg:p-8 lg:rounded-2xl hero-glow">
        <!-- Title with gradient effect -->
        <h1 class="text-4xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-5xl md:text-6xl">
          <span class="block text-[var(--md-sys-color-primary)] xl:inline title-shimmer">
            {{ $t('servername') }}
          </span>
        </h1>
        
        <!-- Subtitle -->
        <p class="mt-3 text-base text-[var(--md-sys-color-outline)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl fade-in-delay">
          {{ $t('index.header.intro') }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
    </main>

    <!-- About Us Section -->
    <div
      id="aboutus"
      class="pt-32 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 relative"
    >
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
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

          <!-- Stats or highlights (optional) -->
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

        <!-- Image/Visual Side -->
        <div class="order-first lg:order-last">
          <div class="relative">
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-72 h-72 bg-[var(--md-sys-color-primary)] opacity-10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-4 -left-4 w-72 h-72 bg-[var(--md-sys-color-tertiary)] opacity-10 rounded-full blur-3xl"></div>
            
            <!-- Main image container -->
            <div class="relative rounded-2xl overflow-hidden border-4 border-[var(--md-sys-color-outline-variant)] shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <nuxt-img
                :src="appConfig.IndexAbobutImg"
                alt="Gensokyo Reimagined"
                class="w-full h-auto"
                loading="lazy"
                quality="90"
              />
              <!-- Add a gradient overlay -->
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
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes titleShimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.title-shimmer {
  animation: titleShimmer 3s ease-in-out infinite;
}

.fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.button-shine .shimmer {
  animation: shimmer 2s infinite;
}

.hero-glow {
  position: relative;
}

.hero-glow::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--md-sys-color-primary), var(--md-sys-color-tertiary), var(--md-sys-color-primary));
  border-radius: 1rem;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s;
  filter: blur(20px);
}

.hero-glow:hover::before {
  opacity: 0.3;
}

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