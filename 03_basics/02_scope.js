let a = 3000 
if(true){
    let a = 200
    const b = 30
    // console.log("INNER:", a);
}
// console.log(a);


function one(){
    const username = "basim"

    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}
one()


if (true) {

    const username = "basim tanveer"

    if (username==="basim tanveer") {
        const website = "youtube "        
        // console.log(`website is ${website}and username is ${username}`);
        // console.log(website + username );
    }
}


// ++++++++++++++++++++ INTERESTING +++++++++++++++++
addOne()
function addOne(num){
    return num + 1
}
console.log(addOne(5));



// addTwo()
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));










