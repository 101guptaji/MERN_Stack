// Write a JavaScript function that increments and logs a counter each time it's called.

function counter() {
    // Your code here
    let count = 0;

    return function (){
        count++;
        console.log(count);
    }
}

const incrementCounter = counter();

incrementCounter();

incrementCounter();