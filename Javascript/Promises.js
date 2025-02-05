function myData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const data = {
                name: "HKG",
                age: 25
            };
            resolve(data);
        }, 1000);
    });
}

myData().then((data)=>{
    console.log("Data: ",data);
}).catch((error)=>{
    console.log("Error: ",error);
});


//this promise excuted first
let stepOne = () =>{
    return new Promise((myResolve, myReject)=>{
        console.log("I am step 1");
        myResolve();
    })
}

let stepTwo = ()=>{
    console.log("I am step 2");
}

let stepThree = ()=>{
    // x=5;
    // let x; //error
    console.log("I am step 3");
}

stepOne().then(()=>{
    stepTwo();
}).then(()=>{
    stepThree();
}).catch((err)=>{
    console.log("Error",err);
})


// 1. Promise.all():  takes an iterable of Promises and returns a single Promise that resolves when all of the promises in the iterable have resolved or rejects if any promise rejects.
// Use Case: When you want to execute multiple asynchronous tasks concurrently and need all of them to succeed.
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve)=>{
    resolve(20);
});
const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(30);
    }, 2000);
});

Promise.all([promise1, promise2, promise3])
.then((ans)=>{
    console.log(ans); //[10, 20, 30]
})
.catch(()=>{
    console.log("One of the promise failed.")
});


// 2. Promise.race(): returns a Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
// Use Case: Useful when you need the result of the fastest promise, such as a timeout mechanism or fastest server response.
const slowPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Slow");
    }, 3000);
});
const fastPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Fast");
    }, 1000);
});

Promise.race([slowPromise, fastPromise])
.then((ans)=>{
    console.log(ans); //Fast
})
.catch(()=>{
    console.log("One of the promise failed.")
});


// 3. Promise.allSettled(): takes an iterable of Promises and returns a single Promise that resolves when all of the promises in the iterable have settled (either resolved or rejected).
// Provides the result for each promise (resolved or rejected) in the form of an object.
// Use Case: When you want to know the outcome of all promises, regardless of success or failure.
const passed1 = Promise.resolve(10);
const failed1 = Promise.reject("Error !");
const passed2 = new Promise((resolve)=>{
    setTimeout(()=>resolve(30), 1000);
});

Promise.allSettled([passed1, failed1, passed2])
.then((ans)=>{
    console.log(ans);
    // [ 
        // {status: 'fulfilled', value: 10}, 
        // {status: 'rejected', reason: 'Error !'}, 
        // {status: 'fulfilled', value: 30}
    // ]
})


// 4. Promise.any(): takes an iterable of Promises and returns a single Promise that resolves with the first promise that fulfills. If all promises reject, it rejects with an AggregateError.
// Rejects only if all promises are rejected.
// Use Case: When you need at least one successful result out of multiple promises.
const failed2 = Promise.reject("Failed Promise2");
const success1 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Success1"), 2000);
});
const success2 = Promise.resolve("Success2");

Promise.any([success1, success2, failed2])
.then((ans)=>{
    console.log(ans); // Success2
})
.catch((err)=>console.log(err));


// 5. then(): is used to attach a callback function that runs when the Promise is resolved. It can also be chained to handle the resolution of multiple asynchronous operations in sequence.
// Features: Accepts two arguments: a success handler and an optional error handler. Returns a new Promise, allowing chaining.
// Use Case: To handle the result of a resolved Promise.
Promise.resolve(1001)
.then((val)=>{
    console.log(val); //1001
    return val+4;
})
.then((val)=>{
    console.log(val); //1005
})


// 6. catch(): is used to handle errors or rejections in a Promise chain.
// Catches errors from the previous then() or any rejected Promise.
Promise.reject("Rejected")
.catch((err)=>console.log(err)); //Rejected


// 7. finally(): executes a callback function once the Promise is settled, regardless of whether it was resolved or rejected.
// Features: Does not receive the Promise's result or reason.
// Use Case: Useful for cleanup operations.
Promise.reject("Rejected for finally")
.catch((err)=>console.log(err))
.finally(() => {
    console.log('Operation complete'); // Always executes
});