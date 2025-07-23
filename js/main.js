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
   
    const langBtn = document.querySelector(".langBtn");
    
    //Toggle language
    if(langBtn) {
    langBtn.addEventListener("click", () => {
        //use a ternary to toggle and current value of language
        const currentLang = langBtn.getAttribute("data-lang");
        const newLang = currentLang === "en" ? "gr" : "en";
        //console.log(currentLang)
        langBtn.setAttribute("data-lang", newLang);
        langBtn.setAttribute('lang', newLang);
        langBtn.setAttribute('aria-label', `Switch to ${newLang === 'en' ? 'English' : 'Greek'}`);
        langBtn.setAttribute('aria-pressed', 'true');

        changeLanguage(newLang);
    });
}

    const form = document.querySelector(".contact-form");
    const submitBtn = form?.querySelector('button[type="submit"]');
    //if (submitBtn) submitBtn.disabled = true;
    if(form) {
        form.addEventListener("submit", (e) => {
            console.log("submitting")
            e.preventDefault();
            handleSubmit(e);
        });
    }
}); 




     
   








