function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}

function answer(button, correct){
  const result=document.getElementById("quiz-result");
  if(correct){
    result.textContent="CORRECT 😂❤️ You really are Koko.";
    button.style.borderColor="rgba(242,139,180,.7)";
    burstHearts();
  }else{
    result.textContent="Nope 😌 Try again, Koko!";
  }
}

const letters={
 smile:{
   title:"If you need a smile ❤️",
   body:"Hey Koko… if you're reading this, I hope you're smiling now. And if you're not, then consider this my official mission to make you smile. Remember all our tiny moments — the random laughs, the trips to Maadi, and of course your legendary “Malesh ya Nono.” 😂 I love the person you are, exactly as you are."
 },
 miss:{
   title:"If you miss me 💌",
   body:"I miss you too. Probably more than I say. So until we're together again, remember that somewhere out there is a girl who thinks you're one of the most important people in her whole world. Come back to me soon, Koko. ❤️"
 },
 hard:{
   title:"If today is a hard day 🌙",
   body:"You don't have to have everything figured out today. Take a breath. Rest if you need to. And remember: you are loved, deeply and completely. I'm always cheering for you, even on the days when you don't feel like cheering for yourself."
 },
 final:{
   title:"To my Koko ❤️",
   body:"Maybe I don't always know how to buy the biggest gift, and maybe I can't always give you something expensive. But I wanted to make something that was made especially for you — something that no one else could receive because it's filled with pieces of our story. I worked so hard on this website because you are worth the effort, the time, and every little detail. You are my whole world. I can't imagine my life without you, and after everything we've lived together, I would still choose you again and again. Thank you for every laugh, every memory, every moment, and every “Malesh ya Nono.” One year down… and I still choose you. I love you, Koko. ❤️"
 }
};

function openLetter(type){
  const modal=document.getElementById("modal");
  const box=document.getElementById("modal-text");
  const l=letters[type];
  box.innerHTML=`<h2>${l.title}</h2><p>${l.body}</p>`;
  modal.classList.add("show");
  burstHearts();
}
function closeModal(e){
  if(!e || e.target===document.getElementById("modal") || e.target.classList.contains("close"))
    document.getElementById("modal").classList.remove("show");
}
function burstHearts(){
  for(let i=0;i<12;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=Math.random()>.25?"♥":"♡";
    h.style.left=(35+Math.random()*30)+"vw";
    h.style.top=(55+Math.random()*20)+"vh";
    h.style.animationDelay=(Math.random()*.25)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),2800);
  }
}
document.addEventListener("click",e=>{
  if(e.target.tagName==="BUTTON" || e.target.tagName==="A") return;
  const h=document.createElement("div");
  h.className="heart"; h.textContent="♥";
  h.style.left=e.clientX+"px"; h.style.top=e.clientY+"px";
  document.body.appendChild(h); setTimeout(()=>h.remove(),2500);
});
