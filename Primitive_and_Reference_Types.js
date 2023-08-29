//Primitive_and_Reference_Types

//Primitive Types

// like variabels 
let no1;
let no2=22;
no1 = no2;
console.log(no1); // 22

// let's change no2 value
no2 = 23;

console.log(no1); // 22 becacuse it's Primitive type

//Reference Types

// like obj and array 

const man = {name:"ali"}
const person1 = man;
console.log(person1); // { name : "ali" }

man.name = "alaa";

console.log(person1); //  { name : "alaa" } 


// if we want to take value not Reference 

const man = {name:"ali"}
const person ={ ...man}; // we take a copy of obj
console.log(person); // { name : "ali" }

man.name = "alaa";

console.log(person); //  { name : "ali" }


