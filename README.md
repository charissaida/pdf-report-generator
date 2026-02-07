# 📄 PDF Report Generator

A modern web application for generating PDF reports with featuring local storage persistence for data management.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

**PDF Generation**

- Complete form interface with page size selection (A4/A5/Letter)
- Title and description input fields with character validation

**Report History**

- Comprehensive table displaying all generated reports
- Automatic sorting by creation date (newest first)
- Persistent data storage using browser's localStorage

**Responsive Design**

- Optimized for mobile, tablet, and desktop devices

## 🛠️ Technology Stack

- **Vue 3**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **jsPDF**
- **Bootstrap Icons**

## 📋 Preparation

Ensure your system has the following installed:

- **Node.js** version 18.x or higher
- **npm** version 9.x or higher

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/username/pdf-report-generator.git
cd pdf-report-generator
```

### 2. Install Dependencies

Execute the following command in the project directory:

```bash
npm install
```

This will install all required packages and dependencies.

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/``

## 📁 Project Structure

```
PDF Report Generator/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images, fonts, and other static resources
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Header.vue      # Application header component
│   │   │   ├── Form.vue        # Report input form component
│   │   │   └── Table.vue       # Report history table component
│   │   └── ui/
│   │       ├── Button.vue      # Reusable button component
│   │       ├── Input.vue       # Reusable input component
│   │       ├── Textarea.vue    # Reusable textarea component
│   │       └── Toaster.vue     # Toast notification component
│   ├── composables/
│   │   └── useToast.ts         # Toast notification composable
│   ├── router/
│   │   └── index.ts            # Vue Router configuration
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── utils/
│   │   └── formatHelper.ts     # Currency and date formatting utilities
│   ├── views/
│   │   └── Home.vue            # Main application view
│   ├── App.vue                 # Root component
│   ├── main.ts                 # Application entry point
│   └── style.css               # Global styles
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

## 📖 User Guide

### Step 1: Complete the Report Form

**Page Size**

- Select from available options: A4, A5, or Letter
- Default selection: A4
- Required field

**Report Title**

- Minimum length: 5 characters
- Maximum length: 100 characters
- Character counter displayed for user reference
- Required field

**Description**

- Minimum length: 10 characters
- Multi-line text support
- Required field

**Amount**

- Automatic formatting to Indonesian Rupiah (IDR)
- Example: Input 1000000 → Displays as Rp 1.000.000
- Required field

### Step 2: Generate PDF Report

1. Ensure all form fields are properly filled
2. Click the **"Generate PDF"** button
3. Success notification is displayed
4. Report data is automatically saved to localStorage
5. Report entry is added to the history table
6. Form is automatically reset for the next report

### Step 3: View Report History

The history table displays the following information:

- **No**
- **Judul**
- **Page size**
- **Nominal**
- **Tanggal**
- **Aksi**
