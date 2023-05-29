function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  number: document.querySelector("#controls>input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};


const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
};

ref.btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(ref.number.value);
  boxes.append(...boxesToAdd);
});
ref.btnDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
