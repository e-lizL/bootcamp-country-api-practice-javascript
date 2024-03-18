const countries = [
  {
    name: "England",
    capital: "London",
    population: 69000,
  },

  {
    name: "Latvia",
    capital: "Riga",
    population: 15000,
  },

  {
    name: "Finland",
    capital: "Helsinki",
    population: 10000,
  },
];

const container = document.getElementById("container");

//get one country name
container.innerHTML = `<h1>${countries[1].name}</h1>`;

//set up country cards
const countryCards = (item) => {
  return `<div class="country-card">
    <h2>${item.name}</h2>
    <p>${item.capital}</p>
    <p>${item.population}</p>
  </div>`;
};

container.innerHTML = countries.map(countryCards).join("");
