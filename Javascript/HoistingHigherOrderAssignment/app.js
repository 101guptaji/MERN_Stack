/*
    Objective: Understand hoisting, higher order functions, and closures in JavaScript.

    Requirements:
        Explain hoisting with an example.
        Write a higher order function that takes a callback function as an argument.
        Create a closure that returns a function with access to its own scope.
*/

//Hoisting example
x = 5; 
console.log(x); //calling the variable before the declaration

var x; // variable hoisting



// Higher order function example
function goodbye(){
    console.log("Goodbye👋");
}

function namste(){
    console.log("Namste🙏");
}

//functtion as argument
function greet(name, action){
    console.log("Hello, "+name);
    action();
    
}

greet("Himanshu", namste);

greet("Rahul", goodbye);


//closure example
function myCounter() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    };
  }
  
const add = myCounter();
console.log(add());
console.log(add());
console.log(add());