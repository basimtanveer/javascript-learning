class User{
    constructor(username){
        this.username = username 
    }
    logMe(){
        console.log(`USERNAME IS: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`course was added by: ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@techer.com", "1234")

chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe();

// console.log(chai === Teacher);  //will return false


console.log(chai instanceof Teacher);








