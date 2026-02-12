<script setup lang="ts">
import { ref, computed } from "vue";
import type { FormData } from "@/types";
import { toast } from "@/composables/useToast";
import Input from "../ui/Input.vue";
import Textarea from "../ui/Textarea.vue";
import Button from "../ui/Button.vue";

const emit = defineEmits<{
  submit: [data: { judul: string; pageSize: string; deskripsi: string; nominal: number }];
}>();

const form = ref<FormData>({
  pageSize: "A4",
  judul: "",
  deskripsi: "",
  nominal: "",
});

const errors = ref({
  pageSize: "",
  judul: "",
  deskripsi: "",
  nominal: "",
});

const isLoading = ref(false);

const nominalDisplay = computed(() => {
  const numbers = form.value.nominal.replace(/\D/g, "");
  return numbers ? parseInt(numbers).toLocaleString("id-ID") : "";
});

const handleNominalInput = (e: Event) => {
  const input = e.target as HTMLInputElement;
  form.value.nominal = input.value.replace(/\D/g, "");
};

const validate = () => {
  errors.value = {
    pageSize: "",
    judul: "",
    deskripsi: "",
    nominal: "",
  };

  if (!form.value.judul.trim()) {
    errors.value.judul = "Judul tidak boleh kosong";
  } else if (form.value.judul.length < 5) {
    errors.value.judul = "Judul minimal 5 karakter";
  }

  if (!form.value.deskripsi.trim()) {
    errors.value.deskripsi = "Deskripsi tidak boleh kosong";
  } else if (form.value.deskripsi.length < 10) {
    errors.value.deskripsi = "Deskripsi minimal 10 karakter";
  }

  if (!form.value.nominal) {
    errors.value.nominal = "Nominal tidak boleh kosong";
  }

  return !Object.values(errors.value).some((err) => err);
};

const handleSubmit = async () => {
  if (!validate()) {
    toast.error("Mohon lengkapi form dengan benar");
    return;
  }

  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    emit("submit", {
      judul: form.value.judul,
      pageSize: form.value.pageSize,
      deskripsi: form.value.deskripsi,
      nominal: parseInt(form.value.nominal),
    });

    toast.success("PDF berhasil dibuat");

    form.value = {
      pageSize: "A4",
      judul: "",
      deskripsi: "",
      nominal: "",
    };

    errors.value = {
      pageSize: "",
      judul: "",
      deskripsi: "",
      nominal: "",
    };
  } catch (error) {
    toast.error("Gagal membuat PDF");
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="bg-white rounded-lg shadow">
    <div class="px-6 py-4 border-b border-gray-200">
      <h2 class="text-xl font-bold text-gray-800">Form Generate PDF</h2>
    </div>

    <form @submit.prevent="handleSubmit" class="p-6 space-y-5">
      <div class="grid md:grid-cols-[200px_1fr] gap-5">
        <div>
          <label for="pageSize" class="block text-sm font-medium mb-1">Ukuran Halaman</label>
          <select id="pageSize" v-model="form.pageSize" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="A4">A4</option>
            <option value="A5">A5</option>
            <option value="Letter">Letter</option>
          </select>
        </div>

        <Input id="judul" v-model="form.judul" label="Judul Laporan" type="text" placeholder="Masukkan judul laporan..." :maxlength="100" :show-length="true" :error="errors.judul" required />
      </div>

      <Textarea id="deskripsi" v-model="form.deskripsi" label="Deskripsi" :rows="4" placeholder="Masukkan isi laporan..." :error="errors.deskripsi" required />

      <Input id="nominal" type="text" label="Nominal" :value="nominalDisplay" @input="handleNominalInput" placeholder="0" prefix="Rp" :error="errors.nominal" required />

      <div class="flex justify-end">
        <Button type="submit" :loading="isLoading" icon="bi bi-file-earmark-pdf">
          {{ isLoading ? "Generating..." : "Generate PDF" }}
        </Button>
      </div>
    </form>
  </div>
</template>
