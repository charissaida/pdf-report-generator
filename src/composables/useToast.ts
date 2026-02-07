import { ref } from "vue";

interface ToastOptions {
  description?: string;
  duration?: number;
}

interface Toast {
  id: number;
  type: "success" | "error" | "info" | "warning";
  title: string;
  description?: string;
}

const toasts = ref<Toast[]>([]);
let toastId = 0;

const addToast = (type: Toast["type"], title: string, options?: ToastOptions) => {
  const id = toastId++;

  toasts.value.push({
    id,
    type,
    title,
    description: options?.description,
  });

  setTimeout(() => {
    removeToast(id);
  }, options?.duration || 3000);
};

const removeToast = (id: number) => {
  const index = toasts.value.findIndex((t) => t.id === id);
  if (index > -1) {
    toasts.value.splice(index, 1);
  }
};

export function useToast() {
  return {
    toasts,
    removeToast,
  };
}

export const toast = {
  success: (title: string, options?: ToastOptions) => addToast("success", title, options),
  error: (title: string, options?: ToastOptions) => addToast("error", title, options),
  info: (title: string, options?: ToastOptions) => addToast("info", title, options),
  warning: (title: string, options?: ToastOptions) => addToast("warning", title, options),
};
