/*
    In JavaScript, OOP is implemented using prototypical inheritance and class syntax.
    It focuses on:
        Encapsulation: Bundling data (properties) and behavior (methods) into objects.
        Inheritance: Reusing code by inheriting properties and methods from other objects or classes.
        Polymorphism: Overriding methods to perform different tasks.
        Abstraction: Hiding implementation details and exposing only essential features.

    1. Objects: Objects are the building blocks of OOP. They contain properties and methods.
*/

//Creating Objects
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.greet(); //Hello, my name is John

//Using a Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = new Person("Foster", 25);
person1.greet();  //Hello, my name is Foster


/*
    2. Inheritance = Inheritance allows one object or class to acquire the properties and methods of another.
     In JavaScript, this can be achieved through prototypical inheritance or class-based inheritance.
*/
/*
    2.1 Prototypical Inheritance: 
        In JavaScript, every object has an internal property [[Prototype]], accessible through __proto__ or Object.getPrototypeOf. 
        Objects inherit properties and methods from their prototype.
*/
{
    //Example Using Object.create()
    const animal = {
        speak(){
            console.log("This animal makes a sound.");
        }
    }

    const dog = Object.create(animal); //creating a object with "animal" as prototype or parent
    dog.speak(); //This animal makes a sound.

    dog.speak = function(){
        console.log("The dog barks: Bho Bho!");
    }

    dog.speak(); //The dog barks: Bho Bho!
    console.log(Object.getPrototypeOf(dog) === animal); //true


    //Example Using __proto__
    const cat = {
        __proto__: animal,
        speak(){
            // super.speak();
            console.log("The cat cry: Mheow Mheow!");
        }
    }
    cat.speak(); //The cat cry: Mheow Mheow!
    console.log(cat.__proto__ === animal); //true

    /*
        2.2. Classical Inheritance:
            Although JavaScript does not have classical inheritance like other OOP languages, the class syntax simulates it by leveraging prototypes under the hood.
    */

    //Inheritance using Class
    class Animal{
        constructor(name){
            this.name = name;
        }

        speak(){
            console.log(`This ${this.name} makes a sound.`);
        }
    }

    class Dog extends Animal{
        constructor(name, breed){
            super(name);
            this.breed = breed;
        }

        speak(){
            console.log(`${this.name} barks: Bho Bho!`);
        }
    }

    const dog1 = new Dog("Sheru", "German Shepard");
    console.log(dog1.breed); //German Shepard
    dog1.speak(); //Sheru barks: Bho Bho!
    console.log(dog1); //Dog {name: 'Sheru', breed: 'German Shepard'}

    //class internally use prototypes to establish inheritance.
    console.log(Object.getPrototypeOf(Dog) === Animal); //true
    console.log(dog1.__proto__.__proto__ === Animal.prototype); //true
}


/*
    3. Encapsulation: Encapsulation ensures that an object's internal state is protected and can only be accessed or modified through defined methods.
*/
{
    class BankAccount{
        #balance //private field 

        constructor(balance){
            this.#balance = balance;
        }

        deposit(amount){
            this.#balance += amount;
        }

        getBalance(){
            return this.#balance;
        }
    }

    const acc1 = new BankAccount(1000);
    console.log(acc1.getBalance()); //1000
    
    acc1.deposit(500);
    console.log(acc1.getBalance()); //1500
}


/*
    4. Polymorphism: Polymorphism allows objects or classes to define methods that behave differently depending on the context.
*/
{
    class Animal{
        speak(){
            console.log(`The animal makes a sound.`);
        }
    }

    class Dog extends Animal{
        speak(){
            console.log(`Dog barks: Bho Bho!`);
        }
    }
    
    class Cat extends Animal{
        speak(){
            console.log(`The cat meow!`);
        }
    }

    const animals = [new Animal, new Dog, new Cat];
    animals.forEach((animal)=>animal.speak());
}


/*
    5. Abstraction: Abstraction hides complex implementation details and exposes only the necessary features.
*/
{
    class Shape { 
        constructor(color) { this.color
            color;
        }
        getArea() {
            throw new Error("Method 'getArea()' must be implemented.");
        }
    }
    class Circle extends Shape { 
        constructor (color, radius) { 
            super(color);
            this.radius = radius;
        }
        getArea() {
            return Math.PI* this. radius ** 2;
        }
    }
    
    const circle = new Circle("red", 5);
    console.log(circle.getArea()); // 78.53981633974483
}
