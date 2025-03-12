const obj = {
    name : "Guptaji",
    age : 25,
    Mobile: "555966744",
    Married: false
}

console.log(obj);

// coverting object to json
const jsonData = JSON.stringify(obj);
console.log(jsonData);
console.log(jsonData.age); // undefined bcz json don't have key value pair


// converting json to object
const jsonObj = JSON.parse(jsonData);
console.log(jsonObj)
console.log(jsonObj.age);

