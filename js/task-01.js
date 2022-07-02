const categoriesEl = document.querySelector("#categories");
const numbersEl = document.querySelectorAll(".item");

console.log(`Number of categories:${numbersEl.length}`);

numbersEl.forEach((element) => {
    return console.log(`Category:${element.querySelector("h2").textContent}
    Elements:${element.querySelectorAll("li").length}`)
});