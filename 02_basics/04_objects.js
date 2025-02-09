// const tinderUser = new Object
// const tinderUser = {}

const tinderUser = {}

tinderUser.id = "abs134"
tinderUser.name = "basim tanveer"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@example.com",
    fullname: {
        userFullName: {
            firstname: "basim",
            lastname: "tanveer"

        },
        nickname: "jutt g"
    }
}

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);



const user = [
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
    {
        id: 2,
        email: "user@mail.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));



// Object de-structuring

const course = {
    coursename: "javascript",
    price: "999",
    tutor: "Basim Tanveer"
}

// course.tutor   (this is also a syntactic sugar)
const {tutor: courseTutor} = course
console.log(courseTutor);


// JSON

{
    
}





