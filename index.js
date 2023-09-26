"use strict";
const products = [
    {name: "book", price: 10 },
    {name: "pen", price: 2},
    {name: "notebook", price: 5 },
]
function addTax (array) {
    return array.map( product => ({...product, priceWithTax: product.price + (product.price * .1)}) );
}

addTax (products)