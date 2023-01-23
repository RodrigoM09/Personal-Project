const sectionOne = document.querySelector('.contact-info-header');
const sections = document.querySelector('.contact-info');
const circles = document.querySelectorAll('.circle');

const options = {
    root: null, // relative to document viewport
    threshold: 0, // visible amount of item shown in relation to root
    rootMargin: "15px" // margin around root. Values are similar to css property. Unit less values not allowed
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
}, options);

circles.forEach(circle => {
    observer.observe(circle);
});