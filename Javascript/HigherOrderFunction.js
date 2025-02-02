function goodbye(){
    return "Goodbye👋";
}

function namste(){
    return "Namste🙏";
}

//functtion as argument
function greet(name, action){
    console.log("Hello, "+name+"! "+action());
    
}

greet("Himanshu", namste);

greet("Rahul", goodbye);

//returning a functtion
function play(){
    return function(){
        console.log("Playing Cricket");
    }
}

const sport = play();
sport();

//Function Composition
function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 3;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
  };
}
var res = compose(add, mul)(4);
console.log(res);


//Currying transforms a function that takes multiple arguments into a series of functions that each take one argument. This allows partial application of the function.
function pow(x) {
    return function(y) {
        return x ** y;
  };
}
var pow1 = pow(2);
console.log(pow1(5));


// /Memoization is a technique where function results are cached so that repeated calls with the same arguments return faster. This is particularly useful for expensive function calls.
function memoize(func) {
    var cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            var res = func(arg);
            cache[arg] = res;
            return res;
        }
    };
}
function slow(num) {
    console.log("Computing...");
    return num * 2;
}

var fast = memoize(slow);
console.log(fast(5)); // Computing... 10
console.log(fast(5)); // 10 (cached)


//set time out
function about(){
    console.log("I am fine");
}

setTimeout(about, 2000); //excute about function after 2 sec.
console.log("How are you?")

//set interval
function help(){
    console.log("Do you need any help?");
}

setInterval(help, 3000); // repeatedly excute help function after 3 sec.


