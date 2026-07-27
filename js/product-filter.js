/* =====================================================
   POWER PROGRESS
   Product Category Filter
   ===================================================== */


const productButtons =
document.querySelectorAll(".product-filter .filter-btn");


const products =
document.querySelectorAll(".product-card");




productButtons.forEach(button => {


    button.addEventListener("click", ()=>{


        const filter =
        button.getAttribute("data-filter");



        // Active Button

        productButtons.forEach(btn=>{

            btn.classList.remove("active");

        });


        button.classList.add("active");





        // Filter Products

        products.forEach(product=>{


            const category =
            product.getAttribute("data-category");



            if(
                filter === "all" ||
                category === filter
            ){

                product.style.display =
                "block";


            }

            else{


                product.style.display =
                "none";


            }


        });



    });



});