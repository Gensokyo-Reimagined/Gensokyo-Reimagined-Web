<template>
  <div class="bg-white">
    <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="overflow-hidden bg-red-700 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">
                {{ $t('index.cta.title') }}
              </span>
              <span class="block">
                {{ $t('index.cta.subtitle') }}
              </span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-red-200">
              {{ $t('index.cta.description') }}
            </p>
            <a href="https://discord.gg/U9fZSJJcte" target="_blank"
              class="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-red-600 bg-white border border-transparent rounded-md shadow hover:bg-red-50">
              {{ $t('index.cta.button') }}
              <i class="fa-duotone fa-arrow-up-right-from-square ml-3 -mr-1"></i>
            </a>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            class="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
            src="/img/discord-screenshot.png" alt="App screenshot">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export
  default {}
</script>