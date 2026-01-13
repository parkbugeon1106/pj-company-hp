// Typing animation
const text = "We build everything";
let i = 0;
const typingEl = document.getElementById("typing");

function type() {
  if (i < text.length) {
    typingEl.textContent += text[i];
    i++;
    setTimeout(type, 80);
  }
}
type();

// Modals
const modals = {
  contact: document.getElementById("contactModal"),
  business: document.getElementById("businessModal"),
  team: document.getElementById("teamModal")
};

document.getElementById("contactBtn").onclick = () => modals.contact.style.display = "flex";
document.getElementById("businessBtn").onclick = () => modals.business.style.display = "flex";
document.getElementById("teamBtn").onclick = () => modals.team.style.display = "flex";

window.onclick = e => {
  Object.values(modals).forEach(m => {
    if (e.target === m) m.style.display = "none";
  });
};

// Copy email
document.getElementById("copyBtn").onclick = () => {
  navigator.clipboard.writeText("bagdoeon827@gmail.com");
  alert("Copied");
};

// EmailJS send
document.getElementById("sendBtn").onclick = () => {
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    message: document.getElementById("requestText").value
  }).then(() => {
    alert("Message sent");
  });
};
