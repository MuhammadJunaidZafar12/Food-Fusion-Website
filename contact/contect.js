
// ********************** menu ********************************

// Observer to check when the sub-heading(pizas burger) enters the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, { threshold: 0.1 });

// Target the sub-heading
const subHeading = document.querySelector('.sub-heading');
const heading = document.querySelector('.heading-div');

observer.observe(heading);
observer.observe(subHeading);