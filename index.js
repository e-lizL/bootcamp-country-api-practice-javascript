const container = document.getElementById("container");
const url = "https://restcountries.com/v3.1/subregion/Northern Europe";

const createCountryCard = (item) => {
  return `
<div class="country-card">
  <h3>${item.name.common}</h3>
  <p>Capital: ${item.capital}</p>
  <p>Population: ${item.population}</p>
</div>`;
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    container.innerHTML = data.map(createCountryCard).join("");
  })
  .catch((error) => console.log("error", error));
