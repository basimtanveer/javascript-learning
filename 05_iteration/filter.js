const coding = ["ruby", "js", "java", "python", "cpp"]


// const values = coding.forEach ( (item) => {
//     console.log(item);

// } )

// console.log(values);


// for each did not return any value

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);


const newNums = myNums.filter( (num) => {
   return num > 4
} )
// console.log(newNums)



// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// }   )

// console.log(newNums)



// ******************EXAMPLE*****************


const books = [
    {
        title: 'Book One', genre: 'History', publish: 1981, edition: 2006
    },
    {
        title: 'Book two', genre: 'History', publish: 1990, edition: 2014
    },
    {
        title: 'Book three', genre: 'Drama', publish: 1992, edition: 2010
    },
    {
        title: 'Book four', genre: 'Fiction', publish: 1992, edition: 2000
    },
    {
        title: 'Book five', genre: 'Drama', publish: 2002, edition: 2004
    },
    {
        title: 'Book six', genre: 'Fiction', publish: 2000, edition: 2007
    },
    {
        title: 'Book seven', genre: 'Mystery', publish: 2001, edition: 2012
    },
    {
        title: 'Book eight', genre: 'History', publish: 2002, edition: 2008
    },
    {
        title: 'Book nine', genre: 'Non Fiction', publish: 2021, edition: 2024
    },
    {
        title: 'Book ten', genre: 'History', publish: 2012, edition: 2014
    },
    {
        title: 'Book eleven', genre: 'Non Fiction', publish: 2021, edition: 2022
    },
    {
        title: 'Book twelve', genre: 'Catoon', publish: 2020, edition: 2021
    },
]

let userBooks = books.filter( (bk)=>bk.genre === 'Mystery')
 userBooks = books.filter( (bk)=> bk.publish >= 2010 && bk.genre === 'History')

console.log(userBooks);



