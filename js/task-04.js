const counterValue = document.querySelector("#value");

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

let couter = 0;
incrementEl.addEventListener("click", () => {
  couter++;
  counterValue.textContent = couter;
});
decrementEl.addEventListener("click", () => {
  couter--;
  counterValue.textContent = couter;
});
