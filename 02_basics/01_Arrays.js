// const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr.includes(9));
// console.log(myArr.includes(1));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log('A ', myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);




const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);




console.log(Array.isArray("Hitesh"));
console.log(Array.from("Krishna"));
console.log(Array.from({name: "krishna"}));

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3));

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("Hello"));
console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(Array.isArray(null));

// Array.from() - converts iterable or array-like data into real arrays.

console.log(Array.from("Hello"));

console.log(Array.from("12345"));

console.log(Array.from(""));

const mySet = new Set([10, 20, 30]);

console.log(Array.from(mySet));

const mySetTwo = new Set(["Krishna", "Hemanth", "Chaithanya"]);

console.log(Array.from(mySetTwo));

const mySetThree = new  Set([2.34, 4.56, 7.89]);

console.log(Array.from(mySetThree));




console.log(Array.from({name: "krishna"}));

console.log(Array.from({ length: 5 }));


console.log(Array.from({ length: 5 }, (_, index) => index));

// or traditional way

let arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(i);
}

console.log(arr);



console.log(Array.of(1, 2, 3));

console.log(Array.of("React", "Angular"));

console.log(Array.of(true, false));
