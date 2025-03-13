<template>
  <NuxtLayout>
    <NuxtPage class="bg-[var(--md-sys-color-background)]" />
  </NuxtLayout>
</template>
<script setup>
const { t } = useI18n()
// create seo
useSeoMeta({
  ogImage: 'https://www.gensokyoreimagined.net/img/about_pic.webp',
  description:(t('description'))
})
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
