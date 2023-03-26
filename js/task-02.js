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

newElement.innerHTML = "";
listItems.forEach(li => newElement.innerHTML += li.outerHTML)


//Previous bad solution, because it's wrong to use apend inside of the cycle
// ingredients.forEach((ingredient)=>{
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredient;
//   newElement.appendChild(li);
//   return newElement;
// })

