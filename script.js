console.log("it works")
const toggle = document.querySelector(".toggleBtn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".side");
const welcome= document.getElementById("welcome")




//Toggle show class on side nav
toggle.addEventListener("click", function() {
    console.log(sideBar.classList)
    //The long way
    // if(sideBar.classList.contains('show-sidebar')) {
    //     sideBar.classList.remove('show-sideBar');
    // } else {
    //     sideBar.classList.add("show-sidebar");
    // }
    sideBar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener("click", function() {
    console.log("clicks")
    sideBar.classList.remove('show-sidebar');
})