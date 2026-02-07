<script setup lang="ts">
import { useToast } from "@/composables/useToast";

const { toasts, removeToast } = useToast();

const toastStyles = {
  success: {
    bg: "bg-green-50 border-green-200",
    text: "text-green-800",
    icon: "bi-check-circle-fill text-green-600",
  },
  error: {
    bg: "bg-red-50 border-red-200",
    text: "text-red-800",
    icon: "bi-x-circle-fill text-red-600",
  },
  info: {
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
    icon: "bi-info-circle-fill text-blue-600",
  },
  warning: {
    bg: "bg-yellow-50 border-yellow-200",
    text: "text-yellow-800",
    icon: "bi-exclamation-triangle-fill text-yellow-600",
  },
};
</script>

<template>
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
    <TransitionGroup name="toast">
      <div v-for="toast in toasts" :key="toast.id" :class="['flex items-start gap-3 p-4 rounded-lg border shadow-lg', toastStyles[toast.type].bg, toastStyles[toast.type].text]">
        <i :class="[toastStyles[toast.type].icon, 'text-xl mt-0.5']"></i>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-sm">{{ toast.title }}</p>
          <p v-if="toast.description" class="text-sm opacity-90 mt-1">
            {{ toast.description }}
          </p>
        </div>
        <button @click="removeToast(toast.id)" class="text-current opacity-50 hover:opacity-100 transition-opacity">
          <i class="bi-x-lg text-sm"></i>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
