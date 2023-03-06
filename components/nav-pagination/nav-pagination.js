export function createPagination() {
  const newPagination = document.createElement("span");
  newPagination.classList.add("navigation__pagination");
  newPagination.textContent = "1/42";
  return newPagination;
}
