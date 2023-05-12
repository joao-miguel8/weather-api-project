const searchButton = document.querySelector(".location-search").addEventListener("click", searchForLocation);

const searchInputEle = document.querySelector(".location-input");

function searchForLocation() {
    const apiKey = "xE/RhVYt/M7ZnjK7p2aHoQ==16REn2WYPkE0mDeb";
    const searchValue = searchInputEle.value;
    const url = `https://api.api-ninjas.com/v1/weather?city=${searchValue}`;
    fetch(url, {
        method: `GET`,
        headers: { "X-Api-Key": `${apiKey}` },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
