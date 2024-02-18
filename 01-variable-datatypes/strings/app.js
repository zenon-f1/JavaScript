let x;
const name = 'Alex';
const age = 34;
x = 'Hello, your name is ' + name + ' and i am ' + age + ' years old';

// Template literals
x = `Hello, your name is ${name} and i am ${age} years old`;

// String Properties and Methods
const s = new String('Hello, world!'); // object
x = typeof s;
x = s.length;

// Access value by indexes
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(4);

x = s.indexOf('l'); // index of first l

x = s.substring(2,8);
x = s.substring(2);

x = s.slice(0,5);
x = s.slice(-13, -5);

x = '     Hello, world!    ';
x = s.trim()

x = s.trimStart();
x = s.trimEnd();

x = s.replace('world','Earth');

x = s.includes('ello');
x = s.includes('Hell');

x = s.valueOf();

x = s.split('');
x = s.split(' ');






console.log(x);
