const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newElement = document.querySelector('ul#ingredients');

ingredients.forEach((ingredient)=>{
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  newElement.appendChild(li);
  return newElement;
})

