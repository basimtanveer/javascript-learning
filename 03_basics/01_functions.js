function sayMyName(){
    console.log("B");
    console.log("B");
    console.log("B");
    console.log("B");
    console.log("B");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("result:", result);



function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return        
    }
    return `${username} just logged In`
}
// console.log(loginUserMessage())


function loginUserMessage(username = "basim"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged In`
}
// console.log(loginUserMessage("jutt"))



// function calculateCartPrice(...num1){
//         return num1
// }
// console.log(calculateCartPrice(200, 400, 600));



function calculateCartPrice(val1, val2, ...num1){
        return num1
}
// console.log(calculateCartPrice(200, 400, 600, 2000));


const user = {
    username: "basim tanveer",
    prices: 999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "khizar",
    price: 766,
})


const newArray = [100, 200, 500, 400, 600]

function mySecondValue(getArray){
    return getArray[1]
}

console.log(mySecondValue(newArray))
console.log(mySecondValue([100, 200, 500, 400, 600]))






