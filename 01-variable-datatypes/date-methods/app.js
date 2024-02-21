let x;
let d = new Date();

x = d.toString();

x = d.getTime();

x = d.toJSON();

x = d.toDateString();

x = d.toLocaleDateString();

x = d.toLocaleTimeString();

x = d.toTimeString();

x = d.toISOString();

x = d.getFullYear();

x = d.getMonth() + 1; // zero-based index

x = d.getDate();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()} ${d.getMonth() + 1} ${d.getDate()} ${d.getHours()} ${d.getMinutes()} ${d.getSeconds()} ${d.getMilliseconds()}`;

x = Intl.DateTimeFormat('en-IN').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { year: '2-digit' }).format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
x = Intl.DateTimeFormat('default', { day: 'numeric' }).format(d);

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
});

console.log(x);