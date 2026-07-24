/*====================================================
        SYED SHIFAT BUKHARI PORTFOLIO V4
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

/*=========================================
        TYPING ANIMATION
=========================================*/

const typing = document.getElementById("typing");

const roles = [
"Robotics & AI Undergraduate",
"Web Developer",
"AI Enthusiast",
"Founder • BUKHARI STUDIOS",
"Building NOVARA"
];

if(typing){

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

const word = roles[roleIndex];

typing.textContent = deleting
? word.substring(0,charIndex--)
: word.substring(0,charIndex++);

let speed = deleting ? 50 : 100;

if(!deleting && charIndex === word.length + 1){

speed = 1500;
deleting = true;

}

if(deleting && charIndex === 0){

deleting = false;
roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

}

setTimeout(type,speed);

}

type();

}

/*=========================================
        DARK MODE
=========================================*/

const toggle = document.getElementById("theme-toggle");

if(toggle){

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

const icon = toggle.querySelector("i");

if(icon){

if(document.body.classList.contains("light-mode")){

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

}else{

icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");

}

}

});

}

/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

if(progress){

const total =
document.documentElement.scrollHeight -
window.innerHeight;

const current =
(window.scrollY / total) * 100;

progress.style.width = current + "%";

}

});

/*=========================================
        SCROLL TO TOP
=========================================*/

const topBtn = document.getElementById("scrollTop");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

});
/*====================================================
            SCROLL REVEAL
====================================================*/

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.15
});

reveals.forEach(el=>{

revealObserver.observe(el);

});

/*====================================================
            COUNTER ANIMATION
====================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=Number(counter.dataset.target);

let count=0;

const speed=target/100;

function update(){

count+=speed;

if(count<target){

counter.textContent=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.textContent=target+"+";

}

}

update();

counterObserver.unobserve(counter);

}

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*====================================================
            CURSOR GLOW
====================================================*/

const glow=document.getElementById("cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

}

/*====================================================
            ACTIVE NAVIGATION
====================================================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(href==="#"+current){

link.classList.add("active");

}

});

});

/*====================================================
            PARALLAX BLOBS
====================================================*/

const blob1=document.querySelector(".one");
const blob2=document.querySelector(".two");
const blob3=document.querySelector(".three");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

if(blob1){

blob1.style.transform=`translate(${x*30}px,${y*20}px)`;

}

if(blob2){

blob2.style.transform=`translate(${-x*25}px,${-y*25}px)`;

}

if(blob3){

blob3.style.transform=`translate(${x*18}px,${-y*18}px)`;

}

});
/*====================================================
            FLOATING STARS
====================================================*/

function createStars(){

for(let i=0;i<60;i++){

const star=document.createElement("span");

star.classList.add("star");

star.style.left=Math.random()*100+"vw";

star.style.width=1+Math.random()*3+"px";

star.style.height=star.style.width;

star.style.animationDuration=(6+Math.random()*8)+"s";

star.style.animationDelay=(Math.random()*5)+"s";

document.body.appendChild(star);

}

}

createStars();

/*====================================================
            BUTTON RIPPLE EFFECT
====================================================*/

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

ripple.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*====================================================
            IMAGE TILT EFFECT
====================================================*/

const photo=document.querySelector(".photo-border");

if(photo){

photo.addEventListener("mousemove",(e)=>{

const rect=photo.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

photo.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="rotateX(0) rotateY(0)";

});

}

/*====================================================
            PAGE LOADED
====================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log(

"%c🚀 Welcome to Syed Shifat Bukhari's Portfolio",

"color:#38bdf8;font-size:18px;font-weight:bold;"

);

});

/*====================================================
            RIPPLE KEYFRAME
====================================================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);
