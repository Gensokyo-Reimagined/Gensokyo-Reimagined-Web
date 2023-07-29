<template>
  <div class="bg-gray-50">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          {{ $t("index.faq.title") }}
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <div v-for="faq in faqs" :key="faq.question" class="pt-6">
            <dt class="text-lg">
              <button type="button" class="flex items-start justify-between w-full text-left text-gray-400"
                aria-controls="faq-0" aria-expanded="false" @click="faq.open = !faq.open">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="flex items-center ml-6 h-7">
                  <svg :class="[faq.open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform',]"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                    </path>
                  </svg>
                </span>
              </button>
            </dt>
            <transition name="fade">
              <dd v-show="faq.open" class="pr-12 mt-2">
                <p class="text-base text-gray-500 transition-all">
                  {{ faq.answer }}
                </p>
              </dd>
            </transition>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export
  default {
    data () {
      return {
        faqs:
          [{
            question:
              this.$t('index.faq.items[0].question'),
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
      toggle () {
        this.open = !this.open
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