const userEmail = []

if (userEmail) {

    console.log("Got User Email")
    
} else {
    console.log("Don't have Email")
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value

// "0", "false", " ", {}, [], function(){}, 

if (userEmail.length === 0){
    console.log("Array is empty"); 
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}


// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 

val1 = null ?? 10 ?? 20 

// val1 = undefined ?? 15

// console.log(val1);



// Terniary Operator

// condition ? true : false

const TeaPrice = 100
TeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80")














