import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

//dynamitc created
const createCard = createCharacterCard();
cardContainer.append(createCard);

//fetching data
async function fetchCharacter() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data);
  return data;
}

fetchCharacter();

//states
const maxPage = 1;
const page = 1;
const searchQuery = "";
