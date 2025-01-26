//print all even and odd numbers
let num = 5;
console.log("\n even odd using for loop\n");
for(let i=0;i<num;i++){
    if(i%2 == 0){
        console.log(i+" is Even");
    }
    else{
        console.log(i+" is Odd");
    }
}

console.log("\n even odd using while loop\n");
let i=0;
while(i<num){
    switch(i%2){
        case 0:
            console.log(i+" is Even");
            break;
        case 1:
            console.log(i+" is Odd");
            break;
    }
    i++;
}

console.log("\n do while loop\n");
let x = 0;
do{
    console.log("It should not be printed"); //it will be printed once even if condition is false
    x--;
}while(x>0);