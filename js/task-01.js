
const itemCategoriAll = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategoriAll.length}`)

for (let i = 0; i < itemCategoriAll.length; i++) {
    console.log(`Category: ${itemCategoriAll[i].children[0].innerText}`)
    console.log(`Elements: ${itemCategoriAll[i].children[1].children.length}`)
}