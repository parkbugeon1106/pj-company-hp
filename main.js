document.addEventListener("DOMContentLoaded", () => {
  const text = "We build everything";
  const el = document.getElementById("heroTitle");
  if (!el) return;

  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i === text.length) clearInterval(timer);
  }, 120);
});
