// Three ways to create --> var, let, const

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName, age);

var age = 30;
console.log(age);

// Reassigning variables
age = 32;
console.log(age);

let score;
score = 1;
console.log(score);
if (true) {
    score += 1;
}
console.log(score);

const x = 200;
// x = 45; // error (const variables can't be reassigned)

const arr = [1, 2, 3, 4];
// arr = [5,6,7,8]; // error 
arr.push(5);
console.log(arr);

const person = {
    name: 'Alex',
    age: 34
};
console.log(person);
person.name = 'Johnny';
person.salary = 5600000;
console.log(person);

// declare multiple variables
let a, b, c;
const d = 10, e = 34, f = 56;
