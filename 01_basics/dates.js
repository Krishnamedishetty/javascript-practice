
// Dates



function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date: "+ currentDate);

    // Components of the date
    console.log("Date: "+ currentDate.getDate());
    console.log("Day: "+ currentDate.getDay());
    // Months are zero-indexed, so adding 1
    console.log("Month: "+ (currentDate.getMonth() + 1));
    console.log("Year: "+ currentDate.getYear()); //don't use this 
    console.log("Year: "+ currentDate.getFullYear());
    console.log("Hours: "+ currentDate.getHours());
    console.log("Minutes: "+ currentDate.getMinutes());
    console.log("Seconds: "+ currentDate.getSeconds());
    
    // Setting Components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear: "+ currentDate);
    
    currentDate.setMonth(5);
    console.log("After setMonth: "+ currentDate);
    
     // Getting and setting time in milliseconds since 1970
     console.log("Time in milliseconds since 1970: "+ currentDate.getTime());
     
     const newDate = new Date(2023, 8, 15); //Creating a new date
     console.log("New Date: "+ newDate);
}

dateMethods();

console.log("-------");
console.log("----- Trying to convert the date to string -----");
console.log("-------");

let myDate = new Date();
console.log(myDate.toString());

console.log("----- toDateString() --------");
console.log(myDate.toDateString());

console.log("----- toISOString() --------");
console.log(myDate.toISOString());

console.log("----- toJSON() --------");
console.log(myDate.toJSON());

console.log("----- toLocaleDateString() --------");
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

console.log("----- toLocaleString() -----");
console.log(myDate.toLocaleString());

console.log("----- toLocaleTimeString() -----");
console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2026, 4, 16, 1, 28);
// let myCreatedDate = new Date("16-05-2026");  //Invalid Date
let myCreatedDate = new Date("2026-05-16");
console.log(myCreatedDate.toLocaleString());

// Milliseconds
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})


