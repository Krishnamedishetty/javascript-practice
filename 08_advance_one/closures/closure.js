
// Lexical scope means variable access is determined by where functions are written in your code, not where they are executed.
// Core Rules
// Inside-Out: Inner functions can see variables in outer scopes.
// One-Way: Outer scopes cannot see variables inside inner functions.
// Fixed: The scope chain is locked during compilation and never changes at runtime.

// example 1 
const global = 'Global';

function outer() {
    const outerVar = "Outer";

    function inner() {
        console.log(global, outerVar);
    }
}

// example 2
function init() {
    let name = "Mohan";
    function displayName(){
        console.log(name);
    }
    displayName();
}

init();

// example 3
function outer(){
    let name = "Krishna";
    let nametwo = "Chaitanya";
    function inner() {
        console.log(name);
        // return inner;
    }
    function innertwo() {
        console.log(nametwo);
    }
    inner();
    innertwo();
}

outer();

// Closure: A closure is a feature in JavaScript where an inner function retains access to the outer function’s variables and parameters, 
// even after the outer function has finished executing.

function makeFunc(){
    const username = "Anil";
    function displayName(){
        console.log(username);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// closure example 1

function makeMultiplier(multiplierNumber) {

    return function multiply(inputNumber) {
        return inputNumber * multiplierNumber;
    };
}

const double = makeMultiplier(2);

const triple = makeMultiplier(3);

console.log(double(5));
console.log(triple(5));

// Modern ES6 Way

const makeMultiplier = multiplierNumber => inputNumber => inputNumber * multiplierNumber;

const double = makeMultiplier(2);
console.log(double(5)); // 10