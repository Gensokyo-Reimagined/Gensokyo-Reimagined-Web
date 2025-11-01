<template>
  <div class="relative py-20 overflow-hidden">
    <div class="relative px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span
              class="text-sm font-semibold tracking-wider text-[var(--md-sys-color-primary)] uppercase px-4 py-2 bg-[var(--md-sys-color-primary-container)] rounded-full">
            {{ $t('index.faq.tag') }}
          </span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[var(--md-sys-color-on-background)] mb-4">
          {{ $t('index.faq.title') }}
        </h2>
        <p class="text-lg text-[var(--md-sys-color-outline)]">
          {{ $t('index.faq.description') }}
        </p>
      </div>

      <div class="space-y-4">
        <div
            v-for="(item, index) in faqItems"
            :key="index"
            :class="{ 'faq-item-active': openIndex === index }"
            class="faq-item border border-[var(--md-sys-color-outline-variant)] rounded-xl overflow-hidden transition-all duration-300"
        >
          <button
              :aria-expanded="openIndex === index"
              class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[var(--md-sys-color-surface-variant)] transition-colors duration-200"
              @click="toggleFaq(index)"
          >
            <span
                :class="{ 'rotate-180': openIndex === index }"
                class="flex-shrink-0 w-10 h-10 mr-4 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] flex items-center justify-center font-bold transition-transform duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </span>

            <span class="font-semibold text-lg text-[var(--md-sys-color-on-background)] flex-1">
              {{ $t(item.question) }}
            </span>
          </button>

          <div
              :ref="el => { contentEls[index] = el }"
              :style="getContentStyle(index)"
              class="faq-content overflow-hidden"
          >
            <div class="px-6 pb-6 pt-4 border-t border-[var(--md-sys-color-outline-variant)]">
              <p class="text-base text-[var(--md-sys-color-outline)] leading-relaxed pl-14">
                {{ $t(item.answer) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
          class="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-[var(--md-sys-color-primary-container)] to-[var(--md-sys-color-tertiary-container)] border border-[var(--md-sys-color-outline-variant)]">
        <h3 class="text-xl font-bold text-[var(--md-sys-color-on-background)] mb-2">
          {{ $t('index.faq.join.title') }}
        </h3>
        <p class="text-[var(--md-sys-color-outline)] mb-6">
          {{ $t('index.faq.join.description') }}
        </p>
        <a
            class="inline-flex items-center px-6 py-3 text-base font-medium text-[var(--md-sys-color-on-primary)] bg-[var(--md-sys-color-primary)] rounded-lg hover:scale-105 transition-transform duration-200"
            href="https://discord.gg/U9fZSJJcte"
            target="_blank"
        >
          {{ $t('index.faq.join.button') }}
          <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const openIndex = ref(null)
const contentEls = ref([])
const contentHeights = ref([])

const faqItems = [
  {
    question: 'index.faq.items[0].question',
    answer: 'index.faq.items[0].answer'
  },
  {
    question: 'index.faq.items[1].question',
    answer: 'index.faq.items[1].answer'
  },
  {
    question: 'index.faq.items[2].question',
    answer: 'index.faq.items[2].answer'
  },
  {
    question: 'index.faq.items[3].question',
    answer: 'index.faq.items[3].answer'
  },
  {
    question: 'index.faq.items[4].question',
    answer: 'index.faq.items[4].answer'
  }
]

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const calculateHeights = () => {
  nextTick(() => {
    contentHeights.value = contentEls.value.map(el => {
      return el ? el.scrollHeight : 0
    })
  })
}

const getContentStyle = (index) => {
  const isOpen = openIndex.value === index
  const height = contentHeights.value[index] || 0

  return {
    maxHeight: isOpen ? `${height}px` : '0px',
    opacity: isOpen ? '1' : '0',
    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  }
}

const handleResize = () => {
  calculateHeights()
}

onMounted(() => {
  calculateHeights()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.faq-item {
  background-color: var(--md-sys-color-surface);
  transition: all 0.3s ease;
  transform: translateZ(0);
}

.faq-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px) translateZ(0);
}

.faq-item-active {
  border-color: var(--md-sys-color-primary);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.faq-content {
  will-change: max-height, opacity, transform;
  transform: translateZ(0);
}

.faq-content > div {
  transition: opacity 0.2s ease;
}
</style>