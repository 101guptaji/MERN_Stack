let numbers = [1,2,3,4,5];

//map
let square = numbers.map((num)=>num*num);
console.log(square);

//filter
let even = numbers.filter((num) =>{
    return num%2 == 0;
});
console.log(even);

//reduce
let sum = numbers.reduce((total, num) => total+num, 0); //0 is the initial value of the total
console.log("SUM= "+sum);

//sorting in descending order
numbers.sort((a,b) => b-a);
console.log(numbers);

//foreach
numbers.forEach(element => {
    console.log(element*2);
});

//find
const firstOdd = numbers.find(num => num%2 == 1);
console.log("first Odd number = "+firstOdd);

//some
numbers.push(-2);
const isNeg = numbers.some(num=>num<0);
console.log("isNeg: "+isNeg);

//every
const allPositive = numbers.every(num => num>0);
console.log("allPositive: "+allPositive);

