console.log("krishna")

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Start small. Ship something.");


function favoriteThings(){
    
    let favmovie = "Bahubali";
    let favfood = "Chapati";
    let marks = "10 out of 10";
    
    console.log(favmovie);
    console.log(favfood);
    console.log(marks);
}

favoriteThings();

function productDetails() {
    
    let productName = "Laptop";
    let productPrice = 50000 ;
    let isAvailable = "Yes Available";
    
    console.log("Product Name: "+productName);
    console.log("Laptop Cost "+productPrice);
    console.log("Is Available: "+isAvailable);
}

productDetails();

// -------------------- Basic Console -------------------

function printMessage() {

  console.log("Hello JavaScript");

}

printMessage();

function printMessageTwo() {
    
    console.log("Hello World");
}

printMessageTwo();

// -------------------- Multiple Logs ----------------

function studentInfo() {

  let name = "Krishna";
  let age = 21;

  console.log("Student Name:", name);
  console.log("Student Age:", age);
}

studentInfo();

function studentInfoTwo() {
    
    let name = "Chaitanya";
    let age = 23;
    
    console.log("Student Name: "+name);
    console.log("Student Age: "+age);
}

studentInfoTwo();

// ---------------------- Debugging Practice -----------------

function debugPractice() {

  let num1 = 10;
  let num2 = 20;

  console.log("Input One: "+num1);
  console.log("Input Two: "+num2);

  let total = num1 + num2;

  console.log("Total Addition: "+total);
}

debugPractice();

// ---------------- Debugging Assignment ----------------------

let a = 5;
let b = 10;

console.log(a + b);

b = 20;

console.log(a + b);

// ---------------------- String --------------------

function stringPractice() {
    
    let language = "Javascript";
    
    console.log(language);
    console.log(typeof language);
    
}

stringPractice();

// ---------------- Number Practice --------------

function numberPractice() {

  let marks = 95;

  console.log(marks);
  console.log(typeof marks);
}

numberPractice();

function numberPracticeTwo() {
    
    let marks = 98 ;
    let markstwo = 100 ;
    
    console.log(marks);
    console.log(typeof marks);
    console.log(markstwo);
    console.log(typeof markstwo);
    
}

numberPracticeTwo();

// -------------------- Boolean Practice -----------

function booleanPractice() {
    
    let isLoggedIn = true;
    
    console.log(isLoggedIn);
    console.log(typeof isLoggedIn);
    
}

booleanPractice();

// ------------------ Undefined pratice ----------

function undefiedPractice() {
    
    let username;
    let usernameTwo = null;
    
    console.log(username);
    console.log(typeof username);
    console.log(usernameTwo);
    console.log(typeof usernameTwo);
    
}

undefiedPractice();

// ------------------- Array Practice -------------

function arrayPractice() {
    
    let fruits = ["Apple", "Banana", "Mango"];
    
    console.log(fruits);
    console.log(typeof fruits);
}

arrayPractice();

// -------------- Data Type Challenge (Predict) --------------

console.log(typeof 100); //Number
console.log(typeof "100"); //String
console.log(typeof '100'); //String
console.log(typeof true); //Boolean
console.log(typeof null); //Object


// ----------------- Basic Operators ----------------

console.log("------ Addition --------");

function addition() {
    
    let marks = 10 + 20;
    let a = 10;
    let b = 30;
    
    console.log("a + b: " + (a + b));
    console.log("a: "+a);
    console.log("b: "+b);
    console.log("Marks: "+marks);
    
    //swap 
    
    let temp = a;
    a = b;
    b = temp;
    
    console.log("a(after): "+a);
    console.log("b(after): "+b);
}

addition();

console.log("---------- Subtraction -------");

function subtraction() {
    
    let a = 10;
    let b = 5;
    
    console.log(10 - 5);
}

subtraction();

console.log("-------- Multiplication ----------");

function multiplication() {
    
    let a = 20;
    let b = 7;
    
    console.log(a * b);
}

multiplication();

console.log("------------- Division --------");

function division() {
    
    let a = 100;
    let b = 10;
    
    console.log(a / b);
    
}

division();

console.log("---------- Modulus ----------");

function modulus() {
    
    let a = 10;
    let b = 3;
    
    console.log(a % b);
    
}

modulus();

console.log("------------- comparsion ----------");

function comparsion() {
    
    console.log(10 > 5);
    
    console.log(10 < 5);
    
    console.log(10 === 10);
    
    console.log(10 === "10");
    
}

comparsion();


console.log("------------- Logical Operators ----------");

function logicalOperators() {
    
    let isStudent = true;
    let hasIDCard = true;
    
    console.log(isStudent && hasIDCard);
    
    console.log(isStudent || false);
    
    console.log(!isStudent);
    
}

logicalOperators();





