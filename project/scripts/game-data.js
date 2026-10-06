const nextPlayGames = [

    {
        id: 1,
        title: `Minecraft`,
        genre: `Adventure`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 9,
        image: `images/minecraft.webp`,
        description:
            `Build, explore, and survive in a creative open world.`
    },

    {
        id: 2,
        title: `Forza Horizon 5`,
        genre: `Racing`,
        platforms: [
            `PC`,
            `Xbox`
        ],
        rating: 9,
        image: `images/forza-horizon-5.webp`,
        description:
            `Explore a huge open world filled with cars and racing events.`
    },

    {
        id: 3,
        title: `Rocket League`,
        genre: `Sports`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 8.5,
        image: `images/rocket-league.webp`,
        description:
            `Play competitive soccer using fast rocket-powered vehicles.`
    },

    {
        id: 4,
        title: `Stardew Valley`,
        genre: `Simulation`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 9,
        image: `images/stardew-valley.webp`,
        description:
            `Build a farm, meet villagers, explore caves, and relax.`
    },

    {
        id: 5,
        title: `Hollow Knight`,
        genre: `Action`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 9,
        image: `images/hollow-knight.webp`,
        description:
            `Explore a mysterious underground world filled with challenges.`
    },

    {
        id: 6,
        title: `Mario Kart 8 Deluxe`,
        genre: `Racing`,
        platforms: [
            `Nintendo`
        ],
        rating: 9,
        image: `images/mario-kart-8.webp`,
        description:
            `Race with famous Nintendo characters across colorful tracks.`
    },

    {
        id: 7,
        title: `The Legend of Zelda: Tears of the Kingdom`,
        genre: `Adventure`,
        platforms: [
            `Nintendo`
        ],
        rating: 9.5,
        image: `images/zelda-totk.webp`,
        description:
            `Explore Hyrule while solving puzzles and discovering new abilities.`
    },

    {
        id: 8,
        title: `Baldur's Gate 3`,
        genre: `RPG`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 9.5,
        image: `images/baldurs-gate-3.webp`,
        description:
            `Create a character and experience a story shaped by your decisions.`
    },

    {
        id: 9,
        title: `Fortnite`,
        genre: `Action`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 8,
        image: `images/fortnite.webp`,
        description:
            `Compete with other players in fast online multiplayer matches.`
    },

    /* =========================
       ACTION / ADVENTURE
    ========================= */

    {
        id: 10,
        title: `Marvel's Spider-Man Remastered`,
        genre: `Action`,
        platforms: [
            `PC`,
            `PlayStation`
        ],
        rating: 9,
        image: `images/spider-man-remastered.webp`,
        description:
            `Swing across New York City and fight crime as Spider-Man.`
    },

    {
        id: 11,
        title: `Marvel's Spider-Man: Miles Morales`,
        genre: `Action`,
        platforms: [
            `PC`,
            `PlayStation`
        ],
        rating: 8.8,
        image: `images/spider-man-miles-morales.webp`,
        description:
            `Experience a new Spider-Man story with unique powers and abilities.`
    },

    {
        id: 12,
        title: `Marvel's Spider-Man 2`,
        genre: `Action`,
        platforms: [
            `PC`,
            `PlayStation`
        ],
        rating: 9,
        image: `images/spider-man-2.webp`,
        description:
            `Play as Peter Parker and Miles Morales in a larger Spider-Man adventure.`
    },

    {
        id: 13,
        title: `Gears of War: E-Day`,
        genre: `Action`,
        platforms: [
            `PC`,
            `Xbox`
        ],
        rating: 8.8,
        image: `images/gears-e-day.webp`,
        description:
            `Fight for survival during the early days of the Locust invasion.`
    },

    {
        id: 14,
        title: `The Last of Us Part I`,
        genre: `Adventure`,
        platforms: [
            `PC`,
            `PlayStation`
        ],
        rating: 9.5,
        image: `images/the-last-of-us-part-1.webp`,
        description:
            `Travel across a dangerous post-apocalyptic world with Joel and Ellie.`
    },

    {
        id: 15,
        title: `The Last of Us Part II`,
        genre: `Adventure`,
        platforms: [
            `PC`,
            `PlayStation`
        ],
        rating: 9,
        image: `images/the-last-of-us-part-2.webp`,
        description:
            `Continue Ellie's story in an intense action-adventure experience.`
    },

    {
        id: 16,
        title: `God of War Ragnarök`,
        genre: `Action`,
        platforms: [
            `PC`,
            `PlayStation`
        ],
        rating: 9.5,
        image: `images/god-of-war-ragnarok.webp`,
        description:
            `Join Kratos and Atreus on a dangerous journey through the Nine Realms.`
    },

    {
        id: 17,
        title: `Red Dead Redemption 2`,
        genre: `Adventure`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 9.5,
        image: `images/red-dead-redemption-2.webp`,
        description:
            `Explore a detailed open world as outlaw Arthur Morgan.`
    },

    /* =========================
       SIMULATION
    ========================= */

    {
        id: 18,
        title: `Taxi Life: A City Driving Simulator`,
        genre: `Simulation`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 7.5,
        image: `images/taxi-life.webp`,
        description:
            `Drive passengers around a detailed city while managing your taxi business.`
    },

    {
        id: 19,
        title: `Construction Simulator`,
        genre: `Simulation`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 8,
        image: `images/construction-simulator.webp`,
        description:
            `Operate construction machines and complete building projects.`
    },

    {
        id: 20,
        title: `The Bus`,
        genre: `Simulation`,
        platforms: [
            `PC`
        ],
        rating: 8,
        image: `images/the-bus.webp`,
        description:
            `Drive realistic city bus routes through a detailed urban environment.`
    },

    {
        id: 21,
        title: `Euro Truck Simulator 2`,
        genre: `Simulation`,
        platforms: [
            `PC`
        ],
        rating: 9,
        image: `images/euro-truck-simulator-2.webp`,
        description:
            `Drive trucks across Europe while building your transportation company.`
    },

    {
        id: 22,
        title: `American Truck Simulator`,
        genre: `Simulation`,
        platforms: [
            `PC`
        ],
        rating: 8.8,
        image: `images/american-truck-simulator.webp`,
        description:
            `Travel across American highways while managing a trucking business.`
    },

    {
        id: 23,
        title: `Farming Simulator 25`,
        genre: `Simulation`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 8.5,
        image: `images/farming-simulator-25.webp`,
        description:
            `Manage crops, animals, equipment, and your own modern farm.`
    },

    {
        id: 24,
        title: `Microsoft Flight Simulator`,
        genre: `Simulation`,
        platforms: [
            `PC`,
            `Xbox`
        ],
        rating: 9,
        image: `images/microsoft-flight-simulator.webp`,
        description:
            `Fly detailed aircraft around a realistic recreation of the world.`
    },

    {
        id: 25,
        title: `Cities: Skylines`,
        genre: `Simulation`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 8.5,
        image: `images/cities-skylines.webp`,
        description:
            `Design, build, and manage your own growing city.`
    },

    /* =========================
       SPORTS
    ========================= */

    {
        id: 26,
        title: `EA Sports FC 26`,
        genre: `Sports`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 8,
        image: `images/ea-sports-fc-26.webp`,
        description:
            `Build your team and compete in soccer matches across multiple game modes.`
    },

    {
        id: 27,
        title: `NBA 2K26`,
        genre: `Sports`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 8,
        image: `images/nba-2k26.webp`,
        description:
            `Play professional basketball with teams, players, and multiple game modes.`
    },

    {
        id: 28,
        title: `Madden NFL 26`,
        genre: `Sports`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 7.8,
        image: `images/madden-nfl-26.webp`,
        description:
            `Experience professional football with teams, seasons, and competitive modes.`
    },

    {
        id: 29,
        title: `MLB The Show 26`,
        genre: `Sports`,
        platforms: [
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 8,
        image: `images/mlb-the-show-26.webp`,
        description:
            `Play baseball using professional teams, stadiums, and game modes.`
    },

    {
        id: 30,
        title: `WWE 2K26`,
        genre: `Sports`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 8,
        image: `images/wwe-2k26.webp`,
        description:
            `Compete in professional wrestling matches using WWE superstars.`
    },

    {
        id: 31,
        title: `Tony Hawk's Pro Skater 3 + 4`,
        genre: `Sports`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`,
            `Nintendo`
        ],
        rating: 8.5,
        image: `images/tony-hawk-pro-skater.webp`,
        description:
            `Perform skateboard tricks and complete challenges across classic skate parks.`
    },

    /* =========================
       MORE RACING
    ========================= */

    {
        id: 32,
        title: `Gran Turismo 7`,
        genre: `Racing`,
        platforms: [
            `PlayStation`
        ],
        rating: 9,
        image: `images/gran-turismo-7.webp`,
        description:
            `Race and collect detailed vehicles across realistic tracks.`
    },

    {
        id: 33,
        title: `Need for Speed Unbound`,
        genre: `Racing`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 8,
        image: `images/need-for-speed-unbound.webp`,
        description:
            `Race through city streets while customizing cars and escaping the police.`
    },

    {
        id: 34,
        title: `F1 25`,
        genre: `Racing`,
        platforms: [
            `PC`,
            `Xbox`,
            `PlayStation`
        ],
        rating: 8.5,
        image: `images/f1-25.webp`,
        description:
            `Race Formula 1 cars across official circuits and championship events.`
    }

];


window.nextPlayGames = nextPlayGames;