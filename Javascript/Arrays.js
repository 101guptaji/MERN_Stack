// const numbers = [1,2,3];
// console.log(numbers);

// const names = [];
// console.log(names);

// names[0] = "hanni";
// console.log(names);

// names[1] = "veer";
// console.log(names);

const mixed = ["hanni", 12, true];
console.log(mixed);

mixed.push("gupta"); //add at last
console.log(mixed[mixed.length-1]);

const last = mixed.pop(); //return and remove last element
console.log(last);
console.log(mixed[mixed.length-1]);

console.log(mixed[0]);
mixed.unshift("start"); //add at index 0 by shifting 0th value to 1st and so on
console.log(mixed[0]);


const first = mixed.shift(); //return and remove first element
console.log(first+" "+mixed.length);

console.log(mixed.join("-> "));
mixed.sort();
console.log(mixed.join("-> "));

const num = new Array(1,2,3,4,5);
console.log(num.slice(1,3)); //returns a shallow copy of a portion of an array from start index to end index(excluding)

num.splice(1,2,10); //removing 2 elements from index 1, and adding element 10. 
console.log("Update at index 1: "+num);

const merged = mixed.concat(num);
for(let x of merged){
    console.log(x);
}


console.log(merged.includes("hanni"));