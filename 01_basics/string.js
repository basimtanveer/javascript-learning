const name = 'Basim'
const repoCount = 50

// console.log(name + repoCOunt + "value");

console.log(`Hello my name is ${name} and the repo count is ${repoCount}`);


const gameName = new String('Basimtanveerjutt')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));


const newStr = gameName.substring(0,4)
console.log(newStr);

const anotherString = gameName.slice(0,9)
console.log(anotherString);

// slice and splice

let fruits = ['mango', 'apple']
let updatedFruits = fruits.slice(1, 2, 'banana');   

console.log(updatedFruits);


let vegs = ['potato', 'tomato']
vegs.splice(0,1,2,3,'lady finger');   

console.log(vegs);



// Trim 









