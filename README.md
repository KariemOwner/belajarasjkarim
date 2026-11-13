# Profil SMK Karya Guna 2 Bekasi

Situs statis berbahasa Indonesia yang merangkum profil, program keahlian, dokumentasi, dan kontak SMK Karya Guna 2 Bekasi. Informasi yang dapat berubah sebaiknya dikonfirmasi melalui kanal resmi sekolah.

## Menjalankan lokal

Tidak memerlukan proses build atau paket tambahan. Dari root repositori:

```sh
python3 -m http.server 8000
```

Buka <http://localhost:8000>.

## Struktur

- `index.html` — struktur dan konten halaman.
- `css/site.css` — sistem visual responsif.
- `js/site.js` — navigasi mobile, tautan bagian aktif, dan tahun footer.
- `belajar-html.md` — catatan belajar HTML.

`css/style.css` dan `js/script.js` adalah berkas latihan lama dan tidak digunakan oleh halaman utama.

## Sumber dan pemeliharaan

Foto serta informasi kontak merujuk pada situs sekolah; identitas dan program merujuk pada profil data pendidikan. Tautan rujukan tersedia di halaman. Verifikasi detail PPDB, program, fasilitas, kontak, dan status akreditasi sebelum mengandalkannya karena informasi dapat berubah.

Saat mengubah halaman, uji tautan, navigasi keyboard, menu pada ponsel, teks alternatif gambar, serta tampilan dengan pengaturan `prefers-reduced-motion`.
