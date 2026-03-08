
// Function to check if the boxes are in the viewport and apply animation
function handleScroll() {
    const boxes = document.querySelectorAll('.box');
    const screenHeight = window.innerHeight * 0.8; // Trigger slightly before full viewport

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        // If the box is in the viewport, add the "visible" class
        if (boxTop < screenHeight) {
            box.classList.add('visible');
        }
    });
}

// Run the scroll check when the page loads and whenever the user scrolls
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Check on page load in case elements are already in view

//
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('cardContainer1');

    // Example data: This would normally be fetched dynamically, like from a JSON file.
    const cardData = [
        {
            title: "Master Chef",
            description: "Elevate your cooking to new heights! Learn the art of precision, creativity and flavor with the guidance of master chefs.",
            image: "svgs/shef.svg",
            folder: "master-chef"
        },
        {
            title: "Quelity Food",
            description: "Savor the difference! Discover the art of using fresh, premium ingredients to create wholesome, flavorful dishes of fast foods.",
            image: "svgs/quelity.svg",
            folder: "food-lover"
        },
        {
            title: "Online Order",
            description: "Hungry? Get top-quality food delivered fast! Browse our menu, order online, and enjoy restaurant-level meals at home.",
            image: "svgs/order.svg",
            folder: "Online Order"
        },
        {
            title: "24/7 Service",
            description: "Always there when you need us—24/7 service you can count on!",
            image: "svgs/service.svg",
            folder: "24/7 Service"
        }
    ];

    // Loop through the data and create cards dynamically
    cardData.forEach((item, index) => {
        const cardHTML = `
            <div class="card" id="card-${index}">
                <img src="${item.image}" alt="${item.title}">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            </div>
        `;
        // Append the generated card to the container
        cardContainer.innerHTML += cardHTML;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // const cardContainer = document.getElementById('cardContainer1');
    const cards = document.querySelectorAll('.cardContainer .card');

    // Function to check if the cards are in the viewport and apply the "visible" class
    function handleScroll() {
        const screenHeight = window.innerHeight * 0.8; // Adjust the trigger point slightly before the full viewport

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;

            // If the card is in the viewport, add the "visible" class with delay
            if (cardTop < screenHeight) {
                // card.style.animationDelay = `${index * 0.5}s`; // Add stagger effect
                card.classList.add('visible'); // Trigger the animation by adding the class
            }
        });
    }

    // Run the scroll check when the page loads and whenever the user scrolls
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); // Check on page load

    // Trigger animation on page load for visible elements
    handleScroll();


    document.getElementById("card-0").addEventListener("click", function() {
        window.location.href = "/About Us/About Us.html";
    })

    document.getElementById("card-1").addEventListener("click", function() {
        window.location.href = "/Menu/menu.html";
    })

    document.getElementById("card-3").addEventListener("click", function() {
        window.location.href = "/services/services.html";
    })
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
//             if (current == end) {
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



// ************************ Master Sheffs **********************************
document.addEventListener('DOMContentLoaded', function () {
    const sheffContainer = document.getElementById('sheff-container1');

    // Example chef data
    const sheffData = [
        {
            title: "Master Shef",
            description: "M Junaid",
            image: "imgs/sheff1.webp"
        },
        {
            title: "Master Shef",
            description: "Sufyan",
            image: "imgs/sheff2.webp"
        },
        {
            title: "Master Shef",
            description: "Taqi",
            image: "imgs/sheff3.webp"
        },
        {
            title: "Master Shef",
            description: "Khurram",
            image: "imgs/sheff4.webp"
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

// vedio in left side of "book a table"


const video = document.getElementById('video1');
const playButton = document.getElementById('playButton');

// Toggle between play and pause
playButton.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playButton.style.backgroundImage = "url('svgs/pouse.svg')";  // Change to pause icon
    } else {
        video.pause();
        playButton.style.backgroundImage = "url('svgs/play.svg')";   // Change to play icon
    }
});

// Optional: change button back to play icon when the video ends
video.addEventListener('ended', function () {
    playButton.style.backgroundImage = "url('svgs/play.svg')";
});


// ********************************client feedbacks***********************************************

// let currentIndex = 0;
// const feedbackCards = document.querySelectorAll('.feedback-card');
// const totalCards = feedbackCards.length;

// function showNextCard() {
//     feedbackCards[currentIndex].style.display = 'none';
//     currentIndex = (currentIndex + 1) % totalCards;
//     feedbackCards[currentIndex].style.display = 'block';
// }

// // Hide all cards except the first one initially
// feedbackCards.forEach((card, index) => {
//     if (index !== 0) {
//         card.style.display = 'none';
//     }
// });

// // Automatically switch cards every 5 seconds
// setInterval(showNextCard, 5000);


const feedbackRow = document.querySelector('.feedback-row');
const feedbackCards = document.querySelectorAll('.feedback-card');
const totalCards = feedbackCards.length;
const visibleCards = 3;
let currentIndex = 0;



// Clone the first and last few cards to create an infinite loop effect
const firstCards = Array.from(feedbackCards).slice(0, visibleCards).map(card => card.cloneNode(true));
const lastCards = Array.from(feedbackCards).slice(-visibleCards).map(card => card.cloneNode(true));

// Append cloned cards to the start and end for smooth circular effect
firstCards.forEach(card => feedbackRow.appendChild(card));
lastCards.forEach(card => feedbackRow.insertBefore(card, feedbackCards[0]));

// Function to slide cards left to right
function slideCards() {
    // Calculate the width of each card including margins
    const cardWidth = feedbackCards[0].offsetWidth + 20; // 20px is the gap between cards

    // Move the feedback-row by the width of one card to the right
    feedbackRow.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

    // Update index, reset to 0 if exceeds totalCards
    currentIndex++;
    if (currentIndex >= totalCards + visibleCards) {
        // Reset transition to avoid "jump"
        feedbackRow.style.transition = 'none';
        feedbackRow.style.transform = `translateX(-${cardWidth * visibleCards}px)`;
        currentIndex = visibleCards; // Go back to visibleCards position
        setTimeout(() => {
            feedbackRow.style.transition = 'transform 1s ease-in-out';
        }, 50); // Small delay for smooth transition reset
    }
}

// Automatically slide every 3 seconds
setInterval(slideCards, 3000);
