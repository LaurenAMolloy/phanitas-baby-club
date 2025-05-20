export function observer() {
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
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
});
}