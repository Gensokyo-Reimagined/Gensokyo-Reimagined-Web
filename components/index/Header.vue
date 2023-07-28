<template>
  <div class="relative overflow-hidden bg-white pt-16">
    <div class="mx-auto max-w-7xl flex">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
          fill="currentColor" viewbox="0 0 100 100" preserveaspectratio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100">
          </polygon>
        </svg>
        <navbar>
          <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-[11] relative">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block text-red-600 xl:inline">
                  {{ $t('servername') }}
                </span>
                <span class="block xl:inline">
                  {{ $t('index.header.title') }}
                </span>
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {{ $t('index.header.intro') }}
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="https://discord.gg/U9fZSJJcte"
                    class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                    {{ $t('index.header.group') }}
                    <i class="fa-duotone fa-arrow-up-right-from-square  ml-3 -mr-1"></i>
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <nuxt-link to="#features"
                    class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 md:py-4 md:text-lg md:px-10">
                    {{ $t('index.header.continue') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </main>
        </navbar>
      </div>
    </div>
    <div class="pt-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img/main_min.png">
    </div>
  </div>
</template>
<script>
export
  default {}
</script>