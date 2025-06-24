const numbers = [1, 2, 3, 4, 5];
const OddNum=numbers.filter((n)=>n%2!=0)
const EvenNum=numbers.filter((n)=>n%2==0)
console.log('Odd numbers are', OddNum);
console.log('Even numbers are',EvenNum)
