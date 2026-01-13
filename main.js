// 🔥 DOM이 전부 로드된 뒤 실행
document.addEventListener("DOMContentLoaded", () => {
  console.log("MAIN.JS LOADED");

  const text = "We build everything";
  const title = document.getElementById("heroTitle");

  // 안전 장치
  if (!title) {
    console.error("heroTitle not found");
    return;
  }

  title.textContent = "";
  let i = 0;

  const typing = setInterval(() => {
    title.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 120);
});
