//singleton
Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: 'Basim',
    "full name": 'Basim Tanveer Jutt',
    [mySym]: "key1",
    age: 25,
    email: "basimjutt@gmail.com",
    location: "taxila",
    isLoggedIn: false,
    lastLoginDays: ["Wednesday", "Monday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "basimjutt2017@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "BASIM@MICROSOFT.com"

// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




