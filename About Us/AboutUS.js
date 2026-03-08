
document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.querySelector('.about-us-section');
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



// ************************ Master Sheffs **********************************
document.addEventListener('DOMContentLoaded', function () {
    const sheffContainer = document.getElementById('sheff-container1');

    // Example chef data
    const sheffData = [
        {
            title: "Master Shef",
            description: "M Junaid",
            image: "sheff1.webp"
        },
        {
            title: "Master Shef",
            description: "Sufyan",
            image: "sheff2.webp"
        },
        {
            title: "Master Shef",
            description: "Taqi",
            image: "sheff3.webp"
        },
        {
            title: "Master Shef",
            description: "Khurram",
            image: "sheff4.webp"
        }
    ];

    // Loop through the data and create cards dynamically
    let sheffHTML = ''; // Create an empty string to hold the HTML
    sheffData.forEach(item => {
        sheffHTML += `
        <div class="sheff-card">
            <img src="${item.image}" alt="${item.title}" class="sheff-img">
            <div class="sheff-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
        `;
    });

    // Insert the generated HTML into the container
    sheffContainer.innerHTML = sheffHTML;

});

// Function to handle when the heading comes into view
function animateSheffHeading() {
    const sheffHeading = document.querySelector('.sheff_heading');

    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view4');
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

        observer.observe(sheffHeading);
    } else {
        // Fallback for browsers that don't support Intersection Observer
        window.addEventListener('scroll', () => {
            const rect = sheffHeading.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                sheffHeading.classList.add('in-view4');
            }
        });
    }
}

// Call the function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', animateSheffHeading);


// animation on sheff card 

document.addEventListener("DOMContentLoaded", function () {
    const sheffCards = document.querySelectorAll('.sheff-card');

    // Options for the observer
    const options = {
        threshold: 0.1, // Trigger when 10% of the menu card is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view3'); // Add the in-view class when it enters the viewport
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, options);

    // Observe each menu card
    sheffCards.forEach(card => {
        observer.observe(card);
    });
});
