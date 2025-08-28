# AgileFlow: Asisten Scrum Berbasis AI Anda

AgileFlow adalah sebuah starter kit Next.js yang dirancang untuk membangun alat Scrum Master yang siap produksi. Proyek ini hadir dengan tumpukan teknologi modern yang telah dikonfigurasi sebelumnya, memungkinkan Anda untuk fokus pada pengembangan fitur-fitur inovatif.

![Cuplikan Dasbor AgileFlow](https://placehold.co/800x400?text=AgileFlow+Dashboard)

## ✨ Fitur Utama

- **Dasbor Komprehensif**: Dapatkan gambaran umum tentang statistik sprint, kecepatan tim, dan aktivitas proyek terkini.
- **Papan Kanban (Kanban Board)**: Visualisasikan alur kerja dengan papan seret-dan-lepas (drag-and-drop) untuk mengelola tugas.
- **Manajemen Product Backlog**: Buat, lihat, dan kelola semua user story di satu tempat terpusat.
- **Perencanaan Sprint**: Rencanakan sprint Anda dengan mudah dengan memindahkan item dari backlog ke sprint aktif.
- **Asisten AI**: Manfaatkan Genkit untuk menghasilkan catatan harian dan ringkasan secara otomatis, membantu Anda mempersiapkan rapat harian dengan lebih efisien.
- **Laporan & Analitik**: Analisis performa tim dengan grafik kecepatan (velocity chart) dan burndown chart.
- **Autentikasi Pengguna**: Sistem autentikasi berbasis peran yang aman sudah terpasang.

Untuk daftar fitur yang lebih detail, silakan lihat berkas [FEATURES.md](./FEATURES.md).

## 🚀 Tumpukan Teknologi

- **Framework**: [Next.js 15](https://nextjs.org/) (dengan App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://react.dev/), [ShadCN UI](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **ORM**: [Prisma](https://www.prisma.io/) (dengan database PostgreSQL)
- **AI**: [Google's Genkit](https://firebase.google.com/docs/genkit)
- **Autentikasi**: Berbasis [JOSE](https://github.com/panva/jose) (JWT)

## 🏁 Memulai

1.  **Instal Dependensi**:
    ```bash
    npm install
    ```

2.  **Konfigurasi Database**:
    - Salin `.env.example` menjadi `.env`.
    - Isi `DATABASE_URL` dengan string koneksi PostgreSQL Anda.

3.  **Terapkan Skema & Seed Database**:
    Perintah `build` akan menjalankan migrasi dan seeding secara otomatis.
    ```bash
    npm run build
    ```
    Atau, Anda dapat menjalankannya secara manual:
    ```bash
    npx prisma db push
    npx prisma db seed
    ```

4.  **Jalankan Server Pengembangan**:
    ```bash
    npm run dev
    ```

    Aplikasi akan berjalan di `http://localhost:9003`.

## 👤 Pengguna Admin Default

Untuk masuk pertama kali, gunakan kredensial admin default yang dibuat oleh skrip seed:
- **Email**: `admin@example.com`
- **Password**: `admin123`
