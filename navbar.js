
let subNavbar= document.getElementById("sub-navBar");
subNavbar.style.maxHeight = "0px";
function toggleNavbar() {
    if(subNavbar.style.maxHeight == "0px")
    {
        subNavbar.style.maxHeight = "500px";
    }
    else{
        subNavbar.style.maxHeight = "0px";
    }
}


// if we are alredy on home page then if we click the home page again then no reload occours...
// home tag 
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a'); // Select all links in the navbar
    const currentUrl = window.location.href; // Get the current page URL

    links.forEach(link => {
        // Add active class if the link's href matches the current page URL
        if (link.href === currentUrl) {
            link.classList.add('active');
        }

        // Prevent reload if clicking on the active link
        link.addEventListener('click', function (event) {
            if (link.href === currentUrl) {
                event.preventDefault(); // Prevent reloading the page
            }
        });
    });
});
