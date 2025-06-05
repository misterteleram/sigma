let burgerBtn = document.querySelector(".menu-btn")
let nav = document.querySelector(".header-a")

burgerBtn.addEventListener("click", function(){
    burgerBtn.classList.toggle("active");
    nav.classList.toggle("active");
})