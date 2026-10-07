window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader").classList.add("done"),450));
const header=document.querySelector("header"),menu=document.querySelector("#menu"),nav=document.querySelector("#nav");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>30));
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));