let date = new Date

// console.log(date.toString());
// console.log(date.toDateString());

// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// console.log(date.toISOString());

// console.log(date.toJSON());


// console.log(typeof date);



// let myCreatedDate = new Date(2024, 0, 24)
// let myCreatedDate = new Date(2024, 0, 24, 7, 9)
// let myCreatedDate = new Date("2024-03-20")
let myCreatedDate = new Date("03-16-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: 'long'
})

