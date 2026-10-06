const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");


if (menuButton && primaryNav) {

    menuButton.addEventListener("click", () => {

        primaryNav.classList.toggle("open");

        const isOpen = primaryNav.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            `${isOpen}`
        );

        menuButton.setAttribute(
            "aria-label",
            `${isOpen ? "Close navigation menu" : "Open navigation menu"}`
        );

    });

}


const currentYear = document.querySelector("#currentyear");

if (currentYear) {

    currentYear.textContent =
        `${new Date().getFullYear()}`;

}


const lastModified = document.querySelector("#lastModified");

if (lastModified) {

    lastModified.textContent =
        `${document.lastModified}`;

}


/* =========================
   LOCAL STORAGE
========================= */

const STORAGE_KEY = "nextplayPlayLater";


function getPlayLater() {

    try {

        const storedItems =
            JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (Array.isArray(storedItems)) {
            return storedItems;
        }

        return [];

    } catch (error) {

        return [];

    }

}


function savePlayLater(items) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
    );

}


function addGameToPlayLater(game) {

    const playLater = getPlayLater();

    const alreadySaved = playLater.some(
        (item) => `${item.id}` === `${game.id}`
    );


    if (alreadySaved) {
        return false;
    }


    playLater.push(game);

    savePlayLater(playLater);

    return true;

}


function removeGameFromPlayLater(id) {

    const updatedList = getPlayLater().filter(
        (item) => `${item.id}` !== `${id}`
    );

    savePlayLater(updatedList);

    return updatedList;

}

window.NextPlayStorage = {
    getPlayLater,
    savePlayLater,
    addGame: addGameToPlayLater,
    removeGame: removeGameFromPlayLater
};


const featuredGrid =
    document.querySelector(".featured-grid");

const featuredGameMessage =
    document.querySelector("#featured-game-message");


if (featuredGrid && featuredGameMessage) {

    featuredGrid.addEventListener("click", (event) => {

        const button =
            event.target.closest(".featured-save-button");


        if (!button) {
            return;
        }


        const gameId =
            Number(button.dataset.id);

        const selectedGame =
            window.nextPlayGames.find(
                (game) => game.id === gameId
            );


        if (!selectedGame) {
            return;
        }


        const wasAdded =
            window.NextPlayStorage.addGame(selectedGame);

        featuredGameMessage.textContent = wasAdded
            ? `${selectedGame.title} was added to your Play List.`
            : `${selectedGame.title} is already in your Play List.`;

    });

}