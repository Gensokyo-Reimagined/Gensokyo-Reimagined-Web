<template>
  <seo-kit />
  <!--<OgImageScreenshot />-->
  <NuxtLayout>
    <NuxtPage class="bg-[var(--md-sys-color-background)]" />
  </NuxtLayout>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
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
      href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    },
    {
      rel: 'preload',
      as: 'style',
      onload: 'this.onload=null;this.rel="stylesheet"',
      href: '/css/twemoji-flags.min.css'
    }
  ],
  meta: [
    {
      property: 'og:image',
      content: runtimeConfig.public.siteImage,
    },
  ],
})
</script>