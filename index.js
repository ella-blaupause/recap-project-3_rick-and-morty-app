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

//fetching data
async function fetchCharacter() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
      console.error("failed to fetch data from API");
      return;
    }

    const data = await response.json();
    const characters = data.results;
    cardContainer.innerHTML = "";

    characters.forEach((character) => {
      const createCard = createCharacterCard(character);
      console.log(character);
      cardContainer.append(createCard);
    });
  } catch (error) {
    console.error("error");
  }
}
fetchCharacter();

//states
const maxPage = 1;
const page = 1;
const searchQuery = "";
