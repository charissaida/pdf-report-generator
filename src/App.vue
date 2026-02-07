<script setup lang="ts">
import Toaster from "./components/ui/Toaster.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <RouterView />
    <Toaster />
  </div>
</template>
