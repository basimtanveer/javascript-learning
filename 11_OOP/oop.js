// Object Literal

const user = {
    username : "basim",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



// Contructor Function

function User(username, isLoggedIn, loginCount){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

// without using new

// const userOne = User("basim", true, 12)
// const userTwo = User("tanveer", false, 11) 

// now value will overwrite


const userOne = new User("basim", true, 12)
const userTwo = new User("tanveer", false, 11)   //now everytime new instance will create 

console.log(userOne.constructor) // show clean result with new
// console.log(userTwo) 


// new instance na hony ki wjah se original effect hua ha 
// or value overwrite hogai jo k error create kry ga



