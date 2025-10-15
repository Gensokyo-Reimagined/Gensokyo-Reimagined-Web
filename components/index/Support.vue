<template>
  <div class="py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-4xl">
          <span class="block">{{ $t('index.support.title') }}</span>
          <span class="block text-[var(--md-sys-color-primary)] mt-2">{{ $t('index.support.description') }}</span>
        </h2>
        <p class="mt-4 max-w-2xl mx-auto text-lg text-[var(--md-sys-color-outline)]">
          Your contributions directly fund server maintenance and development, ensuring the best possible experience for everyone.
        </p>
      </div>

      <div class="mt-16 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
        
        <div class="flex flex-col rounded-2xl shadow-xl overflow-hidden support-card border border-[var(--md-sys-color-outline-variant)]">
          <div class="flex-1 bg-[var(--md-sys-color-surface)] p-8 flex flex-col justify-between">
            <div class="flex-1">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFDD00] text-black mx-auto">
                <i class="fa-solid fa-mug-hot text-3xl"></i>
              </div>
              <h3 class="mt-6 text-xl font-bold text-center text-[var(--md-sys-color-on-surface)]">Buy Me a Coffee</h3>
              <p class="mt-4 text-base text-center text-[var(--md-sys-color-outline)]">A simple and direct way to support our project with a virtual coffee.</p>
            </div>
            <div class="mt-8">
              <a href="https://www.buymeacoffee.com/greimagined" target="_blank" class="support-button bg-[#FFDD00] hover:bg-yellow-500 text-black">
                Support on BMC
                <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-2xl shadow-xl overflow-hidden support-card border border-[var(--md-sys-color-outline-variant)]">
          <div class="flex-1 bg-[var(--md-sys-color-surface)] p-8 flex flex-col justify-between">
            <div class="flex-1">
              <div class="flex items-center justify-center h-16 w-16 rounded-full bg-[#13C3FF] text-white mx-auto">
                <nuxt-img src="/img/kofi_logo.svg" alt="Ko-fi Logo" class="w-9 h-9" />
              </div>
              <h3 class="mt-6 text-xl font-bold text-center text-[var(--md-sys-color-on-surface)]">Ko-fi</h3>
              <p class="mt-4 text-base text-center text-[var(--md-sys-color-outline)]">Support us with a one-time donation or become a monthly member.</p>
            </div>
            <div class="mt-8">
              <a href="https://ko-fi.com/gensokyoreimagined" target="_blank" class="support-button bg-[#13C3FF] hover:bg-[#00A2D9] text-white">
                Support on Ko-fi
                <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-2xl shadow-xl overflow-hidden support-card border border-[var(--md-sys-color-outline-variant)]">
          <div class="flex-1 bg-[var(--md-sys-color-surface)] p-8 flex flex-col justify-between">
            <div class="flex-1">
               <div class="flex items-center justify-center h-16 w-16 rounded-full bg-[#946EFF] text-white mx-auto">
                <nuxt-img src="/img/afdian_logo.svg" alt="Afdian Logo" class="w-9 h-9" />
               </div>
              <h3 class="mt-6 text-xl font-bold text-center text-[var(--md-sys-color-on-surface)]">Afdian (爱发电)</h3>
              <p class="mt-4 text-base text-center text-[var(--md-sys-color-outline)]">A popular creator platform for one-time or monthly sponsorships.</p>
            </div>
            <div class="mt-8">
              <a href="https://ifdian.net/a/gensokyoreimagined" target="_blank" class="support-button bg-[#946EFF] hover:bg-[#7D52F1] text-white">
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
// No script logic is needed.
export default {}
</script>

<style scoped>
@keyframes card-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.support-card {
  animation: card-fade-in 0.5s ease-out forwards;
  opacity: 0; /* Start hidden */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Stagger the animation */
.support-card:nth-child(1) { animation-delay: 0.1s; }
.support-card:nth-child(2) { animation-delay: 0.2s; }
.support-card:nth-child(3) { animation-delay: 0.3s; }

.support-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.support-button {
  @apply w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md transition-colors duration-300;
}
</style>