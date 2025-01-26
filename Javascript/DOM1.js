let title = document.getElementById("title");
console.log(title);

let heading = document.getElementsByTagName("h1");
console.log(heading.item(1));

let para1 = document.getElementsByClassName("para");
console.log(para1.item(0));


//querySelector with tag name
let data = document.querySelector("div"); //retrive 1st element only 
console.log(data);

let datas = document.querySelectorAll("div"); //retrive all elements
console.log(datas);

//querySelector with id 
let qTitle = document.querySelector("#title");
console.log(qTitle);

//querySelector with class name
let qPara = document.querySelector(".para");
console.log(qPara);


//Traversing elements
let container = document.querySelector(".container");
console.log(container.children);

console.log(heading.item(1).parentNode);

let para = document.querySelector("p");
console.log(para.nextElementSibling);

console.log(para.previousElementSibling);


//creating new element
let sub_heading = document.createElement("h3");

//adding text to the element
sub_heading.innerHTML = "This is creating using JS";

//appending to html document
container.appendChild(sub_heading);

//adding a class name 
container.classList.add("hero");

//removing a class name 
container.classList.remove("container");