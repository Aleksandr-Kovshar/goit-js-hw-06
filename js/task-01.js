// 1) Находим категории document.querySelectorAll('.item') 
// 2) Законсолить количество категорий .length

// 3) Перебрать категории .forEach 
// 4) Законсолить названия категорий .textContent 
// 5) Законсолить количество  .length

const itemCategories=document.querySelectorAll('.item');
console.log('Number of categories:', itemCategories.length);

itemCategories.forEach(category=>{
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
})