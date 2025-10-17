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

// Load non-critical CSS asynchronously on client side only
if (process.client) {
  onMounted(() => {
    const loadCSS = (href, id) => {
      if (document.getElementById(id)) return
      
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = href
      link.media = 'print'
      link.onload = function() {
        this.media = 'all'
      }
      document.head.appendChild(link)
    }
    
    // Defer loading slightly to prioritize critical render
    requestAnimationFrame(() => {
      loadCSS('/css/all.min.css', 'font-awesome')
      loadCSS('/css/twemoji-flags.min.css', 'twemoji-flags')
    })
  })
}
</script>