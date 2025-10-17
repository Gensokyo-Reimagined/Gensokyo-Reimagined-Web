<template>
  <div
    class="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 relative p-12 lg:p-16"
    :style="gradientStyle"
    v-bind="$attrs"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 bg-gradient-radial from-transparent via-white/3 to-white/8 animate-fog-drift"></div>
      <div class="absolute inset-0 bg-gradient-radial-offset from-white/5 via-transparent to-white/3 animate-fog-drift-slow"></div>
      <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/12 via-white/3 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/2 to-transparent animate-shimmer-slow"></div>
    </div>

    <div class="relative z-10 h-full flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  gradientStyle: String,
})
</script>