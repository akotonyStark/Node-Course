const name = "Augustine"
const userAge = 27

// const user = {
//     name: name,
//     age: userAge,
//     location: 'Accra'
// }

//if the properties have the same name, it could be written like this
const user = {
    name,
    age: userAge,
    location: 'Accra'
}

console.log(user)


//object destructuring
const productA = {
    label: 'Icecream',
    price: 5,
    stock: 250,
    salePrice: undefined
}

//const label = product.label
//const stock = product.stock

//the properties above can be rewritten like this
//const { label, stock, rating } = product

/* the properties can also be renamed like this */
//const { label: productLabel, stock, rating } = product

/* the properties can also be  given defaul values like shown below for rating */
// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)


// const transaction = (type, myProduct) => {
//     const { label, stock } = myProduct
//     console.log(type, label, stock)
// }

const product = {
        label: 'Icecream',
        price: 5,
        stock: 250,
        salePrice: undefined
    }
    //transaction function could also be rewritten as
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product)