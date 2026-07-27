/* =====================================================
   POWER PROGRESS
   Project Gallery Filter
   ===================================================== */



const projectButtons =
document.querySelectorAll(".project-filter .filter-btn");



const projects =
document.querySelectorAll(".project-item");






projectButtons.forEach(button=>{


button.addEventListener("click",()=>{


const filter =
button.getAttribute("data-filter");





// Active Button


projectButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");







// Project Filter


projects.forEach(project=>{


const category =
project.getAttribute("data-category");





if(
filter === "all" ||
category === filter
){


project.style.display =
"block";


}

else{


project.style.display =
"none";


}



});





});


});