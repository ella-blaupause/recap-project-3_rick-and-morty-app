export function createButton(textContent) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = `${textContent}`;
  return button;
}
