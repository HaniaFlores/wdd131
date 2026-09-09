const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            const isOpen = menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", String(!isOpen));
            menuButton.textContent = isOpen ? "☰" : "X";
            menu.classList.toggle("open", !isOpen);
        });
    }
});