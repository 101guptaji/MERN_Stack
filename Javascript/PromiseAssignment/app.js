// Write JavaScript code that resolves a promise with 'Hello, ', then appends 'World!' and logs the message.

const promise = Promise.resolve('Hello, ');

// Your code here
promise.then((msg)=> console.log(msg+'World!'))
