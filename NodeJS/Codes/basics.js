// let num = 25;
// console.log(num);

// let arr = [23,56,12,88];
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let even = arr.filter((x) => x%2 == 0);
// console.log(even);

function add(x,...y){
    return y.reduce((sum, num) => sum+num, x);
}

console.log(add(2,5));
console.log(add(2,5, 25));
console.log(add(2, 5, 25, 150));