const marvel_heros = ["thor", "ironman",  "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concat 
// console.log(allHeros);

const myAllHeroSpread = [...marvel_heros, ...dc_heros]  //Spread Operator
// console.log(myAllHeroSpread);


const nestedArray = [1,6,7,[3,2,4],7,[9,0,6,[6,8,8]]]  //flat method

const realNestedArray = nestedArray.flat(Infinity)
// console.log(realNestedArray);




// console.log(Array.isArray("Basim"))
// console.log(Array.from("Basim"))
// console.log(Array.from({name: "Basim"})) //interesting


let num1 = 76;
let num2 = 33;
let num3 = 98;

// console.log(Array.of(num1, num2, num3));



