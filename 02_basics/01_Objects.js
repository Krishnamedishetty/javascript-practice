// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Krishna",
    "full name": "Krishna Chaitanya",
    [mySym]: "myKey1",
    age: 20,
    email: "example@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);




jsUser.email = "chatgpt@gmail.com"
Object.freeze(jsUser) //once, if you used freeze after that you cannot change
jsUser.email = "Hemanth@gmail.com"
console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

