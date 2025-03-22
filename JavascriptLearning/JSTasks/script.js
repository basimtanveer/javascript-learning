// Write a function to reverse a given string.


function reverseString(str){
    return str.split('').reverse().join('');
}
let userInput = prompt('Write your word')
console.log(reverseString(`${userInput}`))
