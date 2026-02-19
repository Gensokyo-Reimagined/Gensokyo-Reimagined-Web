<template>
  <NuxtLayout>
    <NuxtPage class="bg-[var(--md-sys-color-background)]"/>
  </NuxtLayout>
</template>
<script setup>
const {t} = useI18n()
// create seo
useSeoMeta({
  ogImage: 'https://www.gensokyoreimagined.net/img/about_pic.webp',
  twitterImage: 'https://www.gensokyoreimagined.net/img/about_pic.webp',
  description: (t('description')),
  twitterDescription: (t('description')),
})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
})

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>