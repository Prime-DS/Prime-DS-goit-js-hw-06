const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector("#ingredients");

const addliEl = ingredients.map(item => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = item;
  return li;
});
listIngridients.append(...addliEl);

//                version № 2 
// const creatList = (ingredients) => {
//   return ingredients.reduce((acc, item) => acc + `<li class ="item ">${item}</li>`, "")
// };
//   const list = document.querySelector("ul");
// list.insertAdjacentHTML("beforeend", creatList(ingredients));
  


