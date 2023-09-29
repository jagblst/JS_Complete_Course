'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} millions of people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

function whereAmI() {
  getPosition()
  .then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  })
  .then(res => {
    if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
    return res.json();
  })
  .then(data => {console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);
    return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
  })
  .then(res => {
    if (!res.ok) throw new Error(`Country not found (${res.status})`);
    return res.json();
  })
  .then(data => {console.log(data[0]);
    renderCountry(data[0]);
  })
  .catch(err => console.error(err.message));
};

btn.addEventListener('click', whereAmI);

