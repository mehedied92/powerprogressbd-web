/*
=====================================================
POWER PROGRESS
Premium Counter Animation
Version 1.2 FINAL
=====================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


const counters =
document.querySelectorAll(".counter");



if(!counters.length) return;



let started = false;






/* ======================================
   Counter Animation Function
====================================== */


function startCounter(){


if(started) return;


started = true;



counters.forEach(counter=>{



const target =
parseInt(
counter.dataset.target
);



let current = 0;



const speed = 200;



const increment =
Math.ceil(
target / speed
);






function update(){



current += increment;



if(current < target){



counter.innerText =
current.toLocaleString();



requestAnimationFrame(
update
);



}

else{



counter.innerText =
target.toLocaleString()
+
(counter.dataset.symbol || "");



}



}



update();



});



}









/* ======================================
   Scroll Observer
====================================== */


const counterSection =
document.querySelector(".counter-section");



if(counterSection){



const observer =
new IntersectionObserver(


(entries)=>{


entries.forEach(entry=>{



if(entry.isIntersecting){



startCounter();


observer.disconnect();



}



});


},


{

threshold:.4

}


);



observer.observe(counterSection);



}







});