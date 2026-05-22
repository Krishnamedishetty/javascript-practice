// for

for (let i = 0; i < 10; i++){
    const element = i;
    if(element == 5) {
        // console.log("5 is the best");
    }
    // console.log(element);
 
}


// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log()
    }
}

let arr = ["a", "b", "c"]
// console.log(arr.length);
for (let i = 0; i < arr.length; i++){
    const ele = arr[i];
    // console.log(ele);
}

// break and continue

// for (let i = 1; i <= 20; i++){
//     if(i == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);
// }



for (let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}

