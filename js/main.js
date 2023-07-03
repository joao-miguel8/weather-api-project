const searchButtonEle = document.querySelector(".location-search");
const mainTemperatureEle = document.querySelector(".main-temp");

// Metric values:
const windSpeedValueEle = document.querySelector(".wind-speed-value");
const feelsLikeValueEle = document.querySelector(".feels-like-value");
const humidityValueEle = document.querySelector(".humidity-value");
const windDegreeValueEle = document.querySelector(".wind-degrees-value");

searchButtonEle.addEventListener("click", searchForLocation);

const searchInputEle = document.querySelector(".location-input");

function searchForLocation(e) {
    e.preventDefault();
    const apiKey = "xE/RhVYt/M7ZnjK7p2aHoQ==16REn2WYPkE0mDeb";
    const searchValue = searchInputEle.value;
    const url = `https://api.api-ninjas.com/v1/weather?city=${searchValue}`;
    fetch(url, {
        method: `GET`,
        headers: { "X-Api-Key": `${apiKey}` },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            mainTemperatureEle.textContent = data.temp;
            windSpeedValueEle.textContent = `${data.wind_speed}km`;
            feelsLikeValueEle.textContent = `${data.wind_speed}km`;
            humidityValueEle.textContent = `${data.humidity}km`;
            windDegreeValueEle.textContent = `${data.wind_speed}km`;
        })
        .catch((err) => console.log(err));
    searchInputEle.value = "";
}
