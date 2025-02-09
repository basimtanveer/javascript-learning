// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// ()()
// global scope k pollution se problem hoti ha 
// is pollution hatany k liye hm IIFE use krty hain

// semi colon lazmi ha yahan function end hony k liye


(function chai(){
    // Named IIFE
    console.log("DB CONNECTED");
})();

( () =>{
    console.log("DB CONNECTED two");
} ) ();

( (name) =>{
    console.log(`DB CONNECTED two ${name}`);
} ) ('basim');

