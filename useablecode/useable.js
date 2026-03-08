

// only for count-up effect
// Function to create the count-up effect 
// function countUp(element, start, end, duration) {
//     let current = start;
//     const increment = end > start ? 1 : -1;
//     const stepTime = Math.abs(Math.floor(duration / (end - start)));

//     const timer = setInterval(() => {
//         current += increment;
//         element.textContent = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// function startCountingOnScroll() {
//     const statsSection = document.querySelector('.stats');
//     const experienceCount = document.getElementById('experience-count');
//     const chefCount = document.getElementById('chef-count');

//     const sectionPosition = statsSection.getBoundingClientRect().top;
//     const screenPosition = window.innerHeight;

//     if (sectionPosition < screenPosition) {
//         countUp(experienceCount, 0, 12, 2000);
//         countUp(chefCount, 0, 41, 2000);
//         window.removeEventListener('scroll', startCountingOnScroll);
//     }
// }

// Listen for scroll event
// window.addEventListener('scroll', startCountingOnScroll);
// window.addEventListener('load', startCountingOnScroll);



// ****************************menu card animation********************************** 
// dynamically card created
// const menuItems = [
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/background.jpeg',
//         altText: 'Ravioli Stuffed',
//         title: 'Ravioli Stuffed',
//         description: 'With Pesto Sauce',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     {
//         imgSrc: 'imgs/image1.webp',
//         altText: 'Pappardelle',
//         title: 'Pappardelle',
//         description: 'With Vegetables',
//         price: '$35.00'
//     },
//     // Add more items as needed
// ];

// document.addEventListener('DOMContentLoaded', function() {
//     const menuContainer = document.querySelector('.menu-container');

//     menuItems.forEach(item => {
//         const menuCard = `
//             <div class="menu-card">
//                 <img src="${item.imgSrc}" alt="${item.altText}" class="food-img">
//                 <div class="menu-info">
//                     <h3>${item.title}</h3>
//                     <p>${item.description}</p>
//                     <p class="price">${item.price}</p>
//                 </div>
//                 <div class="cart-icon">
//                     <img src="svgs/orderMenu.svg" alt="Add to cart">
//                 </div>
//             </div>
//         `;

//         // Append the generated menu card to the menu container
//         menuContainer.insertAdjacentHTML('beforeend', menuCard);
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const menuContainer = document.querySelector('.menu-container');

//     // Menu data for each category
//     const menuData = {
//         burgers: [
//             {
//                 imgSrc: 'imgs/background.jpeg',
//                 altText: 'Classic Burger',
//                 title: 'Classic Burger',
//                 description: 'With Cheese and Fries',
//                 price: '$15.00'
//             },
//             {
//                 imgSrc: 'imgs/background.jpeg',
//                 altText: 'BBQ Burger',
//                 title: 'BBQ Burger',
//                 description: 'With Onion Rings',
//                 price: '$17.00'
//             },
//         ],
//         pizzas: [
//             {
//                 imgSrc: 'imgs/background.jpeg',
//                 altText: 'Pepperoni Pizza',
//                 title: 'Pepperoni Pizza',
//                 description: 'Loaded with Cheese',
//                 price: '$20.00'
//             },
//             {
//                 imgSrc: 'imgs/background.jpeg',
//                 altText: 'Margherita Pizza',
//                 title: 'Margherita Pizza',
//                 description: 'With Fresh Basil',
//                 price: '$18.00'
//             },
//         ],
//         softDrinks: [
//             {
//                 imgSrc: 'imgs/background.jpeg',
//                 altText: 'Coca Cola',
//                 title: 'Coca Cola',
//                 description: 'Chilled',
//                 price: '$5.00'
//             },
//             {
//                 imgSrc: 'imgs/background.jpeg',
//                 altText: 'Lemonade',
//                 title: 'Lemonade',
//                 description: 'Freshly Squeezed',
//                 price: '$6.00'
//             },
//         ]
//     };

//     // Function to generate and update menu cards based on category
//     function updateMenu(category) {
//         console.log('Selected Category:', category); // Check if correct category is being passed
//         menuContainer.innerHTML = ''; // Clear existing content
//         const items = menuData[category];

//         // Check if the items are being selected correctly
//         console.log('Menu Items:', items);

//         if (!items) {
//             console.error(`No items found for category: ${category}`);
//             return;
//         }

//         items.forEach(item => {
//             const menuCard = `
//                 <div class="menu-card">
//                     <img src="${item.imgSrc}" alt="${item.altText}" class="food-img">
//                     <div class="menu-info">
//                         <h3>${item.title}</h3>
//                         <p>${item.description}</p>
//                         <p class="price">${item.price}</p>
//                     </div>
//                     <div class="cart-icon">
//                         <img src="svgs/orderMenu.svg" alt="Add to cart">
//                     </div>
//                 </div>
//             `;
//             menuContainer.insertAdjacentHTML('beforeend', menuCard);
//         });
//     }

//     // Event listeners for each sub-heading
//     document.querySelectorAll('.sub-heading1').forEach(subHeading => {
//         subHeading.addEventListener('click', function() {
//             const category = this.getAttribute('data-category'); // Get category from data attribute
//             updateMenu(category); // Update menu with selected category
//         });
//     });

//     // Optionally, set a default category to show on page load
//     updateMenu('burgers');
// });




// document.addEventListener("DOMContentLoaded", function () {
//     const menuCards = document.querySelectorAll('.menu-card');

//     // Options for the observer
//     const options = {
//         threshold: 0.1, // Trigger when 10% of the menu card is visible
//     };

//     // Create the observer
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('in-view'); // Add the in-view class when it enters the viewport
//                 observer.unobserve(entry.target); // Stop observing once the animation is triggered
//             }
//         });
//     }, options);

//     // Observe each menu card
//     menuCards.forEach(card => {
//         observer.observe(card);
//     });
// });
