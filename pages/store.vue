<template>
  <div class="pt-0 relative bg-[var(--md-sys-color-background)]">
    <!-- Hero -->
    <div class="pt-24 pb-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative text-center">
      <div class="inline-block mb-4">
        <span
            class="text-sm font-semibold tracking-wider text-[var(--md-sys-color-primary)] uppercase px-4 py-2 bg-[var(--md-sys-color-primary-container)] rounded-full">
          <i class="fa-solid fa-store mr-2"></i>Store
        </span>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--md-sys-color-on-background)] leading-tight">
        {{ $t('store.title') }}
      </h1>
      <p class="mt-6 text-lg text-[var(--md-sys-color-outline)] max-w-2xl mx-auto leading-relaxed">
        {{ $t('store.subtitle') }}
      </p>

      <!-- current username -->
      <div v-if="savedName"
           class="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] rounded-full text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-shadow">
        <div
            class="w-8 h-8 rounded-full overflow-hidden bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-primary)] flex items-center justify-center">
          <img v-if="avatarSrc" :src="avatarSrc" :alt="savedName || 'Minecraft head'"
               class="w-full h-full object-cover" style="image-rendering: pixelated" @error="avatarSrc = ''">
          <i v-else class="fa-solid fa-user"></i>
        </div>
        <span v-if="$te('store.loggedInAs')">{{ $t('store.loggedInAs', {name: savedName}) }}</span>
        <span v-else>Purchasing for: <strong class="font-bold">{{ savedName }}</strong></span>

        <button
            class="ml-2 px-4 py-1.5 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] rounded-full hover:opacity-90 transition-opacity font-bold text-xs uppercase tracking-wide"
            @click="openLoginModal">
          <span v-if="$te('store.changeName')">{{ $t('store.changeName') }}</span>
          <span v-else>Change</span>
        </button>
      </div>
    </div>

    <!-- Return banner (after PayNow redirect) -->
    <div v-if="banner" class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
      <div
          :class="bannerClass"
          class="flex items-start gap-3 rounded-2xl p-4 border"
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
    <div
        class="sticky top-16 z-40 bg-[var(--md-sys-color-background)]/95 backdrop-blur border-b border-[var(--md-sys-color-outline-variant)]">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav aria-label="Store categories" class="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
          <button
              v-for="cat in categories"
              :key="cat.key"
              :class="activeCat === cat.key
                ? 'border-[var(--md-sys-color-primary)] text-[var(--md-sys-color-primary)]'
                : 'border-transparent text-[var(--md-sys-color-outline)] hover:text-[var(--md-sys-color-on-background)]'"
              class="flex-shrink-0 inline-flex items-center gap-2 px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors duration-200"
              type="button"
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
          <span
              class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)]">
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
            <div
                class="inline-flex items-center p-1 rounded-full bg-[var(--md-sys-color-surface-variant)] border border-[var(--md-sys-color-outline-variant)]">
              <button
                  :class="billing === 'monthly' ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow' : 'text-[var(--md-sys-color-on-surface-variant)]'"
                  class="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  type="button"
                  @click="billing = 'monthly'"
              >
                {{ $t('store.billing.monthly') }}
              </button>
              <button
                  :class="billing === 'yearly' ? 'bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] shadow' : 'text-[var(--md-sys-color-on-surface-variant)]'"
                  class="px-5 py-2 rounded-full text-sm font-semibold transition-colors inline-flex items-center gap-2"
                  type="button"
                  @click="billing = 'yearly'"
              >
                {{ $t('store.billing.yearly') }}
                <span
                    :class="billing === 'yearly' ? 'bg-white/25 text-white' : 'bg-[var(--md-sys-color-primary-container)] text-[var(--md-sys-color-on-primary-container)]'"
                    class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
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
                :bgImage="tier.bgImage"
                class="!p-8"
            >
              <div class="h-7 mb-3">
              <span
                  v-if="tier.popular"
                  :style="{ color: tier.accent }"
                  class="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-bold uppercase tracking-wide drop-shadow"
              >
                {{ $t('store.popular') }}
              </span>
              </div>

              <h3 class="text-2xl font-extrabold text-white drop-shadow-lg">
                {{ $t(`store.tiers.${tier.key}.name`) }}
              </h3>
              <p class="mt-2 mb-6 text-white drop-shadow">
                <span class="text-4xl font-extrabold">{{ tier[billing].price }}</span>
                <span class="text-lg font-medium text-white/90">{{
                    billing === 'yearly' ? $t('store.perYear') : $t('store.perMonth')
                  }}</span>
              </p>

              <ul class="space-y-3 mb-8">
                <li
                    v-for="(perk, i) in tier.perks"
                    :key="i"
                    class="flex items-start text-white text-base group"
                >
                  <template v-if="perk.heading">
                    <span class="font-semibold italic text-white/90 drop-shadow">{{ $t(`store.tiers.${tier.key}.${perk.key}.name`) }}</span>
                  </template>
                  <template v-else>
                    <i aria-hidden="true"
                       class="fa-solid fa-circle-check text-lg mr-3 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300 drop-shadow"></i>
                    <span class="font-medium drop-shadow">{{ $t(`store.tiers.${tier.key}.${perk.key}.name`) }}</span>
                    <button
                        v-if="perk.info || perk.tags"
                        type="button"
                        :aria-label="$t(`store.tiers.${tier.key}.${perk.key}.name`)"
                        class="ml-2 mt-0.5 text-white/70 hover:text-white focus:text-white focus:outline-none"
                        @mouseenter="showFmt($event, perkTip(tier.key, perk))"
                        @mouseleave="hideFmt"
                        @focus="showFmt($event, perkTip(tier.key, perk))"
                        @blur="hideFmt"
                    >
                      <i class="fa-solid fa-circle-info text-sm"></i>
                    </button>
                  </template>
                </li>
              </ul>

              <button
                  :aria-label="$t('store.button', { tier: $t(`store.tiers.${tier.key}.name`) })"
                  :disabled="busyKey === tier.key"
                  :style="{ color: tier.accent }"
                  class="mt-auto inline-flex items-center justify-center px-6 py-4 text-base font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl group relative overflow-hidden disabled:opacity-70 disabled:hover:scale-100"
                  style="background: white;"
                  type="button"
                  @click="buy(tier)"
              >
                <div
                    class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 opacity-60"></div>
                <i v-if="busyKey === tier.key" class="fa-solid fa-spinner fa-spin relative z-10 mr-2"></i>
                <span class="relative z-10">{{ $t('store.button', {tier: $t(`store.tiers.${tier.key}.name`)}) }}</span>
                <i v-if="busyKey !== tier.key" aria-hidden="true"
                   class="fa-solid fa-arrow-right ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </IndexCtaCard>
          </div>

          <p class="mt-12 text-center text-sm text-[var(--md-sys-color-outline)]">
            <i aria-hidden="true" class="fa-solid fa-shield-halved mr-2"></i>
            <i18n-t keypath="store.securedBy" tag="span">
              <template #paynow>
                <a class="hover:underline hover:text-[var(--md-sys-color-on-background)] transition-colors font-medium" href="https://paynow.gg/"
                   target="_blank">PayNow</a>
              </template>
            </i18n-t>
          </p>
        </template>

        <!-- Empty: coming soon -->
        <div
            v-else
            class="rounded-3xl border-2 border-dashed border-[var(--md-sys-color-outline-variant)] bg-[var(--md-sys-color-surface)] py-16 px-6 flex flex-col items-center text-center"
        >
          <span
              class="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--md-sys-color-tertiary-container)] text-[var(--md-sys-color-on-tertiary-container)] mb-5">
            <i :class="cat.icon" aria-hidden="true" class="text-2xl"></i>
          </span>
          <p class="text-xl font-bold text-[var(--md-sys-color-on-background)]">{{ $t('store.comingSoon') }}</p>
          <p class="mt-2 text-[var(--md-sys-color-outline)] max-w-md">{{ $t('store.comingSoonDesc') }}</p>
        </div>
      </section>
    </div>

    <StoreCheckoutModal
        :error="modalError"
        :initial-name="savedName"
        :is-change-only="!pending"
        :loading="modalLoading"
        :open="modalOpen"
        @close="modalOpen = false"
        @submit="onModalSubmit"
    />

    <!-- Formatting-tags tooltip (teleported so the card's overflow can't clip it) -->
    <Teleport to="body">
      <div
          v-if="fmt.open"
          :style="{ left: fmt.x + 'px', top: fmt.y + 'px' }"
          class="fixed z-[300] -translate-x-1/2 -translate-y-full rounded-xl p-3 shadow-2xl pointer-events-none bg-[var(--md-sys-color-inverse-surface)] text-[var(--md-sys-color-inverse-on-surface)]"
          :class="fmt.tags ? 'w-56' : 'w-max max-w-[16rem]'"
      >
        <p class="text-xs font-bold uppercase tracking-wide opacity-80" :class="(fmt.detail || fmt.tags) ? 'mb-2' : ''">
          {{ fmt.title }}
        </p>
        <p v-if="fmt.detail" class="text-sm opacity-90" :class="fmt.tags ? 'mb-2' : ''">{{ fmt.detail }}</p>
        <div v-if="fmt.tags" class="grid grid-cols-2 gap-x-3 gap-y-1">
          <span class="flex items-center text-sm">
            <i class="fa-solid fa-check text-green-400 text-xs mr-1.5"></i>{{ $t('store.formatSolidTag') }}
          </span>
          <span
              v-for="(tag, ti) in formatTags"
              :key="ti"
              class="flex items-center text-sm"
              :class="fmt.tags === 'full' ? '' : 'opacity-70'"
          >
            <i
                class="text-xs mr-1.5"
                :class="fmt.tags === 'full' ? 'fa-solid fa-check text-green-400' : 'fa-solid fa-xmark text-red-400'"
            ></i>{{ tag }}
          </span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const appConfig = useAppConfig()
const {t} = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const {authenticate, createCheckout, getToken, getName, clearAuth} = usePaynowCheckout()

const categories = appConfig.StoreCategories
const formatTags = appConfig.StoreFormatTags

// --- perk detail tooltip (teleported so the card's overflow can't clip it) ---
const fmt = reactive({open: false, x: 0, y: 0, title: '', detail: '', tags: null})
const perkTip = (tierKey, perk) => {
  const tags = perk.tags || null
  let title
  if (tags === 'full') title = t('store.formatPerk')
  else if (tags === 'solid') title = t('store.formatLockedHeader')
  else title = t(`store.tiers.${tierKey}.${perk.key}.name`)
  return {title, detail: perk.info ? t(`store.tiers.${tierKey}.${perk.key}.detail`) : '', tags}
}
const showFmt = (e, tip) => {
  const r = e.currentTarget.getBoundingClientRect()
  fmt.x = Math.min(Math.max(r.left + r.width / 2, 130), window.innerWidth - 130)
  fmt.y = r.top - 8
  fmt.title = tip.title
  fmt.detail = tip.detail
  fmt.tags = tip.tags
  fmt.open = true
}
const hideFmt = () => {
  fmt.open = false
}

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

// --- player head avatar (cached in localStorage, 7-day TTL, so it doesn't re-hit the API) ---
const avatarSrc = ref('')
const AVATAR_TTL = 7 * 24 * 60 * 60 * 1000
const avatarApi = (name) => `https://mc-heads.net/avatar/${encodeURIComponent(name)}/64`
async function loadAvatar(name) {
  if (typeof window === 'undefined') return
  if (!name) {
    avatarSrc.value = ''
    return
  }
  const key = `pn_avatar_${name.toLowerCase()}`
  try {
    const cached = JSON.parse(localStorage.getItem(key) || 'null')
    if (cached?.data && Date.now() - cached.ts < AVATAR_TTL) {
      avatarSrc.value = cached.data
      return
    }
  } catch (e) { /* ignore */ }
  avatarSrc.value = avatarApi(name) // show immediately via the API URL
  try { // then cache as a data URL so future loads don't hit the API again
    const blob = await (await fetch(avatarApi(name))).blob()
    const data = await new Promise((res) => {
      const r = new FileReader()
      r.onloadend = () => res(r.result)
      r.readAsDataURL(blob)
    })
    localStorage.setItem(key, JSON.stringify({data, ts: Date.now()}))
    avatarSrc.value = data
  } catch (e) { /* keep the direct URL if caching fails (e.g. CORS) */ }
}
watch(savedName, (n) => loadAvatar(n))

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

function openLoginModal() {
  savedName.value = getName()
  modalError.value = ''
  pending.value = null
  modalOpen.value = true
}

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
    window.open(url, '_blank')
    busyKey.value = null
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
    savedName.value = getName()
    modalLoading.value = false
    modalOpen.value = false
    if (pending.value) await checkout()
  } catch (e) {
    modalLoading.value = false
    modalError.value = t('store.checkout.error')
  }
}

onMounted(() => {
  savedName.value = getName()

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
