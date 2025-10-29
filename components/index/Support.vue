<template>
  <div class="py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-4xl">
          <span class="block">{{ $t('index.support.title') }}</span>
          <span class="block text-[var(--md-sys-color-primary)] mt-2">{{ $t('index.support.description') }}</span>
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-[var(--md-sys-color-outline)]">
          Your contributions directly fund server maintenance and development, ensuring the best possible experience for
          everyone.
        </p>
      </div>

      <div class="mt-16 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">

        <div
            class="flex flex-col rounded-2xl shadow-xl overflow-hidden support-card border border-[var(--md-sys-color-outline-variant)]">
          <div class="flex-1 bg-[var(--md-sys-color-surface)] p-8 flex flex-col justify-between">
            <div class="flex-1">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFDD00] text-black mx-auto">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M294.314667 0L242.432 119.424H165.418667v107.648h29.653333L225.152 418.133333H178.005333l62.293334 351.146667 40.021333-0.426667 40.192 255.146667h380.501333l2.645334-17.066667 37.546666-238.08 37.888 0.426667 62.293334-351.189333h-45.056l30.08-191.018667h32.256V119.466667h-81.834667L724.906667 0H294.314667z m22.528 34.346667h385.834666l32.896 75.946666H283.818667l33.024-75.946666z m-117.333334 119.338666H824.32v39.253334H199.509333v-39.253334z m19.328 298.581334h581.76l-50.176 282.453333-241.024-2.56-240.469333 2.56-50.090667-282.453333z"/>
                </svg>
              </div>
              <h3 class="mt-6 text-xl font-bold text-center text-[var(--md-sys-color-on-surface)]">Buy Me a Coffee</h3>
              <p class="mt-4 text-base text-center text-[var(--md-sys-color-outline)]">A simple and direct way to
                support our project with a virtual coffee.</p>
            </div>
            <div class="mt-8">
              <a class="support-button bg-[#FFDD00] hover:bg-yellow-500 text-black"
                 href="https://www.buymeacoffee.com/greimagined"
                 target="_blank">
                Support on BMC
                <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div
            class="flex flex-col rounded-2xl shadow-xl overflow-hidden support-card border border-[var(--md-sys-color-outline-variant)]">
          <div class="flex-1 bg-[var(--md-sys-color-surface)] p-8 flex flex-col justify-between">
            <div class="flex-1">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-[#13C3FF] text-white mx-auto">
                <nuxt-img alt="Ko-fi Logo" class="w-9 h-9" src="/img/kofi_logo.svg"/>
              </div>
              <h3 class="mt-6 text-xl font-bold text-center text-[var(--md-sys-color-on-surface)]">Ko-fi</h3>
              <p class="mt-4 text-base text-center text-[var(--md-sys-color-outline)]">Support us with a one-time
                donation or become a monthly member.</p>
            </div>
            <div class="mt-8">
              <a class="support-button bg-[#13C3FF] hover:bg-[#00A2D9] text-white"
                 href="https://ko-fi.com/gensokyoreimagined"
                 target="_blank">
                Support on Ko-fi
                <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div
            class="flex flex-col rounded-2xl shadow-xl overflow-hidden support-card border border-[var(--md-sys-color-outline-variant)]">
          <div class="flex-1 bg-[var(--md-sys-color-surface)] p-8 flex flex-col justify-between">
            <div class="flex-1">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-[#946EFF] text-white mx-auto">
                <nuxt-img alt="Afdian Logo" class="w-9 h-9" src="/img/afdian_logo.svg"/>
              </div>
              <h3 class="mt-6 text-xl font-bold text-center text-[var(--md-sys-color-on-surface)]">Afdian (爱发电)</h3>
              <p class="mt-4 text-base text-center text-[var(--md-sys-color-outline)]">A popular creator platform for
                one-time or monthly sponsorships.</p>
            </div>
            <div class="mt-8">
              <a class="support-button bg-[#946EFF] hover:bg-[#7D52F1] text-white"
                 href="https://ifdian.net/a/gensokyoreimagined"
                 target="_blank">
                Support on Afdian
                <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.support-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.support-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.support-button {
  @apply w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md transition-colors duration-300;
}
</style>