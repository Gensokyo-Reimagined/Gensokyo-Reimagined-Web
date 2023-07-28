<template>
  <seo-kit />
  <NuxtLayout>
    <NuxtPage />
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
      rel: 'stylesheet',
      href: 'https://cdn.staticaly.com/gh/HoubunSOP/font-awesome-6/main/css/all.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://fastly.jsdelivr.net/gh/SebastianAigner/twemoji-amazing/twemoji-amazing.css'
    }
  ]
})
</script>