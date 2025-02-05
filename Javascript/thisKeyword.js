// Alone, this refers to the global object.
console.log(this); //Window object



// In a function, this refers to the global object.
function test(){
    console.log(this); //Window object
}

test();



// Implicit Function Binding
// In an object method, this refers to the object.
const book = {
    name: "Wings of Fire",
    author: "Dr. APJ Abdul Kalaam",
    description: function(){
        console.log(this); // book object
        console.log(`The author of the book '${this.name}' is '${this.author}'`);
    }
}

book.description(); // The author of the book 'Wings of Fire' is 'Dr. APJ Abdul Kalaam'

//with arrow function, it will not work
const book2 = {
    name: "Wings of Fire",
    author: "Dr. APJ Abdul Kalaam",
    description: () => {
        console.log(`The author of the book '${this.name}' is '${this.author}'`);
    }
}

book2.description(); //The author of the book '' is 'undefined'



// Explicit Function Binding
const rahul={
    fName: 'Rahul Sharma',
    age: 25
}

const sonu={
    fName: 'Sonu Gupta',
    age: 32
}

function about(gender, city){
    console.log(`${this.fName} is ${this.age} years old ${gender} and lives in ${city}.`);
}

//bind method
const aboutRahul = about.bind(rahul, 'male', 'Jaipur');
aboutRahul();
const aboutSonu = about.bind(sonu, 'female', 'Bhopal');
aboutSonu();

//call method
about.call(rahul, 'male', 'Udaipur');
about.call(sonu, 'female', 'Varansi');

//apply method
about.apply(rahul, ['male', 'Apply1']);
about.apply(sonu, ['female', 'Apply2']);

