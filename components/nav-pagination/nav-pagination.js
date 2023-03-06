export default function createPagination() {
  const newPagination = document.createElement("span");
  newPagination.classList.add("navigation__pagination");
  newPagination.textContent = "1/42";
  return newPagination;
}

// card.classList.add("card");
/* 
   <button class="button button--prev" data-js="button-prev">
        previous
      </button>
      <button class="button button--next" data-js="button-next">next</button>
*/
