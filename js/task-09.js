function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector(".color");
const butoonEl = document.querySelector(".change-color");

butoonEl.addEventListener(
  "click",
  e => {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    spanEl.textContent = color;
  });

