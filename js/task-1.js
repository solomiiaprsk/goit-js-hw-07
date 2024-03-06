const categoryItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
     console.log(`Category: ${categoryTitle}`);
    const categoryElements = categoryItem.querySelectorAll('ul > li');
    console.log(`Elements: ${categoryElements.length}`);
});
