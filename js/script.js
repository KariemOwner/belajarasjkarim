/* script.js — JavaScript untuk index.html
   Hanya dua hal: tahun di footer, dan menandai tautan menu
   yang sesuai dengan bagian yang sedang dibaca. */

// Tahun otomatis di footer (angka 2026 di HTML hanya cadangan)
document.getElementById("tahun").textContent = new Date().getFullYear();

// Tandai menu aktif saat halaman digulir.
// IntersectionObserver memberi tahu saat sebuah <section> muncul di layar.
const tautanMenu = document.querySelectorAll(".menu a");
const bagian = document.querySelectorAll("main section[id]");

const pengamat = new IntersectionObserver((entries) => {
  entries.forEach((entri) => {
    if (!entri.isIntersecting) return;
    tautanMenu.forEach((tautan) => {
      const aktif = tautan.getAttribute("href") === "#" + entri.target.id;
      tautan.style.color = aktif ? "var(--aksen)" : "";
    });
  });
}, { rootMargin: "-40% 0px -55% 0px" });

bagian.forEach((s) => pengamat.observe(s));
