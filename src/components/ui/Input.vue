<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  error?: string;
  maxlength?: number;
  showLength?: boolean;
  required?: boolean;
  prefix?: string;
  class?: string;
}

const props = defineProps<Props>();
const model = defineModel<string | number>();

const inputValue = computed(() => {
  return typeof model.value === "string" ? model.value : String(model.value || "");
});
</script>

<template>
  <div>
    <label v-if="label" class="block text-sm font-medium mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div :class="prefix ? 'relative' : ''">
      <span v-if="prefix" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">{{ prefix }}</span>
      <input
        v-model="model"
        :type="type || 'text'"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :class="`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${prefix ? 'pl-12' : ''} ${error ? 'border-red-500' : 'border-gray-300'} ${props.class || ''}`"
      />
    </div>
    <div v-if="error || showLength" class="flex justify-between mt-1">
      <span v-if="error" class="text-sm text-red-600">{{ error }}</span>
      <span v-if="showLength && maxlength" class="text-xs text-gray-500 ml-auto"> {{ inputValue.length }}/{{ maxlength }} </span>
    </div>
  </div>
</template>
