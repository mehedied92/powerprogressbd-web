/*
=====================================================
POWER PROGRESS
Premium Testimonial Slider
Version 1.2 FINAL
=====================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


const slider =
document.querySelector(".testimonial-slider");



if(!slider) return;





/* ======================================
   Testimonial Data
====================================== */


const testimonials = [


{

name:
"Rahim Ahmed",

role:
"Business Owner",

image:
"images/testimonial/user1.webp",

message:
"Power Progress provided excellent CCTV and networking solutions. Their service quality is very professional."

},



{

name:
"Karim Hasan",

role:
"Corporate Client",

image:
"images/testimonial/user2.webp",

message:
"Reliable security solutions with great technical support. Highly recommended for businesses."

},



{

name:
"Tanvir Islam",

role:
"IT Manager",

image:
"images/testimonial/user3.webp",

message:
"Professional networking setup and maintenance service. Power Progress is a trusted technology partner."

}


];







let currentSlide = 0;







/* ======================================
   Create Slider
====================================== */


function renderSlider(){


const item =
testimonials[currentSlide];



slider.innerHTML = `


<div class="testimonial-card reveal active">


<img src="${item.image}"
alt="${item.name}">



<div class="testimonial-content">


<p>

"${item.message}"

</p>



<h3>

${item.name}

</h3>



<span>

${item.role}

</span>



</div>


</div>


`;



}






renderSlider();









/* ======================================
   Next Slide
====================================== */


window.nextTestimonial = function(){



currentSlide++;



if(currentSlide >= testimonials.length){


currentSlide = 0;


}



slider.classList.remove("fade-slider");



setTimeout(()=>{


renderSlider();


slider.classList.add("fade-slider");


},100);



}









/* ======================================
   Previous Slide
====================================== */


window.previousTestimonial = function(){



currentSlide--;



if(currentSlide < 0){


currentSlide =
testimonials.length - 1;


}



renderSlider();


}









/* ======================================
   Auto Play
====================================== */


let autoPlay =
setInterval(
nextTestimonial,
5000
);








/* ======================================
   Pause On Hover
====================================== */


slider.addEventListener(
"mouseenter",
()=>{


clearInterval(autoPlay);


});





slider.addEventListener(
"mouseleave",
()=>{


autoPlay =
setInterval(
nextTestimonial,
5000
);


});









/* ======================================
   Touch Swipe Support
====================================== */


let startX = 0;



slider.addEventListener(
"touchstart",
(e)=>{


startX =
e.touches[0].clientX;


});





slider.addEventListener(
"touchend",
(e)=>{


let endX =
e.changedTouches[0].clientX;



if(startX - endX > 50){


nextTestimonial();


}



if(endX - startX > 50){


previousTestimonial();


}


});







});