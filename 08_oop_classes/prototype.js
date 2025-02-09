// let myName = "Basim          "

// // console.log(myName.length);
// console.log(myName.trueLength);


let myHeros = ["spiderman", "thor", "superman"]

let heroPower = {
    spiderman: "spider",
    thor: "hammer",
    superman: "wings",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.basim = function(){
    console.log(`basim is present in all objects`);
}

Array.prototype.heyBasim = function(){
    console.log(`basim say Hello`);
}

// heroPower.basim()
myHeros.basim()
myHeros.heyBasim()
// heroPower.heyBasim()



// Inheritence

const Teacher = {
    makeVideos: true,
}
const TeachingSupport = {
    isAvailable: true
}
const user = {
    username: "chai",
    email: "chai@gmail.com"
}
const TaSupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,

    __proto__:TeachingSupport,
}
Teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiOrCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"basim".trueLength()
"basimjutt".trueLength()