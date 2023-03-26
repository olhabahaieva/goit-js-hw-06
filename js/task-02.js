const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newElement = document.querySelector('ul#ingredients');

const listItems = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
})

newElement.append(...listItems);


