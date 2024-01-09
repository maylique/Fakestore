const inputElement = document.getElementById('input');
const sortElement = document.getElementById('sort');
const grid = document.querySelector('main')
const buttonDiv = document.querySelector('#buttonDiv')
let i = 0 // für callback funktion

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        arrayToDiv(json); // fetch und die funktion zum abbilden der elemente
    })
    .catch((error) => console.log(error))


fetch('https://fakestoreapi.com/products/categories')
.then(res => res.json())
.then(json => {
    json.forEach(el => {
        i++
        const button = document.createElement('button')
        buttonDiv.appendChild(button)
        button.textContent = el
        button.setAttribute('id', 'btn'+i) // erstellen der buttons nach kategorien

        button.addEventListener('click', function() {
            fetch(`https://fakestoreapi.com/products/category/${el}`)
            .then(res=>res.json())
            .then(json=>filter(json)) // den buttons die filter funktion über die api übergeben
        })})
})

// kombiniert reset und die funktion zum abbilden der elemente
const filter = (x) => {
    reset()
    arrayToDiv(x)
}

// funktion zum abbilden der elemente
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
        price.textContent = el.price + ' €'
        button.textContent = 'Add to cart'

        grid.appendChild(div);
        div.appendChild(img);
        div.appendChild(product);
        div.appendChild(div2)
        div2.appendChild(price);
        div2.appendChild(button);
    });
}

// einfache reset funktion
const reset = () => {
    grid.innerHTML = ''
}
