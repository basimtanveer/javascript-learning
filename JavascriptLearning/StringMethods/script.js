const message = 'Hello World'

// console.log(message);

const faltuMessage = '                  Hi I am basim.          '
// console.log(faltuMessage);

// const finalMessage = faltuMessage.trim().toLocaleLowerCase().toLocaleUpperCase()

// const finalMessage = faltuMessage.trimStart()
// const finalMessage = faltuMessage.trimEnd()
const finalMessage = faltuMessage.trim()
console.log(finalMessage);

const replacedMessage = finalMessage.replace('Hi', 'Hello')
// console.log(replacedMessage);

const lastFourDigits = '7896'
const accountNumber =  lastFourDigits.padStart(16, '*')

console.log(accountNumber);





