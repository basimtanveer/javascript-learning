// fetch("http://something.com").then().catch().finally

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Db calls, typography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
// then is related to resolve of promise
promiseOne.then( function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    } ,1000)
}).then(function(){
    console.log("Async 2 resolved")
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "basim", email:"basim@example.com"})
    },100)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "basim", password: 1235})
        } else{
            reject('Error: Something went wrong')
        }
    },1000)
})
promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("Promise is either resolve or rejected"))



const aPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({usename: "basim", password: 1234})
        } else{
            reject('Error: Something Went Wrong')
        }
    }, 1000)
})
aPromise.then((user)=>{
    console.log(user);

    return user.username

}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=> console.log("Promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){

        let error = true;
        if(!error){
            resolve({username: "JavaScript", password: 124})
        } else{
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response);
   } catch (error) {
        console.log(error);
   }
}
consumePromiseFive()



const promiseSix = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "ali", password: 1234})
        } else{
           reject('FATAL Error: Something went wrong with this')
        }
    }, 1000)

})

async function consumePromiseSix(){
    try {
      const resp = await promiseSix
      console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseSix()





const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "basimjutt", password: "12345"})
        }else{
            reject('Error: Error Error')
        }
    },1000)
})

async function consumeMyPromise(){
    try {
        const response  = await myPromise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumeMyPromise()


const newPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "aqib", password: "123"})
        }else{
            reject('Error 404: This is an error')
        }
    }, 1000)
})

async function consumeNewPromise(){
    try {
        const response = await newPromise
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumeNewPromise()



// async function getAllUsers(){
//     const response = await fetch('http://jsonplaceholder.typicode.com/users') 
//     const data = response.json()
//     console.log(data);
// }

// getAllUsers()

// async function getAllUsers(){
//     try {
//        const response = await fetch('http://jsonplaceholder.typicode.com/users')
//        const data = await response.json()
//        console.log(data);
//     } catch (error) {
//         console.log("E: Error");
//     }
// }

// getAllUsers()



fetch('http://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
