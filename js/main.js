import { setupSidebar } from "./sidebar.js";
import { setupI18n, changeLanguage } from "./il8n.js";
import { handleSubmit } from "./email.js";
import { observer } from './observer.js';
import { autoDate, activeLinks } from "./utils.js";


document.addEventListener("DOMContentLoaded", () => {
    setupSidebar();
    setupI18n();
    observer();
    autoDate();
    activeLinks();


    // //Grab language selectors in Nav
    // document.querySelectorAll('[data-lang]').forEach(el => {
    //     el.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const lang = el.getAttribute('data-lang');
    //     changeLanguage(lang)
    //     });
    // });

    const langBtn = document.querySelector(".langBtn");
    
    //Toggle language
    langBtn.addEventListener("click", () => {
        //use a ternary to toggle and current value of language
        const currentLang = langBtn.getAttribute("data-lang");
        const newLang = currentLang === "en" ? "gr" : "en";
        //console.log(currentLang)
        langBtn.setAttribute("data-lang", newLang);
        changeLanguage(newLang);
    });

    const form = document.querySelector(".contact-form");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            handleSubmit(e);
        });
    }
}); 




     
   








