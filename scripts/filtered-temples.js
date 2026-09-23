const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
];

const templeSection = document.querySelector("#temples");

const getTempleYear = (temple) => {
  const match = temple.dedicated.match(/(\d{4})/);
  return match ? Number(match[1]) : 0;
};

const renderTemples = (items) => {
  if (!templeSection) return;

  templeSection.innerHTML = "";
  const formatArea = new Intl.NumberFormat("en-US");

  items.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    card.innerHTML = `
      <div class="temple-header">
        <h2>${temple.templeName}</h2>
        <div class="temple-meta">
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${formatArea.format(temple.area)} sq ft</p>
        </div>
      </div>
      <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy" width="400" height="250">
    `;

    templeSection.appendChild(card);
  });
};

const filterTemples = (filter) => {
  switch (filter) {
    case "Old":
      return temples.filter((temple) => getTempleYear(temple) < 1900);
    case "New":
      return temples.filter((temple) => getTempleYear(temple) > 2000);
    case "Large":
      return temples.filter((temple) => temple.area > 90000);
    case "Small":
      return temples.filter((temple) => temple.area < 10000);
    case "Home":
    default:
      return temples;
  }
};

renderTemples(temples);

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");
    const navLinks = document.querySelectorAll("#menu a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = link.textContent.trim();
            renderTemples(filterTemples(filter));

            if (menu && menu.classList.contains("open")) {
                menu.classList.remove("open");
            }

            if (menuButton) {
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            }
        });
    });

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            const isOpen = menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", String(!isOpen));
            menuButton.textContent = isOpen ? "☰" : "X";
            menu.classList.toggle("open", !isOpen);
        });
    }
});