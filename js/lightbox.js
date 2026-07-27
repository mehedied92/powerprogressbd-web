/* =====================================================
   POWER PROGRESS
   Image Lightbox
   ===================================================== */



const galleryImages =
document.querySelectorAll(".project-item img");



const lightbox =
document.querySelector(".lightbox");



const lightboxImage =
document.querySelector(".lightbox img");



const closeLightbox =
document.querySelector(".lightbox-close");






// Open Image


galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


if(!lightbox)
return;



lightbox.style.display =
"flex";



lightboxImage.src =
image.src;



});



});







// Close Button


if(closeLightbox){


closeLightbox.addEventListener(
"click",
()=>{


lightbox.style.display =
"none";


});


}








// Click Outside Close


if(lightbox){


lightbox.addEventListener(
"click",
(e)=>{


if(
e.target === lightbox
){


lightbox.style.display =
"none";


}



});


}