function sayMyName(){
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(1, 2);

function addTwoNumbers(number1, number2){
    
    let result = number1 + number2;
    return result;
    // return number1 + number2;
}

// console.log(addTwoNumbers(1, 2));

console.log("Result: "+ addTwoNumbers(3, 3));

// console.log(addTwoNumbers(2, 2));

function loginUserMessage(username = "john"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("krishna"));


function calculateCarPrice(...num1){
    return num1
}

console.log(calculateCarPrice(200, 400, 500, 2000));

const user = {
    username: "bramha",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user);

handleObject({
    username: "parvathi",
    prices: 399
})

const myNewArray = [20, 30, 50, 90];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([20, 40, 50, 70]));


