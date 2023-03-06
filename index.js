import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createCharacterCard } from "./components/card/card.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createButton } from "./components/nav-button/nav-button.js";

const navigation = document.querySelector('[data-js="navigation"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = createSearchBar();
const prevButton = createButton("Prev");
const nextButton = createButton("Next");
const pagination = createPagination();

//states
let maxPage = 42;
let page = 1;
let searchQuery = "";

// The Search Bar
searchBar.addEventListener("submit", (onSubmit) => {
  onSubmit.preventDefault();
  searchQuery = onSubmit.target.elements.query.value;
  page = 1;
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
    maxPage = data.info.pages;
    pagination.textContent = `${page} / ${maxPage}`;
    characters.forEach((character) => {
      const createCard = createCharacterCard(character);
      cardContainer.append(createCard);
    });
  } catch (error) {
    console.error("error");
  }
}
fetchCharacter();

//Buttons
nextButton.addEventListener("click", () => {
  if (page <= maxPage - 1) {
    page++;
    fetchCharacter();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacter();
  }
});

searchBarContainer.append(searchBar);
navigation.append(prevButton, pagination, nextButton);

// pagination.textContent = `${page} / ${maxPage}`;
