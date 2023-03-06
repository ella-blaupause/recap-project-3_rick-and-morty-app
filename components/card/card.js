export function createCharacterCard(input) {
  const image = input.image;
  const name = input.name;
  const status = input.status;
  const type = input.type;
  const occurrences = input.episode.length;
  const card = document.createElement("li");

  card.classList.add("card");
  card.innerHTML = `  <div class="card__image-container">
    <img
      class="card__image"
      src="${image}"
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${occurrences}</dd>
    </dl>
  </div>`;
  return card;
}
