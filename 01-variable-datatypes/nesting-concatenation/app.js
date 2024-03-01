let x;

const fruits = ['apple', 'peer', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting

fruits.push(berries); // array within array

x = fruits[3][1];

const allFruits = [fruits, berries]; // two arrays in a single array

x = allFruits;

x = allFruits[0][1]; // accessing 'pear' from the first sub-array (fruits)

x = allFruits[1][1]; // accessing 'blueberry' from the first sub-array (berries)

console.log(x); 