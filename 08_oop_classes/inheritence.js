// class User{
//     constructor(username){
//         this.username = username 
//     }
//     logMe(){
//         console.log(`USERNAME IS: ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`course was added by: ${this.username}`);
//     }
// }

// const chai = new Teacher("chai", "chai@techer.com", "1234")

// chai.addCourse()

// const masalaChai = new User("masalaChai")
// masalaChai.logMe();

// // console.log(chai === Teacher);  //will return false


// console.log(chai instanceof Teacher);



class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);   
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    AddCourse(){
        console.log(`New Course was added by: ${this.username}`);        
    }
}
const chai = new Teacher("Basim", "basim@teacher.com" , "123")
chai.AddCourse()


const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(masalaChai === chai);
// console.log(masalaChai === Teacher);
// console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
