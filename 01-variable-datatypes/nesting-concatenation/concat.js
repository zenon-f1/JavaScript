let x;

const fruits = ['apple', 'peer', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

x = fruits.concat(berries);

// Spread Operator(...)
x = [...fruits, ...berries]; // same as concat(used with objects too)

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

console.log(arr)

x = arr.flat();

// Static methods on Array Object

x = Array.isArray(fruits);

x = Array.from('RDJ'); // [ 'R', 'D', 'J' ]

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // array of variables

console.log(x)