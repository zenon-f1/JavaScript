// 1. Arithmetic operators
let x = 45;
x = 2 + 5;
x = 56 - 4;
x = 7 * 2;
x = 5 / 2;
x = 7 % 2;
console.log(x);

// Concatenation 
let firstName = 'John';
let secondName = 'Doe';
let fullName = firstName + ' ' + secondName;
console.log(fullName);

// Exponent 
x = 2 ** 3;
console.log(x);

// Increment
x++;
++x;
console.log(x);

// Decrement
x--;
--x;
console.log(x);

// 2. Assignment operators
x += 5;
x -= 5;
x *= 2;
x /= 2;
x **= 2;
x %= 2;
console.log(x)

// 3. Comparison operators
let y = 45;
console.log(x == y);
y = '64';
console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x === y); // checks equality with type too
console.log(x != y);

// 4. Ternary operator
let text1 = 'A';
let text2 = 'B';
let result = text1 > text2 ? text1 : text2;
console.log(result);

// 5. Logical operators
if(45>7 && 7>2){
    console.log("yes");
}
if((5+4)<10 || (5 == 6)){
    console.log("yes");
}
console.log(!true);
console.log(!false);

// 6. Bitwise operators
let a = 5;
a = a<<2;
console.log(a)
a = a>>2;
console.log(a);
a = a ^ 3;
console.log(a);
a = a | 6;
console.log(a);
a = a & 19;
console.log(a);
a = ~a;
console.log(a);