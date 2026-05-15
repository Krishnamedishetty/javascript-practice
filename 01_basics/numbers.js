console.log("--- numbers ---");

function explainParseInt(value) {
    console.log("Original Value: "+ value);
    let result = parseInt(value);
    console.log("After parseInt: "+ result);
}

explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
    console.log("Original Value: "+ value);
    let result = parseFloat(value);
    console.log("After parseFloat: "+ result);
}

explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");


let name = "krishna";
let age = 22;

// console.log(`hello my name is ${name}, my age is ${age}`);

// const score = 400;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3));

// const otherNumberTwo = 123.8966;

// console.log(otherNumberTwo.toPrecision(3));

// const otherNumberThree = 1123.8966;

// console.log(otherNumberThree.toPrecision(3));



// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// Number.

// +++++++++++++++++++++++++++++++++++++++++++++++++

console.log("------ math --------");

console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));

// console.log(Math.floor(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.min(4, 2, 5, 1));

console.log(Math.random());
// To get minimum one(1)
console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


