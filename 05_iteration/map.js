// const numbers = [2,3,51,23,41,13,11,12,42,19,29,17,25]

// const newNums = numbers.map( (num) =>{ return num + 10 })
// console.log(newNums);


// const newNumbers = numbers
//         .map( (num)=>num * 2)
//         .map((num)=>num+1)
//         .filter((num)=>num>=40)

// console.log(newNumbers);




const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers
        .map ((num) => num * 10)
        .map ((nums) => nums + 1)
        .filter ((nums) => nums >= 40)

        
console.log(newNumbers);
