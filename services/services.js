

// *************** description card heading *****************
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



//
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('cardContainer1');

    // Example data: This would normally be fetched dynamically, like from a JSON file.
    const cardData = [
        {
            title: "Master Chef",
            description: "Elevate your cooking to new heights! Learn the art of precision, creativity and flavor with the guidance of master chefs.",
            image: "/svgs/shef.svg",
            folder: "master-chef"
        },
        {
            title: "Quelity Food",
            description: "Savor the difference! Discover the art of using fresh, premium ingredients to create wholesome, flavorful dishes of fast foods.",
            image: "/svgs/quelity.svg",
            folder: "food-lover"
        },
        {
            title: "Online Order",
            description: "Hungry? Get top-quality food delivered fast! Browse our menu, order online, and enjoy restaurant-level meals at home.",
            image: "/svgs/order.svg",
            folder: "Online Order"
        },
        {
            title: "24/7 Service",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            image: "/svgs/service.svg",
            folder: "24/7 Service"
        },
        {
            title: "Delivery",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            image: "/svgs/service.svg",
            folder: "24/7 Service"
        },
        {
            title: "Mobile Payment",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            image: "/svgs/service.svg",
            folder: "24/7 Service"
        },
        {
            title: "Drive Through",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            image: "/svgs/service.svg",
            folder: "24/7 Service"
        },
        {
            title: "Table Services",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            image: "/svgs/service.svg",
            folder: "24/7 Service"
        }
    ];

    // Loop through the data and create cards dynamically
    cardData.forEach(item => {
        const cardHTML = `
            <div class="card">
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
});