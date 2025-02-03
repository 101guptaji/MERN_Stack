//Spread operator on array
const fruits = ["Apple", "Mango", "Orange"];

const fruitsAndVeg = [...fruits, "Potato", "Onion"]; //copy and add all elements of fruits
console.log(fruits);
console.log(fruitsAndVeg);

//combining 2 arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4]

//Spread operator on object
let user = {
    name: "Himanshu",
    age: 25
};

let newUser = {
    ...user,
    email: "abc@gmail.com"
}

console.log(user);
console.log(newUser);

//combining 2 objects
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = {...obj1, ...obj2};
console.log(combinedObj);  // {a: 1, b: 2, c: 3, d: 4}


//Rest operator on function
function add(...input){
    return input.reduce((sum,num) => sum += num); //sum = sum of all elements of input array
}

console.log(add(2));
console.log(add(2, 4));
console.log(add(2, 4, 6));
console.log(add(2,4,6,-1));