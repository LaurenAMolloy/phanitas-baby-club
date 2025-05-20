export function autoDate() {
    const year = document.getElementById("spanYear");
    //update the date automatically
    const date = new Date();
    const yearNow = date.getFullYear();
    year.textContent = yearNow;
}