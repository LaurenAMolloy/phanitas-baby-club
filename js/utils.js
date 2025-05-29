export function autoDate() {
    const year = document.getElementById("spanYear");
    //update the date automatically
    const date = new Date();
    const yearNow = date.getFullYear();
    year.textContent = yearNow;
}

export function activeLinks () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        //console.log(link.href, window.location.href)
        if(link.href === window.location.href) {
            link.setAttribute("aria-current", "page");
            console.log(link)
        }
    });
}