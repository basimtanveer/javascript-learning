// for of loops

// ["", "", ""]
// [{}, {}, {}]


const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello basim"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}


// Maps


const map = new Map()

map.set('PK', 'Pakistan')
map.set('IN', 'India')
map.set('UK', 'United Kingdom')

// console.log(map);


for (const key of map) {
    // console.log(key);   
}

for (const [key, value] of map) {
    // console.log(key, ':-' , value);    
}

// for in loop

const myCourse = {
    js: "javascript",
    py: "python",
    cpp: "c++"
}
for (const key in myCourse) {
    // console.log(`${key} is shortcut for my course ${myCourse[key]} `);   
}


const programming =  ["js", "rb", "java", "py", "cpp" ]
for (const key in programming) {
    // console.log(programming[key]);
}

// For Each Loop

const language = ['rupy', 'python', 'java', 'c++', 'javascript']

language.forEach(function name(item) {
        // console.log(item);        
})

language.forEach( (item)=>{
    // console.log(item);
})

function print(item) {
    console.log(item)
}
// language.forEach(print)


language.forEach( (item, index, arr)=>{
    // console.log(item,index, arr);
} )


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "rupy",
        languageFileName: "rb"
    },

]
myCoding.forEach( (item) =>{
    console.log(`Coding language name is ${item.languageName} and language file name is ${item.languageFileName}`);
    // console.log(item.languageFileName);
})

