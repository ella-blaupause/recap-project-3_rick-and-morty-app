import { createCharacterCard } from "./components/card/card.js";
import createPagination from "./components/nav-pagination/nav-pagination.js";
import { createButton } from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = createButton("Prev");
const nextButton = createButton("Next");
// const pagination = document.querySelector('[data-js="pagination"]');
const pagination = createPagination();

//states
const maxPage = 42;
let page = 1;
let searchQuery = "";

//Buttons
nextButton.addEventListener("click", () => {
  if (page <= maxPage - 1) {
    page++;
    pagination.textContent = `${page}/42`;
    fetchCharacter();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    pagination.textContent = `${page}/42`;
    fetchCharacter();
  }
});

// The Search Bar
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  fetchCharacter();
});

//fetching data
async function fetchCharacter() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );

    if (!response.ok) {
      console.error("failed to fetch data from API");
      return;
    }

    const data = await response.json();
    const characters = data.results;
    cardContainer.innerHTML = "";

    characters.forEach((character) => {
      const createCard = createCharacterCard(character);
      cardContainer.append(createCard);
    });
  } catch (error) {
    console.error("error");
  }
}
fetchCharacter();

navigation.append(prevButton, pagination, nextButton);
