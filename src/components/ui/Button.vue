<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
  icon?: string;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
  variant: "primary",
  loading: false,
});

const buttonClass = computed(() => {
  const base = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    ghost: "bg-transparent hover:bg-gray-100 focus:ring-gray-500",
  };

  return `${base} ${variants[props.variant]} ${props.class || ""}`;
});
</script>

<template>
  <button :type="type" :disabled="disabled || loading" :class="buttonClass">
    <span v-if="loading" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
    <i v-else-if="icon" :class="icon"></i>
    <slot />
  </button>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
