// ES6


class user {

 constructor(username, email, password){
        this.username = username
        this.password = password
        this.email = email
   }

   encryptPassword(){
    return`${this.password}abc`
   }

   changeUsername(){
    return  `${this.username.toUpperCase()}`
   }
}

const chai = new user("Chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// behind the scene

function myUser(username, email, password){
    this.username = username;
    this.password = password;
    this.email = email
}

myUser.prototype.encryptPassword = function(){
    return `${this.password}`
}

myUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new myUser("Tea", "Tea@gmail.com", "456")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// more example

class newUser {
    constructor(name, password){
        this.name = name
        this.password = password

    }

    changeUsername(){
        console.log(`${this.name.toUpperCase()}`);
    }

}

const coffee = new myUser("cold coffee" , "345")

console.log(coffee.changeUsername());