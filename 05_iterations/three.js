// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const g = "Hello World!"
for (const greet of g) {
    // console.log(`Each char id ${greet}`);
}

// Maps

const map = new Map()
map.set("1", "india");
map.set("2", "usa");
map.set("3", "france");
map.set("4", "ice land");

// console.log(map);

for(const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    g1: "NFS",
    g2: "spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

