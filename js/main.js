import { setupSidebar } from "./sidebar.js";
import { setupI18n, changeLanguage } from "./il8n.js";
import { handleSubmit } from "./email.js";
import { observer } from './observer.js';
import { autoDate } from "./utils.js";


document.addEventListener("DOMContentLoaded", () => {
    setupSidebar();
    setupI18n();
    observer();
    autoDate();
    emailjs.init("6LfdYEQrAAAAAP1DQu6fk_lky64RGlz6IWlAaV8j");

    //Grab language selectors in Nav
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = el.getAttribute('data-lang');
        changeLanguage(lang)
        });
    });

    const form = document.querySelector(".contact-form");
    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            handleSubmit();
        });
    }

}); 




     
   








