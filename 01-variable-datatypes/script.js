// This is a single line comment
/*
This is multi-line comment
used for documentation and understandings 
of the source code
*/
console.log('Hello, Good Morning!'); // log method of to the console object
console.warn("This is a caution message");
console.log(20, 'Hello', false);

console.table({ name: 'Drake', email: 'drake@unkown.com' });
// doing grouping
console.group('simple')
const a = 100;
console.log(a);
console.error('Error message');
console.warn('Warning');
console.groupEnd();

const styles = 'padding:10px; background-color:white; color:crimson; border-radius: 5px';
console.log('%cHello World', styles);

console.clear();

console.time('trash');
let fun1 = function () {
    console.log('fun1 is running');
}
let fun2 = function () {
    console.log('fun2 is running');
}
fun1();
fun2();
console.timeEnd('trash');

console.time('sumFormula');
let n = 1000000000;
let total = n * (n + 1) / 2;
console.log(`The total is ${total}`);
console.timeEnd('sumFormula');

console.time('sumLoop')
let num = 1000000000;
let sum = 0;
for (let i = 0; i <= num; i++) {
    sum += i;
}
console.log(`The sum is ${sum}`);
console.timeEnd('sumLoop')

for (let j = 0; j <= 10; j++) {
    console.count(j);
}