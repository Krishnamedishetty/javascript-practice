// console.log("fetch()");

fetch('https://reqres.in/api/users')
.then(function(data){
    // console.log(data.json());
    return data.json();
})
.then((dataa) => {console.log(dataa);
})
.catch((error) => {console.log("Error fetching data: "+error);
})





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