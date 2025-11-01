<template>
  <div class="py-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <CtaCard
          v-if="appConfig.IPCtaShow"
          class="lg:row-span-2"
          gradientStyle="background: linear-gradient(135deg, #f28395 0%, #e2354c 50%, #d81b60 100%);"
      >
        <div class="mb-8 lg:mb-12">
          <div
              ref="imageRef1"
              :style="imageStyles.imageRef1"
              class="image-tilt-container"
              @mouseleave="handleMouseLeave('imageRef1')"
              @mousemove="handleMouseMove($event, 'imageRef1')"
          >
            <nuxt-img
                :src="appConfig.IndexIPCtaImg"
                alt="Server"
                class="image-itself"
                loading="lazy"
                quality="90"
            />
          </div>
        </div>

        <div>
          <h2 class="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            {{ $t('index.IPcta.title') }}
          </h2>
          <p class="text-lg text-white mb-8 drop-shadow">
            {{ $t('index.IPcta.description') }}
          </p>

          <div class="space-y-4">
            <button
                :aria-label="`Copy survival server IP: ${appConfig.SurvivalServerIP}`"
                class="w-full bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/30 hover:bg-white/20 hover:scale-[1.03] hover:border-white/50 transition-all duration-300 group relative overflow-hidden"
                @click="copyToClipboard(appConfig.SurvivalServerIP)"
            >
              <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <div class="flex items-center justify-between relative z-10">
                <div class="flex-1 text-left">
                  <p class="text-white font-bold uppercase text-sm mb-2 tracking-wide drop-shadow">
                    {{ $t('index.IPcta.survivaltitle') }}
                  </p>
                  <span class="font-mono text-lg font-bold text-white flex items-center drop-shadow">
                    {{ appConfig.SurvivalServerIP }}
                    <i :class="copyStates[appConfig.SurvivalServerIP]" aria-hidden="true"
                       class="ml-3 text-base transition-all duration-300"></i>
                  </span>
                </div>
                <div
                    class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <i aria-hidden="true" class="fa-solid fa-bolt text-white text-xl drop-shadow"></i>
                </div>
              </div>
            </button>

            <button
                :aria-label="`Copy build server IP: ${appConfig.BuildServerIP}`"
                class="w-full bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/30 hover:bg-white/20 hover:scale-[1.03] hover:border-white/50 transition-all duration-300 group relative overflow-hidden"
                @click="copyToClipboard(appConfig.BuildServerIP)"
            >
              <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <div class="flex items-center justify-between relative z-10">
                <div class="flex-1 text-left">
                  <p class="text-white font-bold uppercase text-sm mb-2 tracking-wide drop-shadow">
                    {{ $t('index.IPcta.buildtitle') }}
                  </p>
                  <span class="font-mono text-lg font-bold text-white flex items-center drop-shadow">
                    {{ appConfig.BuildServerIP }}
                    <i :class="copyStates[appConfig.BuildServerIP]" aria-hidden="true"
                       class="ml-3 text-base transition-all duration-300"></i>
                  </span>
                </div>
                <div
                    class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <i aria-hidden="true" class="fa-solid fa-hammer text-white text-xl drop-shadow"></i>
                </div>
              </div>
            </button>
          </div>
        </div>
      </CtaCard>

      <CtaCard
          v-if="appConfig.DCCtaShow"
          gradientStyle="background: linear-gradient(135deg, #5865F2 0%, #7289DA 100%);"
      >
        <h2 class="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
          {{ $t('index.cta.title') }}
        </h2>
        <p class="text-lg text-white/90 mb-8 drop-shadow">
          {{ $t('index.cta.description') }}
        </p>
        <a :href="appConfig.DCLink"
           class="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl group relative overflow-hidden"
           style="background: white; color: #5865F2;"
           target="_blank">
          <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <i aria-hidden="true"
             class="fa-brands fa-discord text-2xl mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300"></i>
          <span class="relative z-10">{{ $t('index.cta.button') }}</span>
          <i aria-hidden="true"
             class="fa-solid fa-arrow-right ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300"></i>
        </a>

        <div class="h-64 mt-8">
          <div ref="imageRef2" :style="imageStyles.imageRef2" class="image-tilt-container h-full"
               @mouseleave="handleMouseLeave('imageRef2')" @mousemove="handleMouseMove($event, 'imageRef2')">
            <nuxt-img :src="appConfig.IndexCtaImg" alt="Discord" class="image-itself object-cover" loading="lazy"
                      quality="80"/>
          </div>
        </div>
      </CtaCard>

      <CtaCard
          v-if="appConfig.MPCtaShow"
          gradientStyle="background: linear-gradient(135deg, #1BD96A 0%, #16A34A 100%);"
      >
        <h2 class="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
          {{ $t('index.MPcta.title') }}
        </h2>
        <p class="text-lg text-white/90 mb-6 drop-shadow">
          {{ $t('index.MPcta.description') }}

        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center text-white text-base group hover:translate-x-2 transition-transform duration-300">
            <i aria-hidden="true"
               class="fa-solid fa-circle-check text-xl mr-3 group-hover:scale-125 transition-transform duration-300 drop-shadow"></i>
            <span class="font-medium drop-shadow">{{ $t('index.MPcta.list[0]') }}</span>
          </li>
          <li class="flex items-center text-white text-base group hover:translate-x-2 transition-transform duration-300">
            <i aria-hidden="true"
               class="fa-solid fa-circle-check text-xl mr-3 group-hover:scale-125 transition-transform duration-300 drop-shadow"></i>
            <span class="font-medium drop-shadow">{{ $t('index.MPcta.list[1]') }}</span>
          </li>
          <li class="flex items-center text-white text-base group hover:translate-x-2 transition-transform duration-300">
            <i aria-hidden="true"
               class="fa-solid fa-circle-check text-xl mr-3 group-hover:scale-125 transition-transform duration-300 drop-shadow"></i>
            <span class="font-medium drop-shadow">{{ $t('index.MPcta.list[2]') }}</span>
          </li>
        </ul>
        <a :href="appConfig.MPLink"
           class="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl group relative overflow-hidden"
           style="background: white; color: #1BD96A;"
           target="_blank">
          <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-green-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <i aria-hidden="true"
             class="fa-solid fa-download text-2xl mr-3 relative z-10 group-hover:translate-y-1 transition-transform duration-300"></i>
          <span class="relative z-10">{{ $t('index.MPcta.button') }}</span>
          <i aria-hidden="true"
             class="fa-solid fa-arrow-right ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300"></i>
        </a>
      </CtaCard>

    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import CtaCard from './CtaCard.vue'

const appConfig = useAppConfig()

const imageStyles = reactive({
  imageRef1: {transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'},
  imageRef2: {transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'},
  imageRef3: {transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'}
})

function handleMouseMove(event, refName) {
  const element = event.currentTarget
  const rect = element.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateY = ((x - centerX) / centerX) * 10
  const rotateX = ((centerY - y) / centerY) * 10
  imageStyles[refName] = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    transition: 'transform 0.1s ease-out'
  }
}

function handleMouseLeave(refName) {
  imageStyles[refName] = {
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.5s ease-out'
  }
}

const copyStates = reactive({})

const initializeCopyStates = () => {
  copyStates[appConfig.SurvivalServerIP] = 'fa-solid fa-copy'
  copyStates[appConfig.BuildServerIP] = 'fa-solid fa-copy'
}

initializeCopyStates()

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    copyStates[text] = 'fa-solid fa-check'

    setTimeout(() => {
      copyStates[text] = 'fa-solid fa-copy'
    }, 2000)
  })
}
</script>

<style scoped>
@keyframes fog-drift {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(30px, -20px) scale(1.1);
    opacity: 0.8;
  }
}

@keyframes fog-drift-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-40px, 30px) scale(1.15);
    opacity: 0.7;
  }
}

.animate-fog-drift {
  animation: fog-drift 15s ease-in-out infinite;
}

.animate-fog-drift-slow {
  animation: fog-drift-slow 20s ease-in-out infinite;
}

.bg-gradient-radial {
  background: radial-gradient(circle at 30% 50%, var(--tw-gradient-stops));
}

.bg-gradient-radial-offset {
  background: radial-gradient(circle at 70% 60%, var(--tw-gradient-stops));
}

@keyframes shimmer-slow {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(30deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(30deg);
  }
}

.animate-shimmer-slow {
  animation: shimmer-slow 15s ease-in-out infinite;
}

@keyframes pulse-subtle {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 5s ease-in-out infinite;
}

.image-tilt-container {
  position: relative;
  border-radius: 1rem;
  transform-style: preserve-3d;
  cursor: pointer;
}

.image-itself {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: border-color 0.5s ease;
  position: relative;
  z-index: 1;
}

.image-tilt-container:hover .image-itself {
  border-color: rgba(255, 255, 255, 0.5);
}

.image-tilt-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.15), transparent);
  border-radius: inherit;
  z-index: 2;
  pointer-events: none;
}

.image-tilt-container::after {
  content: '';
  position: absolute;
  inset: -2rem;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent);
  filter: blur(32px);
  animation: pulse-subtle 5s ease-in-out infinite;
  z-index: 0;
}

.drop-shadow-lg {
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

.drop-shadow {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}
</style>