<template>
  <div class="bg-[var(--md-sys-color-background)]">
    <div
      class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-4xl"
      >
        <span class="block">
          {{ $t('index.support.title') }}
        </span>
        <span class="block text-[var(--md-sys-color-primary)]">
          {{ $t('index.support.description') }}
        </span>
      </h2>
      <div class="flex mt-8 lg:mt-0 lg:flex-shrink-0 flex-col">
        <div class="inline-flex rounded-md shadow">
          <a
            href="https://www.buymeacoffee.com/greimagined"
            target="_blank"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[var(--md-sys-color-background)] bg-[var(--md-sys-color-primary)] border border-transparent rounded-md hover:bg-[var(--md-sys-color-secondary)]"
          >
            {{ $t('index.support.button') }}
            <i class="fa-solid fa-arrow-up-right-from-square ml-3 -mr-1"></i>
          </a>
        </div>
        <div
          v-if="$i18n.locale === 'zh'"
          class="inline-flex rounded-md shadow mt-4"
        >
          <a
            href="https://afdian.com/a/gensokyoreimagined"
            target="_blank"
            class="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[var(--md-sys-color-background)] bg-[var(--md-sys-color-primary)] border border-transparent rounded-md hover:bg-[var(--md-sys-color-secondary)]"
          >
            爱发电
            <i class="fa-solid fa-arrow-up-right-from-square ml-3 -mr-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
