const array1=[1,2,3,6,7]
const array2=[4,5,6]
const [first,second,third,...spread]=array1
const array3=[...array1, ...array2]
console.log(array3) // Output: [1, 2, 3, 4, 5, 6]
console.log(spread)