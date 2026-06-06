const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const mynewObj = Object.create(null)

const chai = {
    name: 'ginger tea',
    price: 250,
    isAvailable: true,


    orderChai ,function() {
        console.log("chai");
    }
}

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'price', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}


