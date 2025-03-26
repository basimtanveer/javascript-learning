// class User{
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`Username is: ${this.username}`);
//     }

//     static createId(){      //to stop access this method
//         return `1243`
//     }
// }

// const basim = new user("basim")
// console.log(basim.createId());



// class Teacher extends User{
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher( "iphone", "iphone@i.com")
// console.log(iphone.createId());



class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const basim = new User("basim")
// console.log(basim.createId())

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// iphone.logMe()
console.log(iphone.createId())
