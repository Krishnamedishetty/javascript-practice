// let myName = "krishna     "
// let myNameTwo = "chai     "

// console.log(myName.trueLength);




let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present is all objects`);
    
}
Array.prototype.heyKrishna = function(){
    console.log(`krishna says hello`);
    
}


// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyKrishna()
// heroPower.heyKrishna()


// inheritance

const User = {
    name: "tea",
    email: "T@gmail.com"
}

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurBiscuit"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`the true length is: ${this.trim().length}`);
    
}


anotherUsername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()