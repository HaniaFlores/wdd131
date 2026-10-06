const gameList = document.querySelector("#game-list");

const gameCount = document.querySelector("#game-count");

const genreFilter = document.querySelector("#genre-filter");

const platformFilter =
    document.querySelector("#platform-filter");

const ratingFilter =
    document.querySelector("#rating-filter");

const gameMessage =
    document.querySelector("#game-message");


function getRatingLabel(rating) {

    if (rating >= 9) {
        return `Highly Recommended`;
    }

    if (rating >= 8) {
        return `Recommended`;
    }

    return `Worth Trying`;

}


function normalizeFilterValue(value) {

    return value.trim().toLowerCase();

}


const pageParameters =
    new URLSearchParams(window.location.search);

const sortByRating =
    pageParameters.get("sort") === "rating";


if (pageParameters.has("genre")) {

    const requestedGenre =
        normalizeFilterValue(pageParameters.get("genre"));

    const matchingGenreOption =
        Array.from(genreFilter.options).find(
            (option) =>
                normalizeFilterValue(option.value)
                === requestedGenre
        );


    if (matchingGenreOption) {
        genreFilter.value = matchingGenreOption.value;
    }

}


function displayGames(gamesToDisplay) {

    if (gamesToDisplay.length === 0) {

        gameList.innerHTML = `
            <p class="empty-message">
                No games match the selected filters.
            </p>
        `;

        gameCount.textContent = `0 games found`;

        return;

    }


    gameList.innerHTML = gamesToDisplay.map((game) => {

        const platforms =
            game.platforms.join(` / `);

        const ratingLabel =
            getRatingLabel(game.rating);


        return `
            <article class="game-card">

                <img
                    src="${game.image}"
                    alt="${game.title} game artwork"
                    width="400"
                    height="225"
                    loading="lazy"
                >

                <div class="game-card-content">

                    <span class="genre-label">
                        ${game.genre}
                    </span>

                    <h3>${game.title}</h3>

                    <p>
                        ${game.description}
                    </p>

                    <p>
                        <strong>Platform:</strong>
                        ${platforms}
                    </p>

                    <p class="rating">
                        ★ ${game.rating} / 10
                    </p>

                    <p>
                        ${ratingLabel}
                    </p>

                    <button
                        class="button primary-button
                        small-button save-game-button"
                        type="button"
                        data-id="${game.id}"
                    >
                        Add to Play List
                    </button>

                </div>

            </article>
        `;

    }).join(``);


    gameCount.textContent =
        `${gamesToDisplay.length} ${
            gamesToDisplay.length === 1
                ? `game`
                : `games`
        } found`;

}


function filterGames() {

    const selectedGenre =
        normalizeFilterValue(genreFilter.value);

    const selectedPlatform =
        normalizeFilterValue(platformFilter.value);

    const minimumRating =
        Number(ratingFilter.value);


    let filteredGames =
        window.nextPlayGames.filter((game) => {

            const genreMatches =
                selectedGenre === `all`
                || normalizeFilterValue(game.genre) === selectedGenre;


            const platformMatches =
                selectedPlatform === `all`
                || game.platforms.some(
                    (platform) =>
                        normalizeFilterValue(platform)
                        === selectedPlatform
                );


            const ratingMatches =
                minimumRating === 0
                || game.rating >= minimumRating;


            return (
                genreMatches
                && platformMatches
                && ratingMatches
            );

        });

    if (sortByRating) {

        filteredGames = [...filteredGames].sort(
            (gameA, gameB) =>
                gameB.rating - gameA.rating
        );

    }

    displayGames(filteredGames);

}


function showGameMessage(message) {

    gameMessage.textContent = `${message}`;

}


genreFilter.addEventListener(
    "change",
    filterGames
);


platformFilter.addEventListener(
    "change",
    filterGames
);


ratingFilter.addEventListener(
    "change",
    filterGames
);


gameList.addEventListener("click", (event) => {

    const button =
        event.target.closest(".save-game-button");


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
        window.NextPlayStorage.addGame(
            selectedGame
        );


    if (wasAdded) {

        showGameMessage(
            `${selectedGame.title} was added to your Play List.`
        );

    } else {

        showGameMessage(
            `${selectedGame.title} is already in your Play List.`
        );

    }

});


filterGames();