const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 1)

console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js",
        price: 999
    },
    {
        itemname: "py",
        price: 799
    },
    {
        itemname: "java",
        price: 999
    },
    {
        itemname: "ruby",
        price: 899
    }
    ]
    
    
const priceToday = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToday);
    
    
    
    
    
