//Global variables
var gv;
let gl;
const gc = 3;

//functional scope
function add(){
    gv = 1;
    gl = 2;

    var fv = 4;
    let fl = 5;
    const fc = 6;

    //block scope
    {
        var bv = 7;
        let bl = 8;
        const bc = 9;
        console.log(gv);
        console.log(gl);
        console.log(gc);
        console.log(fv);
        console.log(fl);
        console.log(fc);
        console.log(bv);
        console.log(bl);
        console.log(bc);
    }
    console.log(bv);
    //console.log(bl); //error
    //console.log(bc); //error
}

add();

//Errors
//console.log(fv);
//console.log(fl);
//console.log(fc);
//console.log(bv);
//console.log(bl);
//console.log(bc);

//block scope
{
    var name = "him";
}

console.log(name);