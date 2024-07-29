<script lang="ts" setup>
</script>
<template>
  <IndexHeader/>
  <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-[11] relative">
    <div class="text-center bg-[var(--md-sys-color-background)] lg:backdrop-blur lg:p-5 lg:rounded-xl">
      <h1 class="text-4xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-5xl md:text-6xl">
				<span class="block text-[var(--md-sys-color-primary)] xl:inline">
					Contributors of Gensokyo Reimagined
				</span>
      </h1>
      <p class="mt-3 text-base text-[var(--md-sys-color-outline)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
        Our heartfelt thanks to all the contributors whose support helps Gensokyo
        Reimagined become better with every step.
      </p>
    </div>
  </main>
  <!-- for avatars, save locally or use dc api at build time to ensure accessibility
  in regions where dc is blocked. manually saving doesnt sync avatars in
  real-time. use GitHub api for contributors, but a worker is needed to ensure
  loading in restricted regions. WIP Content -->
  <div class="px-4 md:pl-24 md:px-0 mt-10">
    <h3 class="m-0 font-semibold text-2xl text-[#22ffb7]">
      <i class="twa" style="background-image: url('/icons/staff/developer.webp')"/>
      Developer
    </h3>
    <p class="text-lg text-[var(--md-sys-color-on-background)]">
      Here are some placeholders.
    </p>
  </div>
  <div class="flex flex-wrap mt-10 px-4">
    <div v-for="index in 10" :key="index" class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-10">
      <div class="text-center max-w-xs mx-auto">
        <img class="w-24 h-24 mx-auto mb-2 rounded-full" src="https://avatars.githubusercontent.com/misaka10843">
        <h3 class="mb-1 text-lg text-[var(--md-sys-color-on-background)] font-semibold">
          misaka10843
        </h3>
        <span class="inline-block text-lg font-medium text-[var(--md-sys-color-secondary)]">
					?
				</span>
        <div class="flex items-center justify-center text-[var(--md-sys-color-on-background)]">
          <a class="inline-block mr-4 hover:opacity-80" href="#">
            <i class="fa-brands fa-discord"/>
          </a>
          <a class="inline-block mr-4 hover:opacity-80" href="#">
            <i class="fa-brands fa-github"/>
          </a>
          <a class="inline-block hover:opacity-80" href="#">
            <i class="fa-brands fa-x-twitter"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
