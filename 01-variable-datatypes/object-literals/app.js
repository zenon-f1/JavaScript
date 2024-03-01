let x;

const person = {
    name: 'Alex',
    age: 34,
    isAdmin: true,
    address: {
        street: '98 Main St',
        city: 'Lucknow',
        state: 'Uttar Pradesh'
    },
    hobbies: ['cricket', 'music', 'sports']
};
console.log(person);

x = person.age;
x = person['isAdmin'];
x = person.address.street;
x = person.hobbies[2];

person.name = 'Dan';
person.age = 41;

delete person.isAdmin;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello someone's name is ${this.name}`);
};

person.greet();

console.log(x)



