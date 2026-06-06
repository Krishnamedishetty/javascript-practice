
// The JavaScript fetch() method initiates a network request, with 
// .then() handling successful responses and 
// .catch() managing network failures. Finally, 
// .finally() executes unconditionally after the request completes, regardless of the outcome.

const { response } = require("express");


const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, criptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise is Comsumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is completed")
    }, 1000)
}).then(function(){
    console.log("Async task 2 is consumed");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("");
        resolve({username: "coffee", email: "example@gmail.com"})  
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Krishna", email: "example@gmail.com"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})



promiseFour
.then((user) => {
    console.log('user');
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");  
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: javascript went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: "+error);
//     }  
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})



