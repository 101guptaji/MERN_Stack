let block
{
    let myName = "Jones";

    closure = ()=>{
        return myName;
    }
}

// console.log(myName); //ReferenceError
console.log(closure());


// function counter
function myCounter() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    };
  }
  
const add = myCounter();
// console.log(counter); //error

// console.log(add());
// console.log(add());
// console.log(add());

function myFunction(){
    document.getElementById("demo").innerHTML = add();
  }