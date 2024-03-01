let x;

const todo = new Object();
// const todo1 = new Todo(); // custom contructor

todo.id = 3;
todo.name = 'Buy Apple';
todo.completed = false;


x = todo;

const person = {
    address: {
        coorde: {
            lat: 45.9489,
            lng: -34.4849
        },
    },
};

x = person.address.coorde.let;
console.log(x);

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4, e: 5 };

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2); // same as spread operator
console.log(obj5);


const todos = [
    { id: 1, name: 'Buy Shoes' },
    { id: 2, name: 'Pick up kids from school' },
    { id: 3, name: 'Take out the trash' }
]; // array of objects

x = todos;

x = todos[1];

x = todos[0].name;

x = Object.keys(todo); // array of keys of object

x = Object.values(todo); // array of values of object

x = Object.entries(todo); // array of arrays that has the key value pairs of object

x = Object.keys(todo).length;

x = todo.hasOwnProperty('id'); // check if property exists in object

console.log(x);

