/* ---------- Language ---------- */
async function loadLanguage() {
  const lang = navigator.language.slice(0,2);
  const supported = ["en","ko","ja","zh","fr","de","es","ru","pt"];
  const use = supported.includes(lang) ? lang : "en";

  const res = await fetch(`lang/${use}.json`);
  const t = await res.json();

  animateText(t.hero_title);
  document.getElementById("heroDesc").innerText = t.hero_desc;
}
loadLanguage();

/* ---------- Typing Animation (확실히 보이게) ---------- */
function animateText(text) {
  const el = document.getElementById("typing");
  el.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML += `<span>${text[i]}</span>`;
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 80);
}

/* ---------- Modals ---------- */
const modals = {
  contact: contactModal,
  business: businessModal,
  team: teamModal,
  how: howModal
};

contactBtn.onclick = () => modals.contact.style.display = "flex";
businessBtn.onclick = () => modals.business.style.display = "flex";
teamBtn.onclick = () => modals.team.style.display = "flex";
howBtn.onclick = () => modals.how.style.display = "flex";
startProject.onclick = () => {
  modals.how.style.display = "none";
  modals.business.style.display = "flex";
};

window.onclick = e => {
  Object.values(modals).forEach(m => {
    if (e.target === m) m.style.display = "none";
  });
};

/* ---------- Copy ---------- */
copyBtn.onclick = () => {
  navigator.clipboard.writeText("bagdoeon827@gmail.com");
  alert("Copied");
};

/* ---------- EmailJS ---------- */
sendBtn.onclick = () => {
  const msg = requestText.value.trim();
  if (!msg) return alert("Please write your request.");

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    { message: msg }
  ).then(() => {
    alert("Message sent.");
    requestText.value = "";
  }).catch(() => {
    alert("Failed.");
  });
};
