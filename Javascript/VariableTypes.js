var var_name = 5;
console.log(var_name)

var_name = 10; //can not change datatype i.e var_name = "him"; will give error.
console.log(var_name);

var var_name = "him"; //  can redeclare
console.log(var_name)

let let_name = 20;
console.log(let_name)

let_name = "him";
console.log(let_name);

//let let_name = 20; //error, can not redeclare

const pi = 3.14;
console.log(pi)

// pi = 22; // can not reassign, will give syntax-error
// console.log(pi);


console.log("\n----Hoisting----");
host = 5;
console.log(host); //undefined
// var host=10;

var host="Ram";
console.log(host); 