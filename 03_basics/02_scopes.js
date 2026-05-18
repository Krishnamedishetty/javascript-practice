// GLOBAL vs LOCAL SCOPE
// Think of scope like room access.

// Global scope → accessible everywhere

// Local/block scope → accessible only inside one room

// var c = 300;

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: "+ 1);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "krishna"
    
    function two() {
        const website = "america"
        console.log(website);
    }
    // console.log(website);
    
    // two();
}

// one();

// Global Scope - Accessible everywhere
console.log("----- Global Scope -------");

let username = "krishna";

function greet() {
    console.log(username)
}

greet();
console.log(username);

// Local Scope - Variable accessible only inside a specific area.
console.log("----- Local Scope ------");

function test() {
    let age = 21
    console.log(age)
}

test()

// Function Scope - Function creates its own private room.
console.log("------- Function Scope ------");

function one() {
    const username = "krishna";
    console.log(username);
}

one()

// Block Scope - 	Variable lives inside {}
// Works with if, for, while, switch and any {} block

console.log("----- Block Scope --------");

if(true) {
    let city = "Hyderabad";
    const state = "Telangana";
    console.log(city);
}

// console.log(city);

// var ignores block scope.

if(true) {
    var score = 100
}
console.log(score);

// Lexical Scope - 	Child accesses parent variables
console.log("----- Lexical Scope -------");

function outer() {
    let username = "chaitanya"
    
    function inner(){
        console.log(username)
    }
    
    inner()
}

outer()

// IMPORTANT RULE
// Child can access parent.
// Parent cannot access child.

// this fails

// function outer() {

//     function inner() {
//         let secret = "123"
//     }

//     console.log(secret)
// }

// Because parent cannot access child scope.

// Hoisting - 	JS moves declarations before execution
console.log("------- Hoisting ------");

hello()

function hello() {
    console.log("Hello")
}

// Before code runs,
// JavaScript moves declarations to memory.

// But This Fails

test()

const test = function(){
    console.log("hi")
}

// Because test exits in memory but value not assigned yet
// Fully Hoisted - function abc(){}
