# Profil SMK Karya Guna 2 Bekasi

Situs statis berbahasa Indonesia yang merangkum profil, program keahlian, dokumentasi, informasi penerimaan, tanya jawab, dan kontak SMK Karya Guna 2 Bekasi. Ini profil informatif, bukan kanal pengumuman resmi; pastikan informasi yang dapat berubah melalui sekolah.

## Menjalankan lokal

Tidak memerlukan proses build atau paket tambahan. Dari root repositori:

```sh
python3 -m http.server 8000
```

Buka <http://localhost:8000>.

## Struktur

- `index.html` — struktur, konten, metadata berbagi, dan sumber rujukan.
- `css/site.css` — sistem visual responsif, termasuk FAQ dan bagian penerimaan.
- `js/site.js` — navigasi mobile yang mendukung Escape, tautan bagian aktif, dan tahun footer.
- `belajar-html.md` — catatan belajar HTML.

`css/style.css` dan `js/script.js` adalah berkas latihan lama dan tidak digunakan oleh halaman utama.

## Sumber dan pemeliharaan

Foto serta informasi kontak merujuk pada situs sekolah; identitas dan program merujuk pada profil data pendidikan. Tautan rujukan tersedia di halaman. Verifikasi detail PPDB, program, fasilitas, kontak, dan status akreditasi sebelum mengandalkannya karena informasi dapat berubah.

Halaman tidak menggunakan formulir kontak palsu atau statistik promosi yang tidak memiliki sumber. Saat menyunting, uji tautan, navigasi keyboard, menu pada ponsel, teks alternatif gambar, tampilan responsif, dan `prefers-reduced-motion`.
