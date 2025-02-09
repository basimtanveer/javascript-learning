const user = {
    username: "basim",
    price: 399,

    welcomemessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
    }
}
// user.welcomemessage()

// user.username = "sam"
// user.welcomemessage( )     //in node env => undefined , browser => window (global object)


// console.log(this);


// function chai(){
//     let username = "basim"
//     console.log(this.username);     //in node env => undefined 
// }

// chai()


// const chai = function (){
//     let username = "basim"
//     console.log(this.username);          //in node env => undefined
// }

// chai() 

// const chai = ()=>{
//     let username = "basim"
//     console.log(this);   // in node env => empty object, browser => undefined
// }

// chai()



const addNumbers = (num1, num2) =>{
    return num1 + num2
}


// const addNumbers = (num1, num2) => num1 + num2                       // implicit return of arrow function

// const addNumbers = (num1, num2) =>  { return (num1 + num2)}          // implicit return of arrow function with curly braces
// const addNumbers = (num1, num2) =>  ({ username: "basim"})              // return object in arrow function



console.log(addNumbers(3,4)) 


// const myArray = [2,4, 5,67,8,45,4]
// myArray.forEach( () => {} )
// myArray.forEach( () => () )





 