// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log('5 is best number');
    }
    // console.log(element);    
}


for (let i = 0; i < 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`);
    }    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`)

    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop: ${j} having Outer Loop: ${i}`);

    // console.log(i + '*' + j + '=' + i*j );   
    }   
}



let myArray = ["superman", "batman", "flash"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}


//  Break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5")
        break
    }
    // console.log(`value of index is ${i}`)
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5")
        continue
    }
    console.log(`value of index is ${i}`)
}