/* Premitive Datatypes --> 7 types
1. String 
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

// String
const firstName = 'Sammy';

// Numbers
const age = 23;
const temp = 34.444;

// Boolean
const hasKids = false;

// Null
const aptNumber = null; // object (reason)

// Undefined 
let price;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9499458569595859n;

const output = n;
console.log(output, typeof output);

/*
Reference Types(Objects)
1. Object literals
2. Arrays
3. Functions
*/

// Arrays
const fruits = ['apple', 'orange', 'banana', 'watermelon'];

// Functions
function sayHello() {
    console.log("Hello");
}
sayHello();

// Objects
const dictionary = {
    a: 'apple',
    b: 'banana',
    c: 'carrot',
    g: 'grapes'
};
dictionary.m = 'melon';


const opt = dictionary;
console.log(opt, typeof opt);
