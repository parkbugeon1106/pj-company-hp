/* ---------- Language Auto Detect ---------- */
async function loadLanguage() {
  const lang = navigator.language.slice(0,2);
  const supported = ["en","ko","ja","zh","fr","de","es","ru","pt"];
  const use = supported.includes(lang) ? lang : "en";

  const res = await fetch(`lang/${use}.json`);
  const t = await res.json();

  typeText(t.hero_title);
  document.getElementById("heroDesc").innerText = t.hero_desc;
}
loadLanguage();

/* ---------- Typing Animation ---------- */
function typeText(text) {
  const el = document.getElementById("typing");
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i++];
    if (i >= text.length) clearInterval(timer);
  }, 70);
}

/* ---------- Modal Logic ---------- */
const modals = {
  contact: document.getElementById("contactModal"),
  business: document.getElementById("businessModal"),
  team: document.getElementById("teamModal"),
  how: document.getElementById("howModal")
};

document.getElementById("contactBtn").onclick = () => modals.contact.style.display = "flex";
document.getElementById("businessBtn").onclick = () => modals.business.style.display = "flex";
document.getElementById("teamBtn").onclick = () => modals.team.style.display = "flex";
document.getElementById("howBtn").onclick = () => modals.how.style.display = "flex";
document.getElementById("startProject").onclick = () => {
  modals.how.style.display = "none";
  modals.business.style.display = "flex";
};

window.onclick = e => {
  Object.values(modals).forEach(m => {
    if (e.target === m) m.style.display = "none";
  });
};

/* ---------- Copy Gmail ---------- */
document.getElementById("copyBtn").onclick = () => {
  navigator.clipboard.writeText("bagdoeon827@gmail.com");
  alert("Copied");
};

/* ---------- EmailJS ---------- */
document.getElementById("sendBtn").onclick = () => {
  const msg = document.getElementById("requestText").value.trim();
  if (!msg) return alert("Please write your request.");

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    { message: msg }
  ).then(() => {
    alert("Message sent successfully.");
    document.getElementById("requestText").value = "";
  }).catch(() => {
    alert("Failed to send.");
  });
};
