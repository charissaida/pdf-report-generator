export interface PDFReport {
  id: string;
  judul: string;
  pageSize: "A4" | "A5" | "Letter";
  deskripsi: string;
  nominal: number;
  tanggal: string;
}

export interface FormData {
  pageSize: "A4" | "A5" | "Letter";
  judul: string;
  deskripsi: string;
  nominal: string;
}

export interface ValidationErrors {
  pageSize?: string;
  judul?: string;
  deskripsi?: string;
  nominal?: string;
}
