let amount =  '2000';
// String to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);

let value = 56;
// Number to string 
value = value.toString();
value = String(value);
console.log(value, typeof value);

let fvalue = '89.44';
// String to float
fvalue = parseFloat(fvalue);
console.log(fvalue, typeof fvalue);

let permission = 0;
// Number to boolean
permission = Boolean(permission);
console.log(permission, typeof permission);

// NaN (Not a number)
let nvalue = 'abc';
nvalue = Number(nvalue);
console.log(nvalue, typeof nvalue);
console.log(Math.sqrt(-16));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('abc'/5);




