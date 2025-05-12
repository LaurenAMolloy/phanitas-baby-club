const toggle = document.querySelector(".toggleBtn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".side");
const welcome= document.getElementById("welcome");
const year = document.getElementById("spanYear");
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

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

//Function to fetch langauge data
async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`/languages/${lang}.json`)
        if(!response.ok) throw new Error("Langauge")
        return response.json()
    
    } catch (err) {
        console.error("Error loading langauge:", err)
        // fallback empty object
        return {};
    }
    
}

//Function to set language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang)
    //location.reload();
}

//Function to update content based on selected langauge
//Iterate over elements with data attributes
//Update text content using corresponding translations
function updateContent(langData) {
    //grab all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        //retrive the data attribute
        const key = element.getAttribute('data-i18n');
        //look up the translated text in the lang data object
        element.innerHTML = langData[key] || key
    });
}

function updatePlaceholders(langData) {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', langData[key] || key);
    });
  }

//Function to change language
async function changeLanguage(lang) {
    //Set lang to local storage
    //Lang persists even after they leave the website
    setLanguagePreference(lang);
    //Retrieve content from json files
    const langData = await fetchLanguageData(lang)
    updateContent(langData);
    updatePlaceholders(langData);
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
    const userPreferredLanguage = localStorage.getItem("language") || "en";
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    updatePlaceholders(langData);
  });



//Fade images into view with intersection observer
const appearOptions = {
    //whole page into view before fade
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
    }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})



//update the date automatically
var date = new Date();
var yearNow = date.getFullYear();
year.textContent = yearNow
