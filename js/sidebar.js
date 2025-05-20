export function setupSidebar() {
    const toggle = document.querySelector(".toggleBtn");
    const closeBtn = document.querySelector(".close-btn");
    const sideBar = document.querySelector(".side");

    if (!toggle || !closeBtn || !sideBar) return;

    toggle.addEventListener("click", function() {
    sideBar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener("click", function() {
    console.log("clicks")
    sideBar.classList.remove('show-sidebar');
});
}