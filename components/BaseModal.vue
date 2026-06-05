<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeable && $emit('close')"></div>

        <div
            class="relative z-10 w-full max-w-md rounded-2xl bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] shadow-2xl p-6 modal-container">
          <button
              v-if="closeable"
              aria-label="Close"
              class="absolute top-4 right-4 w-8 h-8 rounded-full text-[var(--md-sys-color-outline)] hover:text-[var(--md-sys-color-on-background)] hover:bg-[var(--md-sys-color-surface-variant)] transition-colors"
              @click="$emit('close')"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  open: Boolean,
  closeable: {type: Boolean, default: true}
})
defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95) translateY(10px);
}
</style>
