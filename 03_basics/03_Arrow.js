// Arrow
console.log("------- Arrow and this keyword -------");

const user = {
    username: "krishna",
    price: 999,
 
    welcomeMessage: function() {
        console.log(`${this.username} Welcome to website`);
        // console.log(this);
    }
 
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "krishna"
//     console.log(this.username);
// }

// chai()


// const coffee = function () {
//     let username = "krishna"
//     console.log(this.username);
// }

const coffee =  () => {
    let username = "krishna"
    console.log(this);
}

// coffee()

// arrow function syntax
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "krishna"})

console.log(addTwo(3, 4));


// const myArr = [1, 2, 3, 4, 5]

// myArr.forEach(() => ())