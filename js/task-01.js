const categorisEl = document.querySelector(".categories");
const itamsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itamsEl.length}`);
// console.log(itamsEl);

itamsEl.forEach((item) => {
  const titleEl = item.querySelector("h2").textContent;
  const itemCountEL = item.querySelectorAll("li").length;
    console.log(`
Категорія: ${titleEl}`);
  console.log(`Кількість елементів: ${itemCountEL}`);
});
