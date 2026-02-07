<script setup lang="ts">
import Form from "@/components/layouts/Form.vue";
import Header from "@/components/layouts/Header.vue";
import Table from "@/components/layouts/Table.vue";
import { ref, onMounted } from "vue";
import type { PDFReport } from "@/types";

const STORAGE_KEY = "pdf-reports";

const reports = ref<PDFReport[]>([]);

onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      reports.value = JSON.parse(stored);
    } catch (error) {
      console.error("Error loading reports from localStorage:", error);
    }
  }
});

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports.value));
};

const handleFormSubmit = (data: { judul: string; pageSize: string; deskripsi: string; nominal: number }) => {
  const newReport: PDFReport = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    judul: data.judul,
    pageSize: data.pageSize as "A4" | "A5" | "Letter",
    deskripsi: data.deskripsi,
    nominal: data.nominal,
    tanggal: new Date().toISOString(),
  };

  reports.value.push(newReport);
  saveToLocalStorage();
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <main class="container mx-auto px-4 py-6 space-y-6">
      <Form @submit="handleFormSubmit" />
      <Table :reports="reports" />
    </main>
  </div>
</template>
