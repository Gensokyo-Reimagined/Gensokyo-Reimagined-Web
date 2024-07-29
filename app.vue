<template>
  <seo-kit/>
  <!--<OgImageScreenshot />-->
  <NuxtLayout>
    <NuxtPage class="bg-[var(--md-sys-color-background)]"/>
  </NuxtLayout>
</template>
<style>
html, body {
  scroll-behavior: smooth;
}
</style>
<script setup>
const runtimeConfig = useRuntimeConfig()
useSeoMeta({
  title: 'Gensokyo Reimagined',
  ogTitle: 'Gensokyo Reimagined',
  description: 'Creating a Touhou MMO Server in Minecraft',
  ogDescription: 'Creating a Touhou MMO Server in Minecraft',
  ogImage: 'https://www.gensokyoreimagined.net/img/about_pic.webp',
})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
    {
      rel: 'preload',
      as: 'style',
      onload: 'this.onload=null;this.rel="stylesheet"',
      href: '/css/all.min.css',
    },
    {
      rel: 'preload',
      as: 'style',
      onload: 'this.onload=null;this.rel="stylesheet"',
      href: '/css/twemoji-flags.min.css',
    },
  ],
  meta: [
    {
      property: 'og:image',
      content: runtimeConfig.public.siteImage,
    },
  ],
})
</script>
