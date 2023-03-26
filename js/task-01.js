const categoryAmount = document.querySelectorAll('#categories li.item');
const count = categoryAmount.length;

console.log(`Number of categories: ${count}`)

categoryAmount.forEach((category)=>{
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
   
})


