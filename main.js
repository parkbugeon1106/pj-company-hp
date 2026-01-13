/* ===== HERO TYPING (주르륵) ===== */
const text = "We build everything";
const title = document.getElementById("heroTitle");
let i = 0;

title.textContent = "";

const typing = setInterval(() => {
  title.textContent += text[i];
  i++;
  if (i >= text.length) clearInterval(typing);
}, 120);

/* ===== MODALS ===== */
const contactBtn = document.getElementById("contactBtn");
const businessBtn = document.getElementById("businessBtn");
const teamBtn = document.getElementById("teamBtn");

const contactModal = document.getElementById("contactModal");
const businessModal = document.getElementById("businessModal");
const teamModal = document.getElementById("teamModal");

contactBtn.onclick = () => contactModal.style.display = "flex";
businessBtn.onclick = () => businessModal.style.display = "flex";
teamBtn.onclick = () => teamModal.style.display = "flex";

window.onclick = e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

/* ===== COPY EMAIL ===== */
function copyEmail() {
  navigator.clipboard.writeText("bagdoeon827@gmail.com");
  alert("Copied");
}
