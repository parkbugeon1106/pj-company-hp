// Language auto-detect
async function loadLang(){
  const lang=navigator.language.slice(0,2);
  const support=["en","ko","ja","zh","fr","de","es","ru","pt"];
  const use=support.includes(lang)?lang:"en";
  const t=await fetch(`lang/${use}.json`).then(r=>r.json());

  typeText(t.hero_title);
  document.getElementById("heroDesc").innerText=t.hero_desc;
  document.getElementById("howTitle").innerText=t.how_title;
}
loadLang();

// Typing animation
function typeText(text){
  const el=document.getElementById("heroText");
  el.innerHTML="";
  let i=0;
  const timer=setInterval(()=>{
    el.innerHTML+=text[i++];
    if(i>=text.length)clearInterval(timer);
  },70);
}

// Modals
const open=id=>document.getElementById(id).style.display="flex";
const close=e=>{
  if(e.target.classList.contains("modal"))
    e.target.style.display="none";
};

document.getElementById("contactBtn").onclick=()=>open("contactModal");
document.getElementById("businessBtn").onclick=()=>open("businessModal");
document.getElementById("teamBtn").onclick=()=>open("teamModal");
document.getElementById("startProject").onclick=()=>open("businessModal");
document.querySelectorAll(".modal").forEach(m=>m.onclick=close);

// Copy email
document.getElementById("copyEmail").onclick=()=>{
  navigator.clipboard.writeText("bagdoeon827@gmail.com");
  alert("Copied");
};

// EmailJS
document.getElementById("send").onclick=()=>{
  const msg=document.getElementById("request").value.trim();
  if(!msg)return alert("Write your request");

  emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{message:msg})
    .then(()=>alert("Sent successfully"))
    .catch(()=>alert("Failed"));
};
