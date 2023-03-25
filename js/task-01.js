const categoryAmount = document.querySelectorAll('#categories li.item');
const count = categoryAmount.length;

console.log(`Number of categories: ${count}`)

categoryAmount.forEach((category)=>{
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
   
})



// Console Result should show this:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5