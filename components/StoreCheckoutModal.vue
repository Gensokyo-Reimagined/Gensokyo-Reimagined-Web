<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="!loading && $emit('close')"></div>

      <div class="relative z-10 w-full max-w-md rounded-2xl bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] shadow-2xl p-6">
        <button
            class="absolute top-4 right-4 w-8 h-8 rounded-full text-[var(--md-sys-color-outline)] hover:text-[var(--md-sys-color-on-background)] hover:bg-[var(--md-sys-color-surface-variant)] transition-colors"
            :disabled="loading"
            :aria-label="$t('store.checkout.cancel')"
            @click="$emit('close')"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="flex items-center gap-3 mb-3">
          <span class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]">
            <i class="fa-solid fa-cube"></i>
          </span>
          <h3 class="text-xl font-extrabold text-[var(--md-sys-color-on-background)]">{{ $t('store.checkout.title') }}</h3>
        </div>
        <p class="text-sm text-[var(--md-sys-color-outline)] mb-5">{{ $t('store.checkout.desc') }}</p>

        <label class="block text-sm font-semibold text-[var(--md-sys-color-on-background)] mb-2">
          {{ $t('store.checkout.usernameLabel') }}
        </label>
        <input
            ref="inputRef"
            v-model="username"
            type="text"
            autocomplete="off"
            spellcheck="false"
            :placeholder="$t('store.checkout.usernamePlaceholder')"
            :disabled="loading"
            class="w-full px-4 py-3 rounded-xl bg-[var(--md-sys-color-background)] border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-background)] focus:outline-none focus:border-[var(--md-sys-color-primary)] transition-colors"
            @keyup.enter="submit"
        />

        <p v-if="error" class="mt-3 text-sm text-[var(--md-sys-color-error)] flex items-center gap-2">
          <i class="fa-solid fa-circle-exclamation"></i>{{ error }}
        </p>

        <div class="flex gap-3 mt-6">
          <button
              class="flex-1 px-4 py-3 rounded-xl font-semibold border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-background)] hover:bg-[var(--md-sys-color-surface-variant)] transition-colors disabled:opacity-50"
              :disabled="loading"
              @click="$emit('close')"
          >
            {{ $t('store.checkout.cancel') }}
          </button>
          <button
              class="flex-1 px-4 py-3 rounded-xl font-bold bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] hover:opacity-90 transition-opacity disabled:opacity-50 inline-flex items-center justify-center gap-2"
              :disabled="loading || !username.trim()"
              @click="submit"
          >
            <i v-if="loading" class="fa-solid fa-spinner fa-spin"></i>
            {{ loading ? $t('store.checkout.loading') : $t('store.checkout.continue') }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  open: Boolean,
  loading: Boolean,
  error: String,
  initialName: String,
})
const emit = defineEmits(['submit', 'close'])

const username = ref(props.initialName || '')
const inputRef = ref(null)

watch(
    () => props.open,
    (isOpen) => {
      if (isOpen) {
        username.value = props.initialName || ''
        nextTick(() => inputRef.value?.focus())
      }
    }
)

function submit() {
  const name = username.value.trim()
  if (name && !props.loading) emit('submit', name)
}
</script>
