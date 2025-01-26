/*
    We will be constructing a smart evaluator which will test the validity of the input field. 
    The input string(expression) should only evaluate addition, subtraction, multiplication, division of positive and negative integers. 
    An expression can contain spaces. Any other character will be considered invalid and shall give OutOfRangeError.

    Details:
        Create two class that Extends Error class (OutOfRangeError,InvalidExprError)
        OutOfRangeError class should take one and should have message field value <code>Expression should only consist of integers and +-/* characters and not &lt arg &gt</code>
        InvalidExprError should have message field <code>Expression should not have an invalid combination of expression</code>
        Above two classes should have a name field equal to their class name.
        evalString function should: 
            Throw error InvalidExprError if there is a combination of operators like ++, /+, etc.
            Throw Syntax Error if Expression start with +,/,* operator with message <code>Expression should not start with invalid operator</code>
            Throw Syntax Error if Expression ends with +,/,*,- operator with message <code>Expression should not end with invalid operator</code>
        
    Write your code in the try-catch block given.
*/
class OutOfRangeError extends Error {
    constructor(args) {
        super();
        this.name = "OutOfRangeError";
        this.message = "Expression should only consist of integers and +-/* characters and not '" + args + "' ";
    }
}

class InvalidExprError extends Error {
    constructor() {
        super();
        this.name = "InvalidExprError";
        this.message = "Expression should not have an invalid combination of expression";
    }
}

function evalString() {
    let input = document.getElementById("input1").value.toString();
    input = input.replaceAll(" ", "");
    // console.log(input);
    try {
        const validChars = [ "-", "+", " *", "/","0", "1", "2","3","4","5","6","7","8","9"];
        for (let i = 0; i < input.length; i++) {
            if (!validChars.includes(input[i])) {
                throw new OutOfRangeError(input[i]);
            }
        }

        for (let i = 1; i < input.length - 1; i++) {
            if ((validChars.slice(0,4).includes(input[i - 1]) && validChars.slice(1,4).includes(input[i])) ||
                (validChars.slice(0,4).includes(input[i - 1]) && input[i] == "-" && 
                validChars.slice(0,4).includes(input[i + 1]))) {
                    
                        throw new InvalidExprError();
            }
        }
        
        if (validChars.slice(1,4).includes(input[0])) {
            throw new SyntaxError("Expression should not start with invalid operator");
        }

        if (validChars.slice(0,4).includes(input[input.length - 1])) {
            throw new SyntaxError("Expression should not end with invalid operator");
        }

        alert("passed");

        if (window.Cypress) {
            throw e;
        }
    } 
    catch (e) {
        alert("failed " + e.name + " " + e.message);
    }
}

if (window.Cypress) {
    window.OutOfRangeError = OutOfRangeError;

    window.InvalidExprError = InvalidExprError;
}