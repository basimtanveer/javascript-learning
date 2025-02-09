
const myNums = [1,2,3]

const totalNum = myNums.reduce(function(acc, currVal){
    // console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc + currVal
}, 0)
// const totalNum = myNumbers.reduce ( (acc, currVal) => acc + currVal, 0)

// console.log(totalNum);


const shoppingCart = [
    {
        itemName: "javascript course",
        price: 2999,

    },
    {
        itemName: "mobile dev course",
        price: 3999,

    },
    {
        itemName: "data science course",
        price: 9999,

    },
    {
        itemName: "python course",
        price: 5999,

    },
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(priceToPay);
