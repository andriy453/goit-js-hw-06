const textEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

inputEl.addEventListener(
  "input",
  ({ currentTarget }) => (textEl.style.fontSize = `${currentTarget.value}px`)
);
