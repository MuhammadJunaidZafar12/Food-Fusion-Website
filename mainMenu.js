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
                imgSrc: '/imgs/OIP.jpg',
                altText: 'Classic Burger',
                title: 'Classic Burger',
                description: 'Juicy beef with melted cheddar',
                price: '$12.50'
            },
            {
                imgSrc: '/imgs/Turkey-Smash-Burgers1.jpg',
                altText: 'Double Bacon Burger',
                title: 'Double Bacon',
                description: 'Two beef patties and cheese',
                price: '$18.00'
            },
            {
                imgSrc: '/imgs/tore.jpg',
                altText: 'Spicy Jalapeno Burger',
                title: 'Spicy Jalapeno',
                description: 'Loaded with spicy mayo',
                price: '$16.50'
            },
            {
                imgSrc: '/imgs/soo.jpg',
                altText: 'BBQ Bacon Burger',
                title: 'BBQ Bacon Burger',
                description: 'Smoky sauce with onion rings',
                price: '$19.00'
            },
            {
                imgSrc: '/imgs/mix.jpg',
                altText: 'Vegan Delight',
                title: 'Vegan Burger',
                description: 'Plant patty with vegan cheese',
                price: '$14.00'
            }
        ],
        pizzas: [
            {
                imgSrc: '/imgs/first.jpg',
                altText: 'Pepperoni Pizza',
                title: 'Pepperoni Supreme',
                description: 'Loaded with pepperoni tangy tomato sauce',
                price: '$22.00'
            },
            {
                imgSrc: '/imgs/second.jpg',
                altText: 'Margherita Pizza',
                title: 'Classic Margherita',
                description: 'With Fresh mozzarella',
                price: '$19.50'
            },
            {
                imgSrc: '/imgs/third.jpg',
                altText: 'BBQ Chicken Pizza',
                title: 'BBQ Chicken Pizza',
                description: 'BBQ sauce, and red onions',
                price: '$23.00'
            },
            {
                imgSrc: '/imgs/fourth.jpg',
                altText: 'Veggie Pizza',
                title: 'Garden Veggie Pizza',
                description: 'Topped with bell peppers',
                price: '$20.00'
            },
            {
                imgSrc: '/imgs/background.jpeg',
                altText: 'Hawaiian Pizza',
                title: 'Hawaiian Delight',
                description: 'Sweet pineapple, mozzarella',
                price: '$21.50'
            }
        ],
        softDrinks: [
            {
                imgSrc: 'imgs/menu_drink1.avif',
                altText: 'Coca Cola',
                title: 'Coca Cola',
                description: 'Chilled classic Coca-Cola',
                price: '$3.50'
            },
            {
                imgSrc: 'imgs/menu_drink2.avif',
                altText: 'Lemonade',
                title: 'Fresh Lemonade',
                description: 'Made with freshly lemons',
                price: '$4.50'
            },
            {
                imgSrc: 'imgs/menu_drink3.avif',
                altText: 'Iced Tea',
                title: 'Iced Tea',
                description: 'Refreshing brewed iced tea',
                price: '$4.00'
            },
            {
                imgSrc: 'imgs/menu_drink4.avif',
                altText: 'Orange Soda',
                title: 'Orange Soda',
                description: 'Sweet orange-flavored soda',
                price: '$3.75'
            },
            {
                imgSrc: 'imgs/menu_drink5.avif',
                altText: 'Root Beer',
                title: 'Root Beer',
                description: 'Creamy and frothy root beer',
                price: '$4.25'
            }
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