import { data } from "./data.js";

const countriesList = document.getElementById("countries-list");
const searchValue = document.getElementById("search-value");
const ul = document.createElement("ul");
countriesList.appendChild(ul);

searchValue.onkeyup = function (e) {
 let listItems = data.filter((country) => country.name.toLowerCase().includes(searchValue.value)).map((item) => item)
  const item = listItems.map((country) => `<div class="child"><img src=${country.image} />  <p>${country.name}</p></div>`).join("");
  ul.innerHTML = item
};

const listItems = data.map((country) => `<div class="child"><img src=${country.image} /> <p>${country.name}</p></div>`).join("");

ul.innerHTML = listItems;
