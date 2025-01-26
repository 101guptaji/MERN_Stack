/*
    Define a method on Array constructor called includesOneOf which accepts an array as a parameter. It will return true or false based on if an array contains one or more than one of the elements provided in the parameter array.  As a result of this we should be able to access something like:
        const arr=[1, 2, 3, 4, 5, 6] 
        arr. includesOneof([2, 8, 10]) ==>true 
        arr. includesOneof([10, 11, 12])=>false 
        arr. includesOneof([])=> Always false 
*/

Array.prototype.includesOneof = function (list) {
    if(this.length == 0 || list.length == 0) {
      return false; // Return false if it is an empty array
    }

     // Check for arrays of arrays
    if (Array.isArray(this[0]) && Array.isArray(list[0])) {
        for(let array1 of this){
            for(let array2 of list){
                if(array1.length === array2.length){
                    for(let i=0;i<array1.length;i++){
                        if(array1[i] != array2[i]){
                            return false;
                        }
                    }
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        // return this.some((array1) =>
        //     list.some((array2) =>
        //         array1.length === array2.length &&
        //         array1.every((value, index) => value === array2[index])
        //     )
        // );
    }

    // Check for arrays of objects
    if (this[0].constructor === Object && list[0].constructor === Object) {
        return this.some((object1) =>
            list.some((object2) =>
                Object.keys(object1).length === Object.keys(object2).length &&
                Object.entries(object1).every(([key, value]) => value === object2[key])
            )
        );
    }

    // Check for primitive values
    return this.some((value) => list.includes(value));
};

const arr=[1, 2, 3, 4, 5, 6];
console.log("arr.includesOneof([2, 8, 10])? "+ arr.includesOneof([2, 8, 10])); 
console.log("arr.includesOneof([10, 11, 12])? "+ arr.includesOneof([10, 11, 12])); 
console.log("arr.includesOneof([])? "+ arr.includesOneof([])); 

const arr2 = [{name:"James Bond",code:"OO7"},{name:"Edward Donne",code:"OO1"}];
console.log(arr2.includesOneof([{name:"James Bond",code:"OO7"}])); // true 
console.log(arr2.includesOneof([{name:"James Bond",code:"OO7",organization: "MI6"}])) // false 

const arr3 =[[1,22,33,4],[4,55,6,772]]; 
console.log(arr3.includesOneof([[1,22,33,4]])); // true 
console.log(arr3.includesOneof([[1,33,22,4]]) ); // false