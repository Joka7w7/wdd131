// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburgerBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Footer Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
