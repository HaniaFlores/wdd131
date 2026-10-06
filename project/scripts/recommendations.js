const recommendationGenre =
    document.querySelector("#recommendation-genre");

const recommendationList =
    document.querySelector("#recommendation-list");

const moreResultsLink =
    document.querySelector("#more-results-link");

const recommendationMessage =
    document.querySelector("#recommendation-message");

const playLaterForm =
    document.querySelector("#play-later-form");

const gameName =
    document.querySelector("#game-name");

const gamePlatform =
    document.querySelector("#game-platform");

const gameGenre =
    document.querySelector("#game-genre");

const formMessage =
    document.querySelector("#form-message");

const playLaterList =
    document.querySelector("#play-later-list");


function displayRecommendations() {

    const selectedGenre =
        recommendationGenre.value;

    moreResultsLink.href =
        `games.html?genre=${
            encodeURIComponent(selectedGenre)
        }&sort=rating`;

    const recommendedGames =
        window.nextPlayGames.filter((game) => {

            const hasGoodRating =
                game.rating >= 8.5;


            const genreMatches =
                selectedGenre === `all`
                || game.genre === selectedGenre;


            return hasGoodRating && genreMatches;

        }).sort(
            (gameA, gameB) =>
                gameB.rating - gameA.rating
        ).slice(0, 4);


    if (recommendedGames.length === 0) {

        recommendationList.innerHTML = `
            <p class="empty-message">
                No recommendations are available
                for this genre.
            </p>
        `;

        return;

    }


    recommendationList.innerHTML =
        recommendedGames.map((game) => {

            const platforms =
                game.platforms.join(` / `);


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

                        <h3>
                            ${game.title}
                        </h3>

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

                        <button
                            class="button primary-button
                            small-button recommendation-save"
                            type="button"
                            data-id="${game.id}"
                        >
                            Add to Play List
                        </button>

                    </div>

                </article>
            `;

        }).join(``);

}


function displayPlayLater() {

    const savedGames =
        window.NextPlayStorage.getPlayLater();


    if (savedGames.length === 0) {

        playLaterList.innerHTML = `
            <p class="empty-message">
                Your Play Later list is empty.
            </p>
        `;

        return;

    }


    playLaterList.innerHTML =
        savedGames.map((game) => {

            const platforms =
                Array.isArray(game.platforms)
                    ? game.platforms.join(` / `)
                    : game.platform;


            const image =
                game.image
                    ? game.image
                    : `images/logo.svg`;


            const rating =
                Number.isFinite(game.rating)
                    ? `
                        <p>
                            Rating:
                            ${game.rating} / 10
                        </p>
                    `
                    : ``;


            return `
                <article class="saved-game">

                    <img
                        src="${image}"
                        alt="${game.title}"
                        width="85"
                        height="65"
                        loading="lazy"
                    >

                    <div>

                        <h3>
                            ${game.title}
                        </h3>

                        <p>
                            ${game.genre}
                            |
                            ${platforms}
                        </p>

                        ${rating}

                    </div>

                    <button
                        class="button remove-button
                        remove-game-button"
                        type="button"
                        data-id="${game.id}"
                    >
                        Remove
                    </button>

                </article>
            `;

        }).join(``);

}


function showRecommendationMessage(message) {

    recommendationMessage.textContent =
        `${message}`;

}


recommendationGenre.addEventListener(
    "change",
    displayRecommendations
);


recommendationList.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".recommendation-save"
            );


        if (!button) {
            return;
        }


        const gameId =
            Number(button.dataset.id);


        const selectedGame =
            window.nextPlayGames.find(
                (game) =>
                    game.id === gameId
            );


        if (!selectedGame) {
            return;
        }


        const wasAdded =
            window.NextPlayStorage.addGame(
                selectedGame
            );


        if (wasAdded) {

            showRecommendationMessage(
                `${selectedGame.title} was added to your Play List.`
            );

        } else {

            showRecommendationMessage(
                `${selectedGame.title} is already saved.`
            );

        }


        displayPlayLater();

    }
);


playLaterForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const title =
            gameName.value.trim();

        const platform =
            gamePlatform.value;

        const genre =
            gameGenre.value;


        const savedGames =
            window.NextPlayStorage.getPlayLater();


        const alreadyExists =
            savedGames.some(
                (game) =>
                    game.title.toLowerCase()
                    === title.toLowerCase()
            );


        if (alreadyExists) {

            formMessage.textContent =
                `${title} is already in your Play Later list.`;

            return;

        }


        const customGame = {

            id: `custom-${Date.now()}`,

            title: `${title}`,

            genre: `${genre}`,

            platforms: [
                `${platform}`
            ],

            image: `images/logo.svg`,

            description:
                `Game added manually to the Play Later list.`

        };


        window.NextPlayStorage.addGame(
            customGame
        );


        formMessage.textContent =
            `${title} was added to your Play Later list.`;


        playLaterForm.reset();


        displayPlayLater();

    }
);


playLaterList.addEventListener(
    "click",
    (event) => {

        const removeButton =
            event.target.closest(
                ".remove-game-button"
            );


        if (!removeButton) {
            return;
        }


        const gameId =
            removeButton.dataset.id;


        window.NextPlayStorage.removeGame(
            gameId
        );


        displayPlayLater();


        formMessage.textContent =
            `The game was removed from your Play Later list.`;

    }
);


displayRecommendations();

displayPlayLater();