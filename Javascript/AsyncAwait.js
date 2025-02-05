let stepOne = () =>{
    let x = 0;
    return new Promise((resolve, reject)=>{
        if(x==0){
            console.log("I am step 1");
            resolve();
        }
        else{
            reject("Rejected 1");
        }
    })
}

let stepTwo = ()=>{
    let x = 1;
    return new Promise((resolve, reject)=>{
        if(x==0){
            console.log("I am step 2");
            resolve();
        }
        else{
            reject("Rejected 2");
        }
    })
}

async function algo() {
    try{
        await setTimeout(()=> stepOne(), 4000);
        await stepTwo();
    }
    catch(error){
        console.log(error);
    }
}

algo();


//will excute after 4 sec
let promise = new Promise((resolve)=>{
    setTimeout(()=>resolve("Promise Resolved"), 4000);
})

async function asyncFunc(){
    let result = await promise;

    console.log(result);
    console.log("Goodbye");
}

asyncFunc();


//async example with time delay
async function myFunction() {return "Hello";}

myFunction().then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);


