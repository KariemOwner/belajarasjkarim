/* ============================================
   script.js - File JavaScript terpisah
   Fungsi: menambahkan interaksi sederhana
   ============================================ */

// Jalankan kode setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // 1. Tampilkan pesan sambutan di console browser
    //    (buka DevTools dengan F12 untuk melihatnya)
    console.log("Halo! Selamat datang di website belajar HTML 🎉");

    // 2. Menghitung usia pengunjung yang mengetik nama
    //    melalui prompt (jendela tanya sederhana)
    const nama = prompt("Selamat datang! Boleh tahu nama Anda?");

    if (nama !== null && nama.trim() !== "") {
        // Buat elemen <p> baru secara dinamis dengan JavaScript
        const sapaan = document.createElement("p");
        sapaan.textContent = "Terima kasih, " + nama.trim() +
            "! Semoga belajar HTML-nya menyenangkan.";
        sapaan.style.color = "#667eea";
        sapaan.style.fontWeight = "bold";

        // Sisipkan elemen tersebut ke dalam bagian info-section
        const section = document.querySelector(".info-section");
        section.appendChild(sapaan);
    }

    // 3. Menampilkan tahun otomatis di footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const tahunBaru = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace("2026", tahunBaru);
    }
});
