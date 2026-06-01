<template>
  <div class="pt-16">
    <!-- Hero -->
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-12 pb-6 text-center">
      <h1 class="text-3xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-4xl">
        {{ $t('store.title') }}
      </h1>
      <div class="flex justify-center mt-4">
        <div class="h-1 w-20 rounded-full bg-[var(--md-sys-color-primary)]"></div>
      </div>
      <p class="mt-6 text-lg text-[var(--md-sys-color-outline)] max-w-2xl mx-auto">
        {{ $t('store.subtitle') }}
      </p>
    </div>

    <!-- Return banner (after PayNow redirect) -->
    <div v-if="banner" class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
      <div
          class="flex items-start gap-3 rounded-2xl p-4 border"
          :class="bannerClass"
      >
        <i :class="bannerIcon" class="text-xl mt-0.5"></i>
        <div class="flex-1">
          <p class="font-bold">{{ $t(`store.checkout.${banner}Title`) }}</p>
          <p class="text-sm opacity-90">{{ $t(`store.checkout.${banner}Desc`) }}</p>
        </div>
        <button :aria-label="$t('store.checkout.cancel')" class="opacity-70 hover:opacity-100" @click="banner = null">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>

    <!-- Sticky category tabs -->
    <div class="sticky top-16 z-40 bg-[var(--md-sys-color-background)]/95 backdrop-blur border-b border-[var(--md-sys-color-outline-variant)]">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar" aria-label="Store categories">
          <button
              v-for="cat in categories"
              :key="cat.key"
              type="button"
              class="flex-shrink-0 inline-flex items-center gap-2 px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors duration-200"
              :class="activeCat === cat.key
                ? 'border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-primary)]'
                : 'border-transparent text-[var(--md-sys-color-outline)] hover:text-[var(--md-sys-color-on-background)]'"
              @click="goTo(cat.key)"
          >
            <i :class="cat.icon" aria-hidden="true"></i>
            {{ $t(`store.categories.${cat.key}.name`) }}
          </button>
        </nav>
      </div>
    </div>

    <!-- Sections -->
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-16">
      <section
          v-for="cat in categories"
          :id="`cat-${cat.key}`"
          :key="cat.key"
          class="scroll-mt-36 pt-12"
      >
        <div class="flex items-center gap-3 mb-8">
          <span class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]">
            <i :class="cat.icon" aria-hidden="true"></i>
          </span>
          <h2 class="text-2xl font-extrabold text-[var(--md-sys-color-on-background)]">
            {{ $t(`store.categories.${cat.key}.name`) }}
          </h2>
        </div>

        <!-- Populated: rank/product cards -->
        <template v-if="cat.tiers.length">
          <!-- Monthly / Yearly toggle (per priced category) -->
          <div class="mb-8 flex">
            <div class="inline-flex items-center p-1 rounded-full bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)]">
              <button
                  type="button"
                  class="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  :class="billing === 'monthly' ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow' : 'text-[var(--md-sys-color-on-surface-variant)]'"
                  @click="billing = 'monthly'"
              >
                {{ $t('store.billing.monthly') }}
              </button>
              <button
                  type="button"
                  class="px-5 py-2 rounded-full text-sm font-semibold transition-colors inline-flex items-center gap-2"
                  :class="billing === 'yearly' ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow' : 'text-[var(--md-sys-color-on-surface-variant)]'"
                  @click="billing = 'yearly'"
              >
                {{ $t('store.billing.yearly') }}
                <span
                    class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    :class="billing === 'yearly' ? 'bg-white/25 text-white' : 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'"
                >
                  {{ $t('store.billing.save') }}
                </span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <IndexCtaCard
              v-for="tier in cat.tiers"
              :key="tier.key"
              :gradientStyle="`background: linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.72)), ${tier.gradient}`"
              class="!p-8"
          >
            <div class="h-7 mb-3">
              <span
                  v-if="tier.popular"
                  class="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-bold uppercase tracking-wide drop-shadow"
                  :style="{ color: tier.accent }"
              >
                {{ $t('store.popular') }}
              </span>
            </div>

            <h3 class="text-2xl font-extrabold text-white drop-shadow-lg">
              {{ $t(`store.tiers.${tier.key}.name`) }}
            </h3>
            <p class="mt-2 mb-6 text-white drop-shadow">
              <span class="text-4xl font-extrabold">{{ tier[billing].price }}</span>
              <span class="text-lg font-medium text-white/90">{{ billing === 'yearly' ? $t('store.perYear') : $t('store.perMonth') }}</span>
            </p>

            <ul class="space-y-3 mb-8">
              <li
                  v-for="(perk, i) in perks(tier.key)"
                  :key="i"
                  class="flex items-start text-white text-base group"
              >
                <template v-if="isHeading(rt(perk))">
                  <span class="font-semibold italic text-white/90 drop-shadow">{{ rt(perk) }}</span>
                </template>
                <template v-else>
                  <i aria-hidden="true"
                     class="fa-solid fa-circle-check text-lg mr-3 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 drop-shadow"></i>
                  <span class="font-medium drop-shadow">{{ rt(perk) }}</span>
                </template>
              </li>
            </ul>

            <button
                type="button"
                :disabled="busyKey === tier.key"
                :aria-label="$t('store.button', { tier: $t(`store.tiers.${tier.key}.name`) })"
                class="mt-auto inline-flex items-center justify-center px-6 py-4 text-base font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl group relative overflow-hidden disabled:opacity-70 disabled:hover:scale-100"
                style="background: white;"
                :style="{ color: tier.accent }"
                @click="buy(tier)"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-60"></div>
              <i v-if="busyKey === tier.key" class="fa-solid fa-spinner fa-spin relative z-10 mr-2"></i>
              <span class="relative z-10">{{ $t('store.button', { tier: $t(`store.tiers.${tier.key}.name`) }) }}</span>
              <i v-if="busyKey !== tier.key" aria-hidden="true" class="fa-solid fa-arrow-right ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </IndexCtaCard>
          </div>
        </template>

        <!-- Empty: coming soon -->
        <div
            v-else
            class="rounded-3xl border-2 border-dashed border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] py-16 px-6 flex flex-col items-center text-center"
        >
          <span class="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] mb-5">
            <i :class="cat.icon" aria-hidden="true" class="text-2xl"></i>
          </span>
          <p class="text-xl font-bold text-[var(--md-sys-color-on-background)]">{{ $t('store.comingSoon') }}</p>
          <p class="mt-2 text-[var(--md-sys-color-outline)] max-w-md">{{ $t('store.comingSoonDesc') }}</p>
        </div>
      </section>

      <p class="mt-12 text-center text-sm text-[var(--md-sys-color-outline)]">
        <i aria-hidden="true" class="fa-solid fa-shield-halved mr-2"></i>{{ $t('store.securedBy') }}
      </p>
    </div>

    <StoreCheckoutModal
        :open="modalOpen"
        :loading="modalLoading"
        :error="modalError"
        :initial-name="savedName"
        @submit="onModalSubmit"
        @close="modalOpen = false"
    />
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
const {t, tm, rt} = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const {authenticate, createCheckout, getToken, getName, clearAuth} = usePaynowCheckout()

const categories = appConfig.StoreCategories

const perks = (key) => tm(`store.tiers.${key}.perks`)
const isHeading = (text) => typeof text === 'string' && text.trim().endsWith(':')

// --- category scrollspy ---
const activeCat = ref(categories[0]?.key)
let observer

const goTo = (key) => {
  activeCat.value = key
  document.getElementById(`cat-${key}`)?.scrollIntoView({behavior: 'smooth', block: 'start'})
}

// --- billing toggle ---
const billing = ref('monthly') // 'monthly' | 'yearly'

// --- checkout ---
const modalOpen = ref(false)
const modalLoading = ref(false)
const modalError = ref('')
const savedName = ref(null)
const pending = ref(null) // { key, productId }
const busyKey = ref(null)
const banner = ref(null) // 'success' | 'cancel' | 'error'

const bannerClass = computed(() => ({
  success: 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)] border-[var(--md-sys-color-primary)]',
  cancel: 'bg-[var(--md-sys-color-surface-variant)] text-[var(--md-sys-color-on-surface-variant)] border-[var(--md-sys-color-outline-variant)]',
  error: 'bg-[var(--md-sys-color-error-container)] text-[var(--md-sys-color-on-error-container)] border-[var(--md-sys-color-error)]',
}[banner.value]))

const bannerIcon = computed(() => ({
  success: 'fa-solid fa-circle-check',
  cancel: 'fa-solid fa-circle-info',
  error: 'fa-solid fa-circle-exclamation',
}[banner.value]))

const returnUrls = () => {
  const origin = window.location.origin
  const path = localePath('/store')
  return {
    returnUrl: `${origin}${path}?purchase=success`,
    cancelUrl: `${origin}${path}?purchase=cancel`,
  }
}

async function buy(tier) {
  pending.value = {key: tier.key, productId: tier[billing.value].id}
  if (getToken()) {
    await checkout()
  } else {
    savedName.value = getName()
    modalError.value = ''
    modalOpen.value = true
  }
}

async function checkout() {
  if (!pending.value) return
  busyKey.value = pending.value.key
  try {
    const url = await createCheckout(pending.value.productId, returnUrls())
    window.location.href = url
  } catch (e) {
    busyKey.value = null
    if (e?.response?.status === 401) {
      clearAuth()
      savedName.value = getName()
      modalError.value = ''
      modalOpen.value = true
    } else {
      banner.value = 'error'
    }
  }
}

async function onModalSubmit(username) {
  modalLoading.value = true
  modalError.value = ''
  try {
    await authenticate(username)
    modalLoading.value = false
    modalOpen.value = false
    if (pending.value) await checkout()
  } catch (e) {
    modalLoading.value = false
    modalError.value = t('store.checkout.error')
  }
}

onMounted(() => {
  const p = route.query.purchase
  if (p === 'success' || p === 'cancel') banner.value = p

  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) activeCat.value = e.target.id.replace('cat-', '')
        })
      },
      {rootMargin: '-45% 0px -50% 0px', threshold: 0}
  )
  categories.forEach((c) => {
    const el = document.getElementById(`cat-${c.key}`)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => observer?.disconnect())

useSeoMeta({
  title: () => t('store.title'),
  description: () => t('store.subtitle'),
  twitterTitle: () => t('store.title'),
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
