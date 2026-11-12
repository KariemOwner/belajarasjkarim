# 📚 Belajar HTML dari Website Perkenalan

Dokumen ini adalah **file pembelajaran terpisah** yang menjelaskan setiap
bagian kode pada `index.html`. Cocok dibaca sambil membuka file-nya.

## 🗂️ Struktur Folder Proyek

```
belajar-html/
├── index.html        ← Halaman utama (struktur HTML)
├── css/
│   └── style.css     ← Gaya/tampilan halaman (CSS)
├── js/
│   └── script.js     ← Interaksi halaman (JavaScript)
├── belajar-html.md   ← File penjelasan ini
└── README.md
```

> **Cara membuka:** double-click `index.html`, atau jalankan server lokal:
> `python3 -m http.server 8000` lalu buka `http://localhost:8000`.

---

## 1. Kerangka Dasar HTML

```html
<!DOCTYPE html>
<html lang="id">
<head> ... </head>
<body> ... </body>
</html>
```

| Bagian | Penjelasan |
|---|---|
| `<!DOCTYPE html>` | Memberi tahu browser bahwa ini dokumen HTML5. |
| `<html lang="id">` | Elemen root; `lang="id"` menandakan bahasa Indonesia. |
| `<head>` | Berisi informasi *tentang* halaman (tidak ditampilkan langsung). |
| `<body>` | Berisi konten yang *ditampilkan* di layar. |

## 2. Isi `<head>`

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Perkenalan Diri - Belajar HTML</title>
<link rel="stylesheet" href="css/style.css">
```

- **`charset="UTF-8"`** → mendukung semua huruf & emoji (👋).
- **`viewport`** → agar tampilan pas di layar HP (responsif).
- **`<title>`** → teks pada tab browser.
- **`<link rel="stylesheet">`** → menghubungkan ke file CSS **terpisah**.

## 3. Judul & Paragraf

```html
<h1>Halo! Saya Asykarim 👋</h1>      <!-- judul terbesar, pakai SATU per halaman -->
<h2>Tentang Saya</h2>               <!-- sub-judul -->
<p>Nama lengkap saya <strong>Muhammad Asykarim</strong>.</p>
```

- `<h1>`–`<h6>`: tingkatan judul (h1 paling penting).
- `<p>`: paragraf.
- `<strong>`: teks **penting** (tebal + arti semantik).
- `<em>`: teks *penekanan* (miring).

## 4. Daftar (List)

```html
<ul>                     <!-- unordered list = daftar tidak berurut -->
    <li>Membaca buku</li>
    <li>Olahraga</li>
</ul>

<ol>                    <!-- ordered list = daftar bernomor 1,2,3 -->
    <li>Langkah pertama</li>
</ol>
```

## 5. Tabel

```html
<table>
    <tr>                <!-- table row = baris -->
        <th>Nama</th>   <!-- table header = sel judul (tebal) -->
        <td>Asykarim</td><!-- table data = sel isi -->
    </tr>
</table>
```

## 6. Link (Anchor)

```html
<a href="mailto:asykarim@example.com">Kirim email</a>
<a href="https://www.w3schools.com" target="_blank">W3Schools</a>
```

Atribut `href` menentukan tujuan link; `target="_blank"` membuka di tab baru.

## 7. Elemen Semantik & Atribut

```html
<main class="container">   <!-- konten utama -->
<header> ... </header>     <!-- bagian atas/judul -->
<section> ... </section>   <!-- bagian tematik -->
<footer> ... </footer>     <!-- bagian bawah -->
```

- `class="..."` → nama kelompok untuk styling di CSS (`.` di CSS).
- `<!-- ... -->` → komentar, tidak ditampilkan browser.

## 8. Komentar & Entity HTML

```html
&copy;   → ©
&mdash;  → —
&lt;     → <
&gt;     → >
```

Entity dipakai karena beberapa karakter khusus tidak bisa ditulis langsung.

## 9. Menghubungkan File Terpisah

**CSS (`css/style.css`):**
```html
<link rel="stylesheet" href="css/style.css">
```

**JavaScript (`js/script.js`):**
```html
<script src="js/script.js"></script>  <!-- taruh sebelum </body> -->
```

Kenapa terpisah? Agar kode **rapi**, mudah dirawat, dan bisa dipakai ulang
di banyak halaman.

## 10. Konsep CSS Penting di style.css

| Properti | Fungsi |
|---|---|
| `background: linear-gradient(...)` | latar warna gradasi |
| `border-radius: 16px` | sudut kartu membulat |
| `box-shadow` | bayangan kartu |
| `text-align: center` | rata tengah teks |
| `padding` / `margin` | jarak dalam / jarak luar elemen |
| `@media (max-width: 480px)` | aturan khusus untuk layar kecil |

## 11. Konsep JavaScript di script.js

- `document.addEventListener("DOMContentLoaded", ...)` → tunggu halaman siap.
- `prompt(...)` → menampilkan kotak tanya ke pengguna.
- `document.createElement("p")` → membuat elemen baru via kode.
- `document.querySelector(".info-section")` → memilih elemen berdasarkan class.
- `appendChild(...)` → menyisipkan anak ke dalam elemen.

---

## ✏️ Latihan untuk Dicoba

1. Ganti nama "Asykarim" dengan namamu sendiri.
2. Tambahkan hobi baru di dalam `<ul>`.
3. Buat baris tabel baru, misalnya `Umur`.
4. Ubah warna `#667eea` di `style.css` menjadi warna favoritmu.
5. Tambahkan `<img src="foto.jpg" alt="Foto saya">` di bagian profil.

## 📖 Sumber Belajar Tambahan

- W3Schools HTML: https://www.w3schools.com/html/
- MDN HTML (bahasa Inggris, sangat lengkap): https://developer.mozilla.org/docs/Web/HTML
