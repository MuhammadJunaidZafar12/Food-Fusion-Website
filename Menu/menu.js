
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


//*************************************** MENU  ************************************** 
document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.querySelector('.menu-container');
    const headings = document.querySelectorAll('.sub-heading1'); // Grab all headings

    // Menu data for each category
    const menuData = {
        burgers: [
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Classic Burger',
                title: 'Classic Burger',
                description: 'With Cheese and Fries',
                price: '$15.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'BBQ Burger',
                title: 'BBQ Burger',
                description: 'With Onion Rings',
                price: '$17.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'BBQ Burger',
                title: 'BBQ Burger',
                description: 'With Onion Rings',
                price: '$17.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'BBQ Burger',
                title: 'BBQ Burger',
                description: 'With Onion Rings',
                price: '$17.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'BBQ Burger',
                title: 'BBQ Burger',
                description: 'With Onion Rings',
                price: '$17.00'
            },
        ],
        pizzas: [
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Pepperoni Pizza',
                title: 'Pepperoni Pizza',
                description: 'Loaded with Cheese',
                price: '$20.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Margherita Pizza',
                title: 'Margherita Pizza',
                description: 'With Fresh Basil',
                price: '$18.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Margherita Pizza',
                title: 'Margherita Pizza',
                description: 'With Fresh Basil',
                price: '$18.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Margherita Pizza',
                title: 'Margherita Pizza',
                description: 'With Fresh Basil',
                price: '$18.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Margherita Pizza',
                title: 'Margherita Pizza',
                description: 'With Fresh Basil',
                price: '$18.00'
            },

        ],
        softDrinks: [
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Coca Cola',
                title: 'Coca Cola',
                description: 'Chilled',
                price: '$5.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Lemonade',
                title: 'Lemonade',
                description: 'Freshly Squeezed',
                price: '$6.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Coca Cola',
                title: 'Coca Cola',
                description: 'Chilled',
                price: '$5.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Coca Cola',
                title: 'Coca Cola',
                description: 'Chilled',
                price: '$10.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Coca Cola',
                title: 'Coca Cola',
                description: 'Chilled',
                price: '$15.00'
            },
        ]
    };

    // Function to generate and update menu cards based on category
    function updateMenu(category) {
        console.log('Selected Category:', category); // Check if correct category is being passed
        menuContainer.innerHTML = ''; // Clear existing content
        const items = menuData[category];

        if (!items) {
            console.error(`No items found for category: ${category}`);
            return;
        }

        items.forEach(item => {
            const menuCard = `
                <div class="menu-card">
                    <img src="${item.imgSrc}" alt="${item.altText}" class="food-img">
                    <div class="menu-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <div class="cart-icon">
                        <img src="/svgs/orderMenu.svg" alt="Add to cart">
                    </div>
                </div>
            `;
            menuContainer.insertAdjacentHTML('beforeend', menuCard);
        });

        // Reinitialize observer for the new menu cards
        observeMenuCards();
    }

    // Function to set up the IntersectionObserver for animation on menu cards
    function observeMenuCards() {
        const menuCards = document.querySelectorAll('.menu-card');

        const options = {
            threshold: 0.1, // Trigger when 10% of the menu card is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view'); // Add the in-view class when it enters the viewport
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        }, options);

        // Observe each menu card
        menuCards.forEach(card => {
            observer.observe(card);
        });
    }

    // Event listeners for each sub-heading
    headings.forEach(subHeading => {
        subHeading.addEventListener('click', function() {
            const category = this.getAttribute('data-category'); // Get category from data attribute
            updateMenu(category); // Update menu with selected category

            // Remove active class from all headings
            headings.forEach(heading => heading.classList.remove('active-heading'));

            // Add active class to the clicked heading
            this.classList.add('active-heading');
        });
    });

    // Set default category to show on page load and underline 'Burgers' heading
    updateMenu('burgers'); // Show 'Burgers' menu by default
    const defaultHeading = document.querySelector('.sub-heading1[data-category="burgers"]');
    defaultHeading.classList.add('active-heading'); // Underline the 'Burgers' heading
});