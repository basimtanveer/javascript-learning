const user = {
    username: "basim",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function (){
        // console.log("Got user details from database");

        // console.log(this);       // 'this' inside scope will print all the object values
        // console.log(`Username: ${this.username}`);   //we must use this for what value we want.
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);          //'this' outside will print empty obj in node env and window obj in browser


// to avaoid creating new objects and write same thing again and again, we use constructor functions

// new is Constructor function used for creating new context

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this;  //implicitly defined but we can write this
}

// const userOne = User("basim", 12, true)
// const userTwo = User("tanveer", 11, false)

// // if we write code in this way code will overwrite values 

// console.log(userOne);


const userOne = new User("basim", 12, true)
const userTwo = new User("tanveer", 11, false)

// console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);


// Constructor is a reference to its own 




// with using 'this' keyword an empty object is created which is instance.
// constructor function is called because of 'new' keyword , this function packed all the arguments 
// all arguments inject in 'this'
// we get in function

