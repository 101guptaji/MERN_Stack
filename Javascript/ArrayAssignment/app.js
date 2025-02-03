/*
    Objective: Understand array methods, destructuring, and spread/rest operator in JavaScript.

    Requirements:
        Use map(), filter(), and reduce() methods to manipulate an array.
        Destructure an object into variables.
        Use spread operator to merge two arrays.
*/

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
let sum = numbers.reduce((total, num) => total+=num);
console.log("SUM= "+sum);


//Object Destructuring
const user = {
    name: "Himanshu",
    age: 24,
    gender: "male"
};

let{name, age} = user; 
console.log(`${name} is ${age} years old.`);


//Using spread operator to merge two arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); 