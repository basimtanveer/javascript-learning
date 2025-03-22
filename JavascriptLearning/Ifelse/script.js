const username = prompt('Please Enter Your Name') || 'Basim Jutt';
const userAge = prompt('Please Enter Your Age');


console.log(`Name : ${username}`);
console.log(`Age : ${userAge}`);

if (userAge >= 4 && userAge < 18) {
    console.log(`${username} is a school student`);
    console.log(`and ${username} is learning science subjects.`);
    
}

else if (userAge >= 18 && userAge <= 24 ) {
    console.log(`${username} is a college student`);
    console.log(`and ${username} is learning computer science.`);
    
}
else if (userAge >= 25 && userAge <= 45 ) {
    console.log(`${username} is a working professional.`);
    console.log(`and ${username} is a web developer.`);
    
}
else if (userAge > 45 ) {
    console.log(`${username} is retired.`);
    console.log(`and ${username} reads newspaper.`);
    
}
else{
    console.log("Please add valid data")
}

console.log('Program Ended');
