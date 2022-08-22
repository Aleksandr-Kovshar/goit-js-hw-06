const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// 1) Найти элемент (список) document.querySelectorAll();
// 2) Создать массив инградиентов document.createElement() перебрав масив ingredients методом map.
// 3) добавить класс item  .classList.add
// 4) Добавить текстовый контент .textContent
// 4) вставить все li в ul


const ingredientList = document.querySelector('#ingredients');
const itemIngredients=ingredients.map(ingredient=>{
  const element= document.createElement('li');
  element.classList.add('item');
  element.textContent=ingredient;
  return element;}
);

ingredientList.append(...itemIngredients);