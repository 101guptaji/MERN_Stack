const student={
    name: "Hanni",
    class: 7,
    marks: [10,45,25,50],
    isPassed: true
}


console.log(student.name); //Hanni

console.log(student); //{name: 'Hanni', class: 7, marks: Array(4), isPassed: true}

//updating a value
student.isPassed = false;
student["class"] = 5; 

//adding new property
student.subjects = ["hindi","Eng", "SST"];
student["RollNo"] = "Rj32";

for(let key in student){
    console.log(student[key]); 
    //Hanni
    //5
    //[10, 45, 25, 50]
    //false
    //['hindi', 'Eng', 'SST']
    //Rj32
}

/*
use the Object.defineProperty() static method to define or modify the properties of an object. 
Object.defineProperty() accepts three arguments: the object to act on, the property key to be created or modified, and an object containing the descriptor(s) associated with the property being created or modified.

By default, properties created using Object.defineProperty() aren't writable, enumerable, or configurable. 
However, any property you create either as part of the object literal or using dot or bracket notation is writable, enumerable, and configurable.
*/

console.log("\n---\n");
const myObj = {};
Object.defineProperty(
    myObj, "myProperty", {
        value: "Hello",
        writable: false
    }
);

console.log(myObj.myProperty); //Hello

myObj.myProperty = "Namste"; //when [[Writable]] has a false value, trying to set a new value for the associated property fails silently outside strict mode
console.log(myObj.myProperty); //Hello

/*
Object.create() creates a new object using an existing object as its prototype. 
This lets the new object inherit properties and methods from another user-defined object the same way that objects inherit properties from JavaScript's built-in Object prototype. 
When you invoke Object.create() with an object as an argument, it creates an empty object with the passed object as its prototype.
*/
console.log("\n---\n");
const newObj = Object.create(myObj);
console.log(newObj);

/*
Object.create can take a second argument specifying own properties for the newly-created object using a syntax 
similar to Object.defineProperty()— that is, an object mapping keys to a set of descriptor attributes:
*/
console.log("\n---\n");
const greet = Object.create(newObj, {
    fName: {
        value: "Himanshu",
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log(greet);
/*
In this example, the new object (greet) uses an object literal (newObj) as its prototype, which itself contains the inherited Object.prototype, resulting in a series of inherited prototypes called the prototype chain. 
Each object has a prototype, whether assigned or inherited, which has an assigned or inherited prototype of its own. 
This chain ends at a null prototype, which has no prototype of its own.
*/

// console.log("\n---\n");
// Object.setPrototypeOf(greet, null);
// console.log(greet);