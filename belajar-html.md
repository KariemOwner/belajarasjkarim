# Catatan belajar: index.html

Dokumen ini menjelaskan isi `index.html`, `css/style.css`, dan `js/script.js`.
Baca sambil membuka file-nya. Setiap contoh di bawah benar-benar ada di kode,
bukan teori umum.

## Berkas proyek

```
index.html        struktur halaman
css/style.css     tampilan
js/script.js      dua perilaku kecil
belajar-html.md   catatan ini
```

Jalankan dengan server lokal (bukan double-click, supaya semua path aman):

```
python3 -m http.server 8000
# buka http://localhost:8000
```

---

## 1. Baris pertama dan kerangka

```html
<!DOCTYPE html>
<html lang="id">
<head> ... </head>
<body> ... </body>
</html>
```

`<!DOCTYPE html>` wajib jadi baris pertama; tanpanya browser masuk ke
"quirks mode" dan CSS berperilaku aneh. `lang="id"` memberi tahu pembaca
layar cara melafalkan teks dan memberi tahu penerjemah bahasa sumbernya.

## 2. Isi `<head>`

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Halaman perkenalan Asykarim ...">
<title>Muhammad Asykarim — Perkenalan</title>
<link rel="stylesheet" href="css/style.css">
```

| Baris | Fungsi praktis |
|---|---|
| `charset` | Tanpa ini, huruf seperti `—` atau `é` tampil rusak. Harus paling awal. |
| `viewport` | Tanpa ini, HP menampilkan halaman "dari jauh" lalu user harus zoom. |
| `description` | Teks yang muncul di hasil Google. Tidak memengaruhi tampilan. |
| `title` | Judul di tab browser, bukan di layar. |
| `link` | Mengambil berkas CSS dari folder lain. Path relatif terhadap HTML. |

## 3. Elemen semantik pengganti `<div>` semaunya

Halaman lama biasanya penuh `<div class="header">`, `<div class="menu">`.
Versi ini memakai elemen yang memang punya arti:

| Elemen | Dipakai di sini untuk | Kenapa bukan div |
|---|---|---|
| `<header>` | Baris nama + menu di atas | Penanda "kepala dokumen" bagi mesin |
| `<nav>` | Daftar tautan bagian | Pembaca layar bisa lompat langsung ke navigasi |
| `<main>` | Seluruh konten inti | Hanya boleh satu per halaman; penanda "isi sebenarnya" |
| `<section>` | Tentang, Keahlian, Projek, Kontak | Bagian dengan judul sendiri |
| `<article>` | Tiap kartu projek | Konten yang masih masuk akal kalau dipindah ke halaman lain |
| `<footer>` | Garis bawah halaman | Penanda akhir dokumen |

Aturan praktis: kalau isinya bisa diberi judul `<h2>`, pakai `<section>`;
kalau isinya berdiri sendiri dan bisa dikutip, pakai `<article>`.

## 4. Navigasi jangkar (`href="#tentang"`)

```html
<a href="#keahlian">Keahlian</a>
...
<section id="keahlian">
```

Tautan dengan `#` tidak memuat halaman ulang — browser hanya menggulir ke
elemen yang `id`-nya sama. Karena itu setiap `id` di halaman ini unik.
Gulir halus datang dari CSS `scroll-behavior: smooth`, bukan JavaScript.

## 5. `<abbr title="...">`

```html
Siswa <abbr title="Rekayasa Perangkat Lunak">RPL</abbr>
```

Saat diklik/dihover, tooltip menampilkan kepanjangan. Informasi tambahan
tanpa menambah paragraf penjelasan.

## 6. `<dl>`, `<dt>`, `<dd>` — daftar istilah

```html
<dl class="identitas">
  <dt>Sekolah</dt>
  <dd>SMK Negeri — Jurusan RPL</dd>
</dl>
```

Dibuat persis untuk pasangan "label → nilai" seperti data diri. Dibandingkan
`<ul>` biasa, di sini jelas mana kunci dan mana isi, baik secara visual
(menggunakan CSS grid dua kolom) maupun bagi pembaca layar.

## 7. `<table>` yang benar

Tabel dipakai untuk data, bukan untuk menata letak. Di bagian Keahlian:

```html
<table class="skill">
  <caption class="sr-only">Daftar keahlian beserta tingkat penguasaan</caption>
  <tbody>
    <tr>
      <th scope="row">HTML</th>
      <td><progress value="85" max="100">85%</progress></td>
    </tr>
  </tbody>
</table>
```

- `<caption>` = judul tabel. `.sr-only` membuatnya tak terlihat tapi tetap
  dibaca pembaca layar.
- `scope="row"` = penegas bahwa sel itu nama barisnya, bukan datanya.
- Perhatikan: tidak ada `border="1"` atribut jadul. Garis diatur lewat CSS.

## 8. `<progress>` — bilah keahlian tanpa gambar

```html
<progress value="85" max="100">85%</progress>
```

Ini elemen HTML asli, bukan trik CSS. Tampilannya distyle lewat tiga
selector pseudo di `style.css` (`::-webkit-progress-bar`,
`::-webkit-progress-value`, `::-moz-progress-bar`) karena Chrome dan Firefox
membutuhkannya. Angka di dalam tag (`85%`) adalah teks cadangan untuk browser
lama. Bedakan dengan `<meter>`: progress = kemajuan menuju target,
meter = pengukuran pada skala tetap.

## 9. `<time datetime="2026">`

```html
<time datetime="2026">2026</time>
```

Manusia membaca "2026", mesin membaca atribut `datetime` yang baku
(`2026-05-14` juga valid). Berguna saat halaman diindeks atau dikutip situs lain.

## 10. Form kontak tanpa backend

```html
<form action="mailto:asykarim@example.com" method="post" enctype="text/plain">
  <label for="nama-form">Nama</label>
  <input type="text" id="nama-form" name="nama" required>
  <textarea id="pesan" name="pesan" rows="4" required></textarea>
  <button type="submit">Kirim lewat email</button>
</form>
```

Tiga hal yang sering salah:

1. `for` pada `<label>` harus sama dengan `id` input. Tanpanya, klik teks
   label tidak memfokuskan kolom isian — masalah aksesibilitas nyata.
2. `name` wajib ada. Data dikirim sebagai `nama=...&pesan=...`; tanpa
   `name`, nilainya hilang.
3. `action="mailto:..."` membuka aplikasi email, bukan mengirim ke server.
   Untuk pengiriman sungguhan perlu backend (PHP/Formspree/GitHub Pages + API).

`required` memvalidasi di browser sebelum form dikirim — nol JavaScript.

## 11. Atribut aria yang dipakai

```html
<nav aria-label="Navigasi utama">
<section aria-labelledby="judul-tentang">
```

`aria-label` memberi nama pada elemen yang tampilannya tidak menjelaskan
dirinya. `aria-labelledby` menunjuk ke `id` judul yang sudah ada, jadi tidak
menulis label dua kali. Jangan tambahkan aria "biar lengkap" — atribut yang
salah justru membuat pembaca layar bicara bertele-tele.

## 12. CSS: variabel dan sistem yang kecil

```css
:root {
  --bg: #111418;
  --aksen: #5fb3a6;
}
.progress { background: var(--panel); }
```

Semua warna didefinisikan sekali di `:root`, dipakai ulang dengan `var()`.
Ganti tema cukup satu blok. Halaman ini sengaja memakai: 2 keluarga huruf
(serif untuk bacaan, monospace untuk label), 1 warna aksen, tanpa gradien,
tanpa bayangan besar. Batasi pilihan — hasilnya lebih dewasa, bukan lebih miskin.

Satuan `rem` dipakai alih-alih `px` agar teks mengikuti pengaturan ukuran
huruf pengguna. `.wrap` (max-width + margin auto) adalah pola pembatas
konten yang bisa dipakai di mana saja.

## 13. JavaScript: dua hal kecil, tidak lebih

```js
document.getElementById("tahun").textContent = new Date().getFullYear();
```

`getElementById` mengambil satu elemen berdasarkan id. `textContent`
mengisi teks (lebih aman daripada `innerHTML` karena tidak menjalankan HTML).

```js
const pengamat = new IntersectionObserver((entries) => { ... },
                        { rootMargin: "-40% 0px -55% 0px" });
bagian.forEach((s) => pengamat.observe(s));
```

`IntersectionObserver` memberi tahu saat elemen masuk/keluar layar, tanpa
event `scroll` yang berat. `rootMargin` memperkecil "zona aktif" sehingga
menu baru ditandai saat bagian benar-benar di tengah bacaan. Ini alasan
dipakainya JS: ada perilaku yang tidak bisa dilakukan HTML/CSS saja.

Perbandingan dengan versi lama: `prompt()` yang muncul tiap kunjungan dan
menyuntipkan paragraf selamat-datang sudah dihapus — mengganggu, dan
halaman statis tidak butuh itu.

## 14. Urutan belajar dari proyek ini

1. Kerjakan `index.html` sampai strukturnya terbaca di browser tanpa CSS.
   Kalau tanpa gaya masih masuk akal, strukturnya benar.
2. Tambahkan `style.css`: ubah satu variabel warna, lihat seluruh halaman ikut.
3. Terakhir `script.js`: pindahkan angka tahun ke elemen lain, observer tetap jalan.

Latihan: tambahkan bagian `<section id="pengalaman">` berisi satu
`<article>` dengan `<time>`, daftarkan ke menu `<nav>`, lalu pastikan menu
aktif ikut menandainya. Semuanya sudah ada polanya di kode — tinggal ditiru.
