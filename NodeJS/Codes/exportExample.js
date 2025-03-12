function addition(x,...y){
    let sum =  y.reduce((sum, num) => sum+num, x);
    console.log(sum);
}

function multiply(x,...y){
    let sum =  y.reduce((sum, num) => sum*num, x);
    console.log(sum);
}

module.exports = {
    addition,
    multiply
};