// HAMBURGER MENU TOGGLE
const hamburgerBtn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburgerBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// FOOTER DATE
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// TEMPLE DATA
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
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
  {
    templeName: "Quetzaltenango Guatemala Temple",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2011, December, 11",
    area: 21200,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/400x250/quetzaltenango-guatemala-temple-art-lds-640706-wallpaper.jpg"
  },
  {
    templeName: "Santiago Chile Temple",
    location: "Santiago, Chile",
    dedicated: "1983, September, 16",
    area: 20831,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/400x250/santiago-chile-lds-temple-1085562-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza Brazil Temple",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/2-Fortaleza-Temple-Photo-2219774.jpg"
  },
  {
    templeName: "Barranquilla Colombia Temple",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "Anchorage, Alaska",
    dedicated: "1999, February, 2004",
    area: 11937,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x250/anchorage-temple-lds-253274-wallpaper.jpg"
  },
];

// FUNCTION TO CREATE TEMPLE CARD
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <strong>${temple.templeName}</strong><br>
    Location: ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Area: ${temple.area.toLocaleString()} sq ft
  `;

  figure.appendChild(img);
  figure.appendChild(caption);

  return figure;
}

// FUNCTION TO DISPLAY TEMPLES
function displayTemples(filteredTemples) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = ""; // clear existing
  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    gallery.appendChild(card);
  });
}

// FILTER FUNCTIONS
function filterTemples(criteria) {
  let filtered = [];

  switch (criteria) {
    case "Old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "New":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "Large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "Small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  document.querySelector("main h2").textContent = criteria;
  displayTemples(filtered);
}

// SETUP NAVIGATION CLICK EVENTS
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    filterTemples(link.textContent.trim());
  });
});

// INITIAL DISPLAY
displayTemples(temples);
