// if

const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ) {
    console.log("less than 50");
}else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
// <, >, <=, >=, ==, !=, ===. !==

const score = 200

if( score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}


// console.log(`User power: ${power}`);

const balance = 1000;

if (balance < 500) {
    console.log("less than 500");
}else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 900")
}else {
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromGoogle) {
    console.log("user logged in");
}


// switch
console.log("----- switch -------");


// switch (key) {
//     case value:
    
//     break;
    
//     default:
//     break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log(`Month = january`);
        break;
    case "feb":
        console.log("Month is feb");
        break;
    case "march":
        console.log("Month is march");
        break;
    case "april":
        console.log("Month is april");
        break;
        
    default:
    console.log("default case match");
    break;
}



const userEmail = []

if (userEmail) {
    console.log("Got user email");
}else {
    console.log("Didn't got user email");
}


// falsy values
console.log("----- falsy values -----");
// console.log("--- false, 0, -0, BigInt 0n, "", null, undefined, NaN ---");
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
console.log("---- truthy values ------");
// console.log("--- "0", 'false', " ", [], {}, function(){} ---");
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20



console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Operator
console.log("---- terinary operator ----");
// syntax
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("less than 80")

