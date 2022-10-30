const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    const AllCountriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = AllCountriesHTML.join(' ');

}

//! Option 1: destructure in parameter
const getCountryHTML = ({ name, flags, population, continents, area }) => {
    return `
    <div class="country"> 
      <h2>${name.common} </h2>
      <img src="${flags.png}">
      <p>Population:${population}</p>
      <p>Continents:${continents}</p>
      <p>Area:${area} KM</p>
    </div>
    `
}


//! original
/* const getCountryHTML = country => {
    return `
    <div class="country"> 
      <h2>${country.name.common} </h2>
      <img src="${country.flags.png}">
      <p>Population:${country.population}</p>
      <p>Continents:${country.continents}</p>
    </div>
    `
} */

loadCountries();