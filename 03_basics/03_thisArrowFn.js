const user = {
    username: "basim",
    price: 450,

    welcomeMessage: function () {

        console.log(`${this.username}, welcome to website`);
        // console.log(this);   
    }
}
// user.welcomeMessage()
// user.username = "khizar"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "basim"
//     console.log(this.username);  //this shows undefined
// }
// chai()

// const chai = function(){
//     let username = "basim"
//     console.log(this.username);  //this shows undefined
// }
// chai()


// const chai = ()=>{
//     let username = "basim"
//     console.log(this.username);  //this shows undefined
// }
// chai()


// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,5));


// implicit returns

const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

// const addTwo = (num1, num2) =>  ({username: "basim"})

console.log(addTwo(3,5));



const myArray = [1,5,6,7,8,2]

// myArray.forEach( () => {} )
// myArray.forEach( () => () )


