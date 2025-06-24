//using an array of objects to represent products
const products=[
    {name:'Apple', price:5000, quantity:2},
    {name:'Banana', price:2000, quantity:5},
    {name:'Orange', price:8000, quantity:3}
]
console.log(products);

// Using map to create an array of product names
const productNames = products.map(product => product.name);
console.log(productNames); // Output: ['Apple', 'Banana', 'Orange']

//Using reduce to calculate the total price of all products
const TotalPrice=products.reduce((sum,n)=>sum+n.price,0);
console.log(TotalPrice); // Output: 230

// Using filter to find products with a price greater than 3000
const expensiveProducts = products.filter(product => product.price > 3000);
console.log(expensiveProducts); // Output: [{name:'Apple', price:5000, quantity:2}, {name:'Orange', price:8000, quantity:3}]