<template>
  <!--<seo-kit />-->
  <!--<OgImageScreenshot />-->
  <NuxtLayout>
    <NuxtPage class="bg-[var(--md-sys-color-background)]" />
  </NuxtLayout>
</template>
<script setup>
//defineOgImage({
//  url: 'https://www.gensokyoreimagined.net/img/about_pic.webp',
//  width: 1186,
//  height: 628,
//  alt: 'about_pic',
//})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: '/css/all.min.css',
    },
    {
      rel: 'stylesheet',
      href: '/css/twemoji-flags.min.css',
    },
  ],
})
</script>
