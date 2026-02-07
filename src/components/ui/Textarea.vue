<script setup lang="ts">
interface Props {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  rows?: number;
  error?: string;
  required?: boolean;
  class?: string;
}

const props = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
  <div>
    <label v-if="label" class="block text-sm font-medium mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <textarea
      v-model="model"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows || 4"
      :class="`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed resize-y ${error ? 'border-red-500' : 'border-gray-300'} ${props.class || ''}`"
    />
    <span v-if="error" class="text-sm text-red-600">{{ error }}</span>
  </div>
</template>
