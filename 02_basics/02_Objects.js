// const tinderUser = new Object(); //it is a single ton object

const tinderUser = {}; // it is not a single ton object

tinderUser.id = "123abc";
tinderUser.name = "Vinay";
tinderUser.isLoggedIn = false;
 
// console.log(tinderUser);

const regularUser = {
    // name: "Krishna",
    email: "example@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "sharma"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lastname);
// The ? is part of the optional chaining operator (?.) in JavaScript. It is used to safely access nested object properties without causing runtime errors if a property is null or undefined
console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2};
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// ... - spread
const obj4 = {...obj1, ...obj2}

// console.log(obj4);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "t@gmail.com"
    },
    ]
    
// console.log(users[1].email);
// console.log(...users);

// console.log(tinderUser);

console.log("--------");
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(course.price);
console.log(instructor);
console.log(Object.entries(course));

// json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
//     "id": 123456
// }

[
    {},
    {},
    {}
]
