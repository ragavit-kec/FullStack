const add=(a,b)=>{
    return a+b;
}
console.log(add(2,3)); 
const obj={
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
console.log(obj.name); 
console.log(obj.age); 
obj.greet(); 
const numbers=[1,2,3,4,5];
const oddNumbers=numbers.filter(num=>num%2!==0);
console.log(oddNumbers);
const total = numbers.reduce((sum,n)=>sum+n,0)
console.log(total);
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 5000 },
    { name: "Tablet", price: 6000 }
]
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);
//finding product greater than 5000
const expensiveProducts = products.filter(product => product.price > 5000);
console.log(expensiveProducts);
const user={name:'CR7',password:'1234'}
const {name, password} = user;
console.log(name); // CR7
console.log(password); // 1234
const numbersArray = [1, 2, 3, 4, 5];
const [first, second,third,fourth,fifth] = numbersArray;
console.log(first); // 1
console.log(second); // 2   
console.log(third);
console.log(fourth);
console.log(fifth); // 5
const arr1= [1,2,3]
const arr2= [4,5,6]
const copy = [arr1,arr2,7,8,9]
console.log(copy)
const copy_numbers = [...arr1,...arr2,7,8,9]
console.log(copy_numbers);
function add2(...arguments){
    return arguments;
}
function add3(...args){
    return args.reduce((sum, num) => sum + num, 0);
}
console.log(add2(1,2,3,4,5)); // [1, 2, 3, 4, 5]
function function1(){
    console.log("Call back function!");
}
function function2(name,callback){
    console.log(`Hello ${name}`);
    callback();
}
console.log(function2("CR7",function1));
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        data.map(post => {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
} 
fetchData();