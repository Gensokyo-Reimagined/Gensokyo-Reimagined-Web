<template>
  <div
      :style="gradientStyle"
      class="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 relative p-12 lg:p-16"
      v-bind="$attrs"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 bg-gradient-radial from-transparent via-white/3 to-white/8 animate-fog-drift"></div>
      <div
          class="absolute inset-0 bg-gradient-radial-offset from-white/5 via-transparent to-white/3 animate-fog-drift-slow"></div>
      <div
          class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/12 via-white/3 to-transparent"></div>
      <div
          class="absolute inset-0 bg-gradient-to-br from-transparent via-white/2 to-transparent animate-shimmer-slow"></div>
    </div>

    <img
        v-if="bgImage"
        :src="bgImage"
        alt=""
        aria-hidden="true"
        class="cta-card-bg pointer-events-none select-none absolute top-0 -right-[20%] h-full w-auto max-w-[58%] object-contain object-right-top"
        draggable="false"
    />

    <div class="relative z-10 h-full flex flex-col">
      <slot/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  gradientStyle: String,
  bgImage: String,
})
</script>

<style scoped>
/* Sits above the card gradient but below the z-10 content. Mirrored on the Y
   axis; because the flip also mirrors the mask, the gradient fades toward the
   element's right edge so the soft edge still faces the text after flipping. */
.cta-card-bg {
  z-index: 1;
  opacity: 0.9;
  transform: scaleX(-1);
  -webkit-mask-image: linear-gradient(to right, #000 30%, transparent 88%),
  linear-gradient(to top, transparent 2%, #000 22%);
  mask-image: linear-gradient(to right, #000 30%, transparent 88%),
  linear-gradient(to top, transparent 2%, #000 22%);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}
</style>