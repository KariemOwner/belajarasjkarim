# Profil SMK Karya Guna 2 Bekasi

Situs statis berbahasa Indonesia yang memperkenalkan SMK Karya Guna 2 Bekasi. Halaman utama memuat profil sekolah, program keahlian, galeri, sarana, informasi PPDB, kontak, dan rujukan.

## Menjalankan secara lokal

Tidak ada proses build atau dependensi npm. Dari root repositori, jalankan server statis:

```sh
python3 -m http.server 8000
```

Buka <http://localhost:8000>.

## Struktur repositori

- `index.html` — halaman utama, termasuk stylesheet dan JavaScript kecil yang dipakai halaman.
- `belajar-html.md` — catatan belajar yang mengikuti struktur halaman saat ini.
- `css/style.css` dan `js/script.js` — berkas terpisah yang belum ditautkan oleh `index.html`; jangan mengira keduanya mengatur situs yang sedang dipublikasikan tanpa menghubungkannya terlebih dahulu.

## Catatan pemeliharaan

- Foto dan logo dimuat dari situs sekolah. Jika sumber eksternal berubah atau tidak tersedia, periksa tautan sebelum menggantinya.
- Informasi program, PPDB, fasilitas, dan kontak dapat berubah. Verifikasi melalui kanal resmi sekolah; halaman ini bukan pengumuman resmi.
- Pertahankan navigasi keyboard, tautan lompat ke konten, teks alternatif gambar, tampilan mobile, dan dukungan `prefers-reduced-motion` saat mengubah halaman.
