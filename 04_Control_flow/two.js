

//  Conditional Statements (if, else if, else)
console.log("---  Conditional Statements (if, else if, else) ---");
// example
console.log("--- example ---");

const userAge = 20;

if (userAge >= 21) {
    console.log("You can enter the lounge.");
    // console.log(message);
}else if (userAge >= 18){
    console.log("You can enter, but no drinks");
}else {
    console.log("Access denied.");
}
console.log("message");

console.log("--- Assignment ---");

const colour = "red";

if (colour === "red"){
    console.log("stop");
}else if (colour === "yellow") {
    console.log("ready to go");
}else if (colour === "green"){
    console.log("go");
}else {
    console.log("stay safe");
}
console.log("Wear Helmet");

// logical operators (&&, ||)
console.log("--- logical operators (&&, ||) ---");
// example
console.log("--- example ---");

const hasTicket = false;
const hasId = false;
const isVip = false;

if (hasTicket && hasId) {
    console.log("Welcome to the concert!");
}else {
    console.log("Missing ID or Ticket");
}

if (hasTicket || isVip) {
    console.log("Access granted via Ticket or VIP status.");
}else {
    console.log("Buy the ticket.")
}

console.log("--- Assignment -----");

const gpa = 3.5;
const extracurriculars = 0;

if (gpa >= 3.5 && extracurriculars >= 1){
    console.log("Scholarship Approved");
}else {
    console.log("Not eligible");
}

console.log("--- Truthy and Falsy Values ---");

// In JavaScript, every value has an inherent boolean state when thrown into an if statement.

// ❌ Falsy Values (The Only 8): false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, and NaN.

// ✅ Truthy Values: Literally everything else! This includes empty arrays [], empty objects {}, and empty functions function(){}

const userEmail = ""; //falsy
const userCart = []; //truthy

if (userEmail) {
    console.log("Email is present.");
} else {
    console.log("Please provide an email.");
}

if (userCart) {
    console.log("Cart object exists.");
}

console.log("--- Assignment ---");

const username = [];

if (username) {
    console.log(`Welcome ${username}`);
} else {
    console.log("Guest Login");
}


console.log("--- Ternary Operator (? :) ---");

// condition ? expressionIfTrue : expressionIfFalse;

// --- 1. Nullish Coalescing (??) ---
let serverScore = 0;
let finalScore1 = serverScore || 100;
let finalScore2 = serverScore && 100;

console.log(finalScore1);
console.log(finalScore2);

// --- 2. Ternary Operator (? :) ---
// const productPrice = 1200;
// const status = productPrice > 1000 ? "Expensive" : "Cheap";
// console.log(status);

console.log("--- Assignment ---");

let userNickname = null;

let status1 = userNickname && "Anonymous";

console.log(status1);

const userpoints = 150;

const status = userpoints > 100 ? "Premium User" : "Standard User";
console.log(status);





