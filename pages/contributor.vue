<template>
  <IndexHeader/>
  <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-[11] relative">
    <div class="text-center bg-[var(--md-sys-color-background)] lg:backdrop-blur lg:p-5 lg:rounded-xl">
      <h1 class="text-4xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-5xl md:text-6xl">
				<span class="block text-[var(--md-sys-color-primary)] xl:inline">
          {{ $t('contributor.title') }}
				</span>
      </h1>
      <p class="mt-3 text-base text-[var(--md-sys-color-outline)] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
        {{ $t('contributor.description') }}
      </p>
    </div>
  </main>
  <!-- for avatars, save locally or use dc api at build time to ensure accessibility
  in regions where dc is blocked. manually saving doesnt sync avatars in
  real-time. use GitHub api for contributors, but a worker is needed to ensure
  loading in restricted regions. WIP Content -->
  <List :teams="appConfig.teamData"/>

</template>
<script lang="ts" setup>
import List from "~/components/contributor/List.vue";
const appConfig = useAppConfig()
</script>

<style scoped>
</style>
