// Values are stored in the stack
const name = 'John';
const age = 45;

// Reference values are stored into heap
const person = {
    name: 'Tom',
    age: 21
};
let newName = name;
newName = 'Hartly';
console.log(name, newName);

let newPerson = person;
newPerson.name = 'Harry';
console.log(person, newPerson); // values changed at both the positions