# 🎬 Alfan - Video Editor, Content Creator & Crypto Community Co-Founder Portfolio

Portofolio & CV Online dengan desain **Dark Luxury Minimalist** (elegan, responsif, dan interaktif) yang dapat di-hosting secara **100% Gratis ($0 Biaya Selamanya)** di **Vercel** atau **GitHub Pages**.

---

## ✨ Fitur Utama

- **Estetika Elegan & Modern**: Tema dark obsidian (`#09090b`), aksen violet & cyan, glassmorphism, dan ambient glow.
- **Interactive Video Modal Player**: Pengunjung dapat memutar video (YouTube / Vimeo / Loom / MP4) langsung di dalam popup modal tanpa keluar dari website.
- **Filter Kategori Proyek**: *All Works*, *Short-Form (Reels/TikTok/Shorts)*, *Long-Form (YouTube)*, *Web3 & Crypto*, serta *Commercial & Ads*.
- **Impact & Metric Badges**: Menampilkan metrik impresi (Total Views, High-Retention Edits, Community Members, Satisfaction Rate).
- **Curriculum Vitae (CV) Timeline**: Rekam jejak kepemimpinan sebagai *Crypto Community Co-Founder* dan *Lead Video Editor*.
- **Creative Arsenal**: Software stack (Premiere Pro, After Effects, DaVinci Resolve, CapCut, AI tools seperti Midjourney & ElevenLabs).
- **Social Connect Hub**: Tombol cepat ke WhatsApp, Telegram, 1-Click Copy Email, LinkedIn, X (Twitter), dan YouTube.
- **1-Click Download CV**: Tombol unduh file PDF CV/Resume langsung.

---

## 📁 Struktur File

```
CV  portfolio/
├── index.html        # Struktur HTML utama portofolio & CV
├── style.css         # Styling kustom (glassmorphism, animamsi modal, glow, scrollbar)
├── script.js         # Data proyek, filter gallery, modal video player, toast copy email
├── vercel.json       # Konfigurasi static site untuk hosting gratis di Vercel
├── README.md         # Petunjuk penggunaan & deployment
└── assets/
    ├── cv/           # Tempat menyimpan file CV PDF (Alfan_CV.pdf)
    └── images/       # Folder opsional jika ingin menyimpan foto/thumbnail lokal
```

---

## 🛠️ Cara Mengedit & Kustomisasi Konten

### 1. Mengganti Video & Proyek Showcase
Buka file [`script.js`](script.js):
- Di bagian atas ada array `projects = [...]`.
- Anda cukup mengganti:
  - `title`: Judul video/proyek.
  - `category`: Pilih salah satu: `'short-form'`, `'long-form'`, `'crypto'`, atau `'commercial'`.
  - `views`: Misalnya `"1.5M Views"`.
  - `client`: Nama channel atau klien.
  - `thumbnail`: Link gambar thumbnail YouTube atau foto dari Unsplash.
  - `videoUrl`: Link embed YouTube (format: `https://www.youtube-nocookie.com/embed/KODE_VIDEO?autoplay=1`).

### 2. Mengganti Link Kontak & Nomor WhatsApp/Telegram
Buka file [`index.html`](index.html) dan cari bagian `id="contact"`:
- **WhatsApp**: Ganti nomor `6281234567890` pada link `https://wa.me/6281234567890` dengan nomor WhatsApp Anda.
- **Telegram**: Ganti `yourusername` pada link `https://t.me/yourusername`.
- **Email**: Buka [`script.js`](script.js) dan ubah nilai `emailVal = "alfan.projects@gmail.com"` dengan alamat email Anda.

### 3. Memasukkan File PDF CV
1. Siapkan file CV Anda dalam format PDF.
2. Beri nama file tersebut: `Alfan_CV.pdf`.
3. Masukkan ke dalam folder `assets/cv/`.

---

## 🚀 Cara Deploy ke Vercel (100% Gratis Selamanya)

Vercel adalah platform hosting tercepat untuk website personal dengan bandwidth gratis yang sangat besar, otomatis SSL (HTTPS), dan subdomain gratis (`namaproyek.vercel.app`).

### Langkah 1: Buat Repository di GitHub
1. Buka [GitHub](https://github.com) dan login (atau daftar jika belum punya akun).
2. Buat repository baru, misalnya bernama `portfolio-alfan` (set ke **Public**).
3. Upload semua file dari folder ini ke repository GitHub tersebut.

*(Atau via terminal jika sudah terbiasa dengan Git)*:
```bash
git init
git add .
git commit -m "feat: initial elegant portfolio showcase"
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/portfolio-alfan.git
git push -u origin main
```

### Langkah 2: Deploy ke Vercel
1. Kunjungi [vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** &rarr; pilih **"Project"**.
3. Cari repository `portfolio-alfan` yang baru saja Anda buat, lalu klik **"Import"**.
4. Biarkan semua pengaturan default (Vercel otomatis mendeteksi konfigurasi `vercel.json` dan `index.html`).
5. Klik **"Deploy"**.
6. Selesai! Dalam waktu kurang dari 1 menit, portofolio Anda akan langsung online dengan domain seperti `portfolio-alfan.vercel.app`.

> [!TIP]
> Setiap kali Anda mengupdate video atau teks di GitHub, Vercel akan otomatis meng-update website Anda secara instan tanpa perlu setting ulang!

---

## 🌐 Opsi Alternatif: Deploy ke GitHub Pages ($0)

Jika ingin menggunakan **GitHub Pages**:
1. Masuk ke repository GitHub Anda.
2. Buka tab **Settings** &rarr; menu **Pages** (di sisi kiri).
3. Di bagian **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
4. Website Anda akan aktif di alamat: `https://username.github.io/portfolio-alfan/`.
