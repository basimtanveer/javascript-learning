// new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("Async task 1");
//             resolve()
//         }, 1000)
//     })
//     .then(function(){
//         console.log("Async task 1 resolved");
//     })



// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({user: "basim", email: "basimjutt2017@gmail.com"})
//     }, 1000)

// })
// promiseTwo.then(function(user){
//     console.log(user);

// })

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ name: "basim", email: "basimjutt2017@gmail.com" })
        } else {
            reject('Error: Something went wrong')
        }
    }, 2000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.email

}).then((name) => {
    console.log(name);

}).catch(function (err) {
    console.log(err);

}).finally(() => {
    console.log("Finally promise is either resolve or reject");

})


// Promise using async await 

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'basim jutt', password: 123 })
        } else {
            reject('Error : username Went Wrong')
        }
    }, 3000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }

}
consumePromiseFive()



const promiseFiveAgain = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true
        if(!err){
            resolve({marks: 899, grade: "A", CGPA: 3.2})
        } else{ 
            reject('Err! This is error')
        }
    }, 5000)
})
async function consumePromiseFiveAgain() {
    try {
        const response = await promiseFiveAgain
        console.log(response);
         
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFiveAgain()


async function getAllUsers(){
   
    
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
        
    }
}

getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
