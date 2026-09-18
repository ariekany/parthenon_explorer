# 🏛️ Parthenon WebAR & 3D Interactive Hub

deployed site link: https://parthenon-explorer.vercel.app/

Aplikasi web interaktif berbasis **React**, **Vite**, dan **Tailwind CSS** untuk mengeksplorasi situs sejarah kuil **Parthenon** di Athena. Dilengkapi dengan simulasi rekonstruksi 3D interaktif dan teknologi **WebAR (Augmented Reality)** menggunakan pustaka **A-Frame** dan **AR.js**.

---

## ✨ Fitur Utama

- **🏛️ Rekonstruksi & Reruntuhan**: Bandingkan kuil Parthenon dalam masa kejayaannya (rekonstruksi utuh) maupun penampakan reruntuhan aslinya saat ini.
- **🔍 Hotspot Interaktif & Fakta Menarik**: Pelajari bagian-bagian detail arsitektur kuil seperti patung Athena Parthenos, Pedimen, Frieze, Antefix, dan Selene Horse melalui model 3D interaktif Sketchfab.
- **📱 Portal WebAR Terintegrasi**:
  - Gunakan kamera smartphone Anda untuk memindai **HIRO Marker** yang tersedia di aplikasi.
  - Tampilkan kuil Parthenon 3D di atas meja secara langsung (real-world projection).
- **🤖 Mode Simulasi Instan**: Jika tidak ingin menyalakan kamera, Anda dapat mengaktifkan mode simulasi untuk melihat langsung render interaktif 3D di browser.
- **📝 Kuis Interaktif & FAQ**: Uji pengetahuan Anda tentang sejarah Parthenon dengan kuis interaktif yang seru.

---

## 🚀 Cara Menjalankan Projek

### 1. Instalasi Dependensi
Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal, kemudian jalankan perintah berikut di terminal:
```bash
npm install
```

### 2. Menjalankan Server Pengembangan
Jalankan server lokal untuk melihat aplikasi secara langsung di browser:
```bash
npm run dev
```
Aplikasi akan dapat diakses secara default di `http://localhost:3000`.

### 3. Build Produksi
Untuk mengompilasi aplikasi ke folder produksi:
```bash
npm run build
```

---

## 🛠️ Teknologi yang Digunakan

- **React 18 + Vite** — Framework dan Build Tool super cepat.
- **Tailwind CSS** — Framework CSS utilitas untuk desain UI yang elegan dan responsif.
- **Motion (Framer Motion)** — Animasi transisi antarmuka yang halus.
- **A-Frame & AR.js** — Kerangka kerja WebAR gratis dan bersumber terbuka untuk mendeteksi kamera dan marker.
- **Sketchfab Embeds** — Penampil interaktif 3D berperforma tinggi untuk eksplorasi objek sejarah secara detail.
