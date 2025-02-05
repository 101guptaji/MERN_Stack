let stepOne = (callback) =>{
    console.log("I am step 1");
    callback();
}

let stepTwo = (callback)=>{
    console.log("I am step 2");
    callback();
}

let stepThree = ()=>{
    console.log("I am step 3");
}

//Callback
stepOne(stepThree);

//Callback hell
stepOne(()=>{
    stepTwo(()=>{
        stepThree();
    });
});