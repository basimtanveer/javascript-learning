// call


function SetUsername(username){
    this.username = username
    console.log("CALLED");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@user.com", "123")
console.log(chai);