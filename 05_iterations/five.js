const fruits = ["apple", "banana", "mango", "watermelon"]

// fruits.forEach( function (val){
//     console.log(val);
// })

// fruits.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// fruits.forEach(printMe);

fruits.forEach( (item, i, arr) => {
    // console.log(item, i, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    ]
 
    myCoding.forEach( (item) => {
        console.log(item.languageName);
    })

