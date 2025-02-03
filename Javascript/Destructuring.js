const numbers = [2,3,4,5,6,7];
let num1 = numbers[0];
let num2 = numbers[1];
let num3 = numbers[2];

console.log(num1,num2, num3);

//Array Destructuring
let[num11, num22, num33] = numbers;
console.log(num11,num22, num33);

//assigning some selected value
let[even1, ,even2] = numbers; //1st and 3rd element
console.log(even1, even2);

// the rest operator (...) is used to capture and store any remaining elements or properties from an array or object into a single variable
let[ele1, ...rest] = numbers;
console.log(ele1, rest);

//Object Destructuring
const user = {
    name: "Himanshu",
    age: 24,
    gender: "male"
};

let{name, gender} = user; //variable name must be same as property name
console.log(name, gender);