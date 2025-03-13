<template>
  <div class="bg-[var(--md-sys-color-background)]">


    <div class="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2
            class="text-3xl font-extrabold text-center text-[var(--md-sys-color-on-background)] sm:text-4xl"
        >
          {{ $t('index.faq.title') }}
        </h2>
        <ul class="mt-6 divide-y divide-gray-200 basis-1/2">
          <li v-for="(faq, index) in faqs" :key="index">
            <button
                :aria-expanded="faq.expanded"
                class="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 text-[var(--md-sys-color-outline)]"
                @click="toggleFAQ(faq)"
            >
              <span class="flex-1 font-medium text-[var(--md-sys-color-on-background)]">{{ faq.question }}</span>
              <svg
                  :class="[
                      faq.open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform',
                    ]"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M19 9l-7 7-7-7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                ></path>
              </svg>
            </button>
            <div
                :style="{ maxHeight: faq.expanded ? '100px' : '0px' }"
                class="transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div class="pb-5 leading-relaxed">
                <div class="space-y-2 leading-relaxed text-[var(--md-sys-color-outline)]">{{ faq.answer }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: this.$t('index.faq.items[0].question'),
          answer: this.$t('index.faq.items[0].answer'),
          open: false,
        },
        {
          question: this.$t('index.faq.items[1].question'),
          answer: this.$t('index.faq.items[1].answer'),
          open: false,
        },
        {
          question: this.$t('index.faq.items[2].question'),
          answer: this.$t('index.faq.items[2].answer'),
          open: false,
        },
        {
          question: this.$t('index.faq.items[3].question'),
          answer: this.$t('index.faq.items[3].answer'),
          open: false,
        },
        {
          question: this.$t('index.faq.items[4].question'),
          answer: this.$t('index.faq.items[4].answer'),
          open: false,
        },
      ],
    }
  },
  methods: {
    toggleFAQ(faq) {
      faq.expanded = !faq.expanded
      faq.open = !faq.open
    },
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.33s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
