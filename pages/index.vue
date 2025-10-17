<template>
  <div>
    <IndexHeader/>
    <LazyIndexAbout/>
    <LazyIndexFeature/>
    <LazyIndexCta/>
    <LazyIndexFaq/>
    <LazyIndexRules/>
    <LazyIndexSupport/>
  </div>
</template>

<script setup>
const {t} = useI18n()
useSeoMeta({
  title: (t('index.title')),
  twitterTitle: (t('index.title')),
})
</script>