const inputElement = document.getElementById('input');
const sortElement = document.getElementById('sort');
const electronicsButton = document.getElementById('electronics');
const jeweleryButton = document.getElementById('jewelery');
const mensClothButton = document.getElementById('mensCloth');
const womensClothButton = document.getElementById('womensCloth');
const grid = document.querySelector('main')

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        arrayToDiv(json);
    });

function arrayToDiv(array) {
    array.forEach(el => {
        const img = document.createElement('img');
        const div = document.createElement('div');
        const div2 = document.createElement('div')
        const product = document.createElement('h2');
        const price = document.createElement('p');
        const button = document.createElement('button');

        img.setAttribute('src', el.image);
        product.textContent = el.title;
        price.textContent = el.price
        button.textContent = 'Add to cart'

        grid.appendChild(div);
        div.appendChild(img);
        div.appendChild(product);
        div.appendChild(div2)
        div2.appendChild(price);
        div2.appendChild(button);
    });
}