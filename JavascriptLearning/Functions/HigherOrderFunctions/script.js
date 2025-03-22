function a(b){
    console.dir(b);
    b();
}

function sayHi () {
    console.log("Hiiiiiiiiiiiiii");
}

const x = sayHi
 
// sayHi()
// x();
x.age = 26

// a(sayHi)


// jb kisi function me ek or function pass kia jaye 
// to wo higher order function bnn jata ha