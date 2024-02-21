let d;

d = new Date();

d = d.toString();

d = new Date(2024, 1, 26, 12, 24, 88); // febraury
d = new Date('2024-01-01T11:56:58');
d = new Date('2024/02/21 11:56:58');

d = Date.now();

d = new Date('03-10-2003'); // from this time 
d = d.getTime(); // till now
d = new Date(1047234600000); // same date 👆

d = Math.floor(Date.now() / 1000); // in seconds
d = Math.floor(Date.now() / (31556952000)); // in years from 

console.log(d);