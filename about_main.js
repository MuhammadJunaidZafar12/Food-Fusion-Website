document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.querySelector('.about-us-section');  // Fix: Use querySelector for a single element
    const experienceCount = document.getElementById('experience-count');
    const chefCount = document.getElementById('chef-count');

    // Function to count up numbers (if needed)
    function countUp(element, start, end, duration) {
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));

        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Start the counting and animation when elements are in view
    function startAnimations() {
        if (isInViewport(statsSection)) {
            // Add the 'visible' class to trigger animations
            statsSection.classList.add('visible');
            experienceCount.classList.add('visible');
            chefCount.classList.add('visible');

            // Start counting animation when the section becomes visible
            countUp(experienceCount, 0, 12, 2000);
            countUp(chefCount, 0, 41, 2000);

            // Add 'visible' class to the image grid and content
            const imageGridItems = document.querySelectorAll('.image-grid img');
            imageGridItems.forEach(item => item.classList.add('visible'));

            const contentItem = document.querySelector('.content');
            contentItem.classList.add('visible');

            // Remove the scroll event listener once animations have been triggered
            window.removeEventListener('scroll', startAnimations);
        }
    }

    // Listen for scroll event to trigger animations
    window.addEventListener('scroll', startAnimations);

    // Trigger immediately if the section is already in the viewport on page load
    startAnimations();
});




// document.addEventListener('DOMContentLoaded', function () {
//     const statsSection = document.querySelector('.about-us-section');
//     const experienceCount = document.getElementById('experience-count');
//     const chefCount = document.getElementById('chef-count');

//     // Function to count up numbers (if needed)
//     function countUp(element, start, end, duration) {
//         let current = start;
//         const increment = end > start ? 1 : -1;
//         const stepTime = Math.abs(Math.floor(duration / (end - start)));

//         const timer = setInterval(() => {
//             current += increment;
//             element.textContent = current;
//             if (current === end) {
//                 clearInterval(timer);
//             }
//         }, stepTime);
//     }

//     // Check if an element is in the viewport
//     function isInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return rect.top <= window.innerHeight && rect.bottom >= 0;
//     }

//     // Start the counting and animation when elements are in view
//     function startAnimations() {
//         if (isInViewport(statsSection)) {
//             // Add the 'visible' class to trigger animations
//             statsSection.classList.add('visible');
//             experienceCount.classList.add('visible');
//             chefCount.classList.add('visible');

//             // Start counting animation when the section becomes visible
//             countUp(experienceCount, 0, 12, 2000);
//             countUp(chefCount, 0, 41, 2000);

//             // Add 'visible' class to the image grid and content
//             const imageGridItems = document.querySelectorAll('.image-grid img');
//             imageGridItems.forEach(item => item.classList.add('visible'));

//             const contentItem = document.querySelector('.content');
//             contentItem.classList.add('visible');

//             // Remove the scroll event listener once animations have been triggered
//             window.removeEventListener('scroll', startAnimations);
//         }
//     }

//     // Listen for scroll event to trigger animations
//     window.addEventListener('scroll', startAnimations);

//     // Trigger immediately if the section is already in the viewport on page load
//     startAnimations();
// });
