# Kanvaz Galeri — Premium Landing Page

Landing page one-page untuk **Kanvaz Galeri**, toko perlengkapan seni dan produk kreatif di Pekanbaru, Riau.

Desain terinspirasi oleh kualitas visual dan motion dari website referensi seperti *Framewise*, tetapi identitas brand Kanvaz Galeri dibuat sendiri dengan warna utama merah `#DC2626`, nuansa editorial, photography-led layout, dan CTA yang mengarah ke WhatsApp.

## Struktur Project

```text
kanvazgaleri2/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    └── icons/
```

## Cara Menjalankan

Project ini tidak membutuhkan build step atau Node.js karena Tailwind CSS, GSAP, ScrollTrigger, dan Iconify dimuat melalui CDN.

### Opsi 1 — VS Code Live Server

1. Buka folder project `kanvazgaleri2` di VS Code.
2. Install extension **Live Server**.
3. Klik kanan `index.html` → **Open with Live Server**.
4. Browser akan membuka alamat seperti `http://127.0.0.1:5500/`.

### Opsi 2 — Python HTTP Server

Buka terminal di folder project:

```bash
cd C:\Users\DELL\Downloads\kanvazgaleri2
python -m http.server 8000
```

Kemudian buka:

```text
http://127.0.0.1:8000
```

Menggunakan local server lebih disarankan daripada membuka `index.html` langsung dengan `file://`, terutama karena project menggunakan banyak asset remote dan JavaScript interaktif.

## Library yang Digunakan

- **HTML5** — struktur halaman.
- **Tailwind CSS CDN** — utility styling dan responsive layout.
- **GSAP 3.12.5** — animasi dan motion.
- **GSAP ScrollTrigger** — scroll reveal, parallax, dan scroll-based interaction.
- **Vanilla JavaScript** — logic interaksi tanpa framework.
- **Iconify** — icon UI.
- **Google Fonts** — Manrope dan DM Mono.

## Fitur Utama

Landing page saat ini mencakup:

- Preloader dengan progress animation.
- Custom cursor desktop.
- Scroll progress bar.
- Sticky / compact navbar.
- Mobile navigation.
- Hero word reveal animation.
- Infinite marquee.
- Bento category layout.
- Product cards dengan hover / tilt interaction.
- Image parallax.
- Magnetic CTA button.
- Storytelling section.
- School / education section.
- Custom product section.
- Dynamic product cards.
- Dynamic image gallery.
- Gallery lightbox.
- FAQ accordion.
- Final WhatsApp CTA.
- Contact information dan social links.
- Reduced-motion handling.
- Image fallback ketika asset gagal dimuat.

## Cara Mengganti Foto Placeholder

Semua URL foto utama dikumpulkan di bagian atas `js/main.js` pada object:

```javascript
const IMAGES = {
    // ...
};
```

Contoh:

```javascript
const IMAGES = {
    heroMain: 'assets/images/hero-main.jpg',
    heroFloat: 'assets/images/hero-float.jpg',

    bentoCanvas: 'assets/images/bento-canvas.jpg',
    bentoPaint: 'assets/images/bento-paint.jpg',
    bentoSchool: 'assets/images/bento-school.jpg',
    bentoTote: 'assets/images/bento-tote.jpg',
    bentoApparel: 'assets/images/bento-apparel.jpg',

    prodCanvas: 'assets/images/product-canvas.jpg',
    prodPaint: 'assets/images/product-paint.jpg',
    // dst.
};
```

### Pola file yang disarankan

Simpan aset asli di:

```text
assets/images/
```

Gunakan nama yang konsisten, misalnya:

```text
hero-main.webp
hero-float.webp
bento-canvas.webp
bento-paint.webp
product-canvas.webp
product-paint.webp
product-tote.webp
product-umbrella.webp
product-sandal.webp
product-kaos.webp
about.webp
school.webp
custom-kaos.webp
custom-tote.webp
gallery-01.webp
gallery-02.webp
...
```

Lalu ubah value di object `IMAGES` tanpa perlu mengubah logic animasi di `main.js`.

### Gallery

Gallery menggunakan array:

```javascript
gallery: [
    'assets/images/gallery-01.webp',
    'assets/images/gallery-02.webp',
    'assets/images/gallery-03.webp',
    // ...
],
```

Caption-nya dikelola oleh array `galleryCaptions` dengan urutan yang sama. Jadi jumlah gambar dan caption harus tetap sinkron.

## Hal yang Perlu Disiapkan untuk Finalisasi

### 1. Logo asli

Siapkan minimal:

- Logo utama Kanvaz Galeri.
- Format **SVG** jika tersedia.
- PNG transparan resolusi tinggi sebagai fallback.
- Versi logo untuk background terang.
- Versi logo untuk background gelap bila ada.
- Favicon / icon mark bila tersedia.

Idealnya kirim file logo vector asli agar tidak perlu menggunakan text logo `KANVAZ.` sebagai versi final.

### 2. Foto Hero

Prioritas tertinggi adalah foto hero karena menjadi visual pertama yang dilihat pengunjung.

Siapkan 1–2 foto dengan komposisi vertical/portrait yang menunjukkan:

- perlengkapan seni,
- kanvas,
- kuas/cat,
- proses melukis,
- atau suasana Kanvaz Galeri.

Rekomendasi sumber: foto asli toko/produk, bukan stock image.

### 3. Foto Produk

Idealnya siapkan foto asli untuk minimal:

- Kanvas Lukis.
- Cat Lukis.
- Tote Bag.
- Payung Lukis.
- Sandal Lukis.
- Kaos Custom.

Gunakan background yang relatif konsisten supaya product cards terlihat premium.

### 4. Foto Aktivitas / Story

Siapkan foto proses seperti:

- tangan sedang melukis,
- kuas dan cat,
- proses pengerjaan,
- produk setengah jadi,
- produk selesai,
- aktivitas kelas/workshop bila memang ada.

Foto-foto ini akan membuat storytelling section jauh lebih kuat.

### 5. Foto Kebutuhan Sekolah

Siapkan foto asli yang menunjukkan konteks:

- media pembelajaran,
- perlengkapan seni sekolah,
- aktivitas siswa/guru,
- atau paket kebutuhan sekolah.

Jangan menggunakan foto yang menyiratkan kegiatan sekolah Kanvaz Galeri apabila foto tersebut sebenarnya bukan dokumentasi mereka.

### 6. Foto Custom Product

Siapkan foto:

- kaos custom,
- tote bag custom,
- desain sebelum dicetak,
- hasil akhir produk.

### 7. Gallery

Target aman untuk finalisasi adalah sekitar **8–12 foto asli** dengan variasi orientation dan konteks.

### 8. Lokasi / Google Maps

Embed Google Maps pada `index.html` saat ini menggunakan URL embed yang perlu dicek kembali sebelum production. Sebelum go-live, ganti dengan embed Google Maps resmi untuk lokasi Kanvaz Galeri yang benar.

## Hasil Audit Teknis

Audit dilakukan pada file yang diberikan untuk proyek ini (`index.html`, `css/style.css`, dan `js/main.js`) dan salinan project lokal.

Pemeriksaan yang berhasil dilakukan:

- Sintaks `main.js`: **OK** menggunakan `node --check`.
- `index.html`: berhasil diparse oleh parser HTML di environment audit.
- Local Python HTTP server: **OK**; `index.html`, `css/style.css`, dan `js/main.js` seluruhnya merespons HTTP 200.
- Anchor navigation di HTML: tidak ditemukan target anchor yang hilang.
- Pemeriksaan referensi ID JavaScript menemukan dua referensi yang tidak memiliki elemen HTML (`mobile-menu-close` dan `story-scroll`). Keduanya tidak merusak halaman, tetapi referensi `mobile-menu-close` dibersihkan pada versi review ini; logic sticky story yang tidak digunakan tetap dipertahankan agar struktur kode tidak berubah terlalu agresif.

Perbaikan yang dilakukan pada versi review:

1. Menghapus referensi `mobile-menu-close` yang tidak digunakan.
2. Menghapus handler keyboard FAQ yang berpotensi melakukan toggle dua kali karena `.faq-trigger` sudah berupa elemen `<button>` native.
3. Menambahkan dukungan tombol **Space** pada gallery item yang menggunakan `role="button"`.
4. Menambahkan guard `ScrollTrigger` pada fitur yang memang membutuhkan plugin tersebut agar fallback ketika CDN gagal tidak menghasilkan `ReferenceError`.
5. Memperbaiki konflik `transform` antara hover product card dan tilt animation.
6. Menambahkan refresh `ScrollTrigger` setelah asset/image selesai dimuat.
7. Menambahkan penyesuaian posisi floating hero element pada ukuran tablet agar risiko elemen keluar viewport lebih kecil.
8. Mengubah copyright dari 2024 menjadi 2026.

### Keterbatasan Audit Browser

Local server berhasil dijalankan dan asset lokal merespons dengan benar. Namun, browser automation di environment audit diblokir oleh kebijakan runtime (`ERR_BLOCKED_BY_ADMINISTRATOR`), sehingga **console browser, visual overflow, dan pixel-level responsive check tidak dapat diverifikasi secara langsung di browser pada environment ini**.

Karena itu, final visual QA tetap harus dilakukan di browser lokal Windows Anda pada ukuran minimal:

```text
320 × 844
375 × 844
390 × 844
768 × 900
1024 × 900
1280 × 900
1440 × 900
```

Perhatikan khususnya:

- floating badge hero,
- mobile menu,
- bento grid,
- product card tilt,
- FAQ animation,
- lightbox,
- horizontal overflow,
- dan loading image setelah scroll.

## Sebelum Production

Jangan publish sebelum:

- foto stock diganti foto asli,
- logo text diganti logo asli,
- Google Maps embed diverifikasi,
- semua link social media diverifikasi,
- copywriting final disetujui pemilik usaha,
- ukuran dan kompresi gambar dioptimalkan,
- dan website diuji di mobile Android/iPhone.
