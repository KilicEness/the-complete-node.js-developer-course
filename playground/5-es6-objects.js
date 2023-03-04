const name = 'Jack'
const age = 54

const user = {
    name,
    userAge: age,
    location: 'China'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 30,
    stock: 10,
    salePrice: undefined,
    rating: 8
}

/* const label = product.label
const stock = product.stock */

// const {label:productLabel, stock, rating = 7} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('Order', product)