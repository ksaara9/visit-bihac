const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

// Open menu when the open button is clicked
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Close menu when clicking outside the menu (optional)
document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && event.target !== menuOpenButton) {
        document.body.classList.remove("show-mobile-menu");
    }
});
