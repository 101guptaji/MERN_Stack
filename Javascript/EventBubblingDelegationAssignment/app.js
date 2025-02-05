/* Objective: Understand event bubbling, event delegation, and this keyword in JavaScript.

    Requirements:
        Explain event bubbling with an example.
        Implement event delegation to handle events on multiple elements.
        Use this keyword to access the context of a function.
*/

// Event bubbling example
let div = document.querySelector("#bubbling");
div.addEventListener('click', () => {
    console.log("Div clicked");
});

let span = document.querySelector("span");
span.addEventListener('click', (e) => {
    console.log("Span clicked"); //Event bubbling
});

let button = document.querySelector("button");
button.addEventListener('click', (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // to stop event bubbling
});



// Event delegation
let divTag = document.querySelector("#delegation");

divTag.addEventListener('click', (event) => {
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.id + " clicked");

    }
})



// this keyword example
function Person(name) {
    this.name = name;
}

const person = new Person("Hanni");

console.log(person.name); // Hanni