 async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`/languages/${lang}.json`)
        if(!response.ok) throw new Error("Language")
        return response.json()
    
    } catch (err) {
        console.error("Error loading language:", err)
        // fallback empty object
        return {};
    }
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
}

function updateContent(langData) {
    console.log("langData",langData)
    //grab all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        //retrieve the data attribute
        const key = element.getAttribute('data-i18n');
        //console.log("key", key)
        //look up the translated text in the lang data object
        //display the translation
        element.innerHTML = langData[key] || key
    });
}

function updatePlaceholders(langData) {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', langData[key] || key);
    });
}

export async function changeLanguage(lang) {
    console.log(lang)
    //Set lang to local storage
    //Lang persists even after they leave the website
    setLanguagePreference(lang);
    //Retrieve content from json files
    const langData = await fetchLanguageData(lang)
    updateContent(langData);
    updatePlaceholders(langData);
}

export async function setupI18n () {
    //Retrieve user lang from local storage or en
    const userPreferredLanguage = localStorage.getItem("language") || "en";
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    updatePlaceholders(langData);
}

