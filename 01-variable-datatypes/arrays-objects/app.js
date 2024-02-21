let x;

// Array Literal
const fruits = ["🥭", "🍎", "🍌", "🍉", "🍐", "🍍", "🍇"];

// Array Constructor
const numbers = new Array(1, 2, 3, 4, 5, 6, 7);
const vegetalbes = new Array("🍅", "🍆", "🥔", "🥕", "🫑", "🥒", "🥜", "🫛", "🍠")

console.log(fruits);
console.log(numbers);
console.log(vegetalbes);

x = fruits[0];
x = `my favorite fruit is ${fruits[1]}`

x = numbers.length;

numbers[1] = 100;

numbers.length = 3;
x = numbers;

fruits[fruits.length] = "🍏";
fruits.push('🍈');
x = fruits;

const arr = [3, 4, 5, 6, 24, 8, 8, 56, 8, 97, 44];
arr.push(345);

arr.pop();

arr.shift(); // remove from the starting

arr.unshift(123); // add in the starting

arr.reverse();

x = arr;

x = x.includes(45);

x = arr.indexOf(44);

x = arr.lastIndexOf(8);

x = arr.slice(2, 6); // (start, end) doesn't changes array

x = arr.splice(2, 3);

x = arr.splice(1, 1);
console.log(x, arr);

let cars = ['Labhorghini', 'Volvo', 'Buggati', 'Ferrari'];
x = cars.splice(1, 4).reverse().toString().charAt(3).toUpperCase();









console.log(x, arr);