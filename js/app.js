/*
=====================================================
POWER PROGRESS
Premium Website JavaScript
Version 1.2 FINAL
=====================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{



/* ======================================
   Loading Screen
====================================== */


const loader =
document.querySelector(".loader");



window.addEventListener(
"load",
()=>{


if(loader){

setTimeout(()=>{


loader.classList.add("hide");


},500);


}


});








/* ======================================
   Mobile Menu Toggle
====================================== */


const menuToggle =
document.querySelector(".menu-toggle");


const navMenu =
document.querySelector(".nav-menu");



if(menuToggle && navMenu){


menuToggle.addEventListener(
"click",
()=>{


navMenu.classList.toggle("active");



menuToggle.classList.toggle("open");


});


}









/* Close Menu After Click */


const navLinks =
document.querySelectorAll(".nav-menu a");



navLinks.forEach(link=>{


link.addEventListener(
"click",
()=>{


if(navMenu){

navMenu.classList.remove("active");

}


});


});









/* ======================================
   Dark Mode
====================================== */


const darkBtn =
document.getElementById("darkMode");



const body =
document.body;



const savedTheme =
localStorage.getItem("powerProgressTheme");



if(savedTheme==="dark"){


body.classList.add("dark");


}




if(darkBtn){


darkBtn.addEventListener(
"click",
()=>{


body.classList.toggle("dark");



if(body.classList.contains("dark")){


localStorage.setItem(
"powerProgressTheme",
"dark"
);


darkBtn.innerHTML =
`
<i class="fa-solid fa-sun"></i>
`;



}else{


localStorage.setItem(
"powerProgressTheme",
"light"
);



darkBtn.innerHTML =
`
<i class="fa-solid fa-moon"></i>
`;


}


});


}









/* ======================================
   Scroll Progress Bar
====================================== */


const progress =
document.querySelector(".scroll-progress");



window.addEventListener(
"scroll",
()=>{


if(progress){


let scrollTop =
document.documentElement.scrollTop;



let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;



let percent =
(scrollTop / height) * 100;



progress.style.width =
percent + "%";


}


});









/* ======================================
   Scroll To Top
====================================== */


const scrollBtn = document.getElementById("scrollTop");



if (scrollBtn) {


scrollBtn.style.display = "none";



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 300){


scrollBtn.style.display =
"flex";


}

else{


scrollBtn.style.display =
"none";


}


});




scrollBtn.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}









/* ======================================
   Active Navbar
====================================== */


const currentPage =
window.location.pathname
.split("/")
.pop();



navLinks.forEach(link=>{


const href =
link.getAttribute("href");



if(href === currentPage){


link.classList.add("active");


}


});









/* ======================================
   Scroll Reveal Animation
====================================== */


const reveals =
document.querySelectorAll(".reveal");



function revealOnScroll(){


reveals.forEach(item=>{


const windowHeight =
window.innerHeight;



const elementTop =
item.getBoundingClientRect().top;



if(elementTop <
windowHeight - 100){


item.classList.add("active");


}


});


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();









/* ======================================
   Auto Current Year
====================================== */


const year =
document.querySelector(".current-year");



if(year){


year.textContent =
new Date().getFullYear();


}









/* ======================================
   Smooth Anchor Scroll
====================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});


}


});


});









/* ======================================
   Add Loaded Class
====================================== */


document.body.classList.add(
"loaded"
);



});