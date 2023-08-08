<template>
  <seo-kit />
  <!--<OgImageScreenshot />-->
  <OgImageStatic />
  <NuxtLayout>
    <NuxtPage class="bg-[var(--md-sys-color-background)]" />
  </NuxtLayout>
</template>
<script setup>
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    },
    {
      rel: 'preload',
      as: 'style',
      onload: 'this.onload=null;this.rel="stylesheet"',
      href: 'https://cdn.staticaly.com/gh/HoubunSOP/font-awesome-6/main/css/all.min.css'
    },
    {
      rel: 'preload',
      as: 'style',
      onload: 'this.onload=null;this.rel="stylesheet"',
      href: '/css/twemoji-flags.min.css'
    }
  ]
})
</script>