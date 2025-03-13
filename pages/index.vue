<template>
  <div>
    <IndexHeader/>
    <IndexAbout/>
    <IndexFeature/>
    <IndexCta/>
    <IndexFaq/>
    <IndexRules/>
    <IndexSupport/>
  </div>
</template>

<script setup>
const {t} = useI18n()
useSeoMeta({
  title: (t('index.title')),
})
</script>

<style></style>
