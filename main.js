/* ---------- Language ---------- */
async function loadLang() {
  const res = await fetch("lang/en.json");
  const t = await res.json();
  animate(t.title);
  document.getElementById("heroDesc").innerText = t.desc;
}
loadLang();

/* ---------- Typing ---------- */
function animate(text) {
  const el = document.getElementById("heroTitle");
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text[i++];
    if (i === text.length) clearInterval(timer);
  }, 80);
}

/* ---------- Modals ---------- */
document.querySelectorAll("nav button").forEach(btn => {
  btn.onclick = () => {
    document.getElementById(btn.dataset.modal).style.display = "flex";
  };
});

window.onclick = e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

function copy() {
  navigator.clipboard.writeText("bagdoeon827@gmail.com");
  alert("Copied");
}
