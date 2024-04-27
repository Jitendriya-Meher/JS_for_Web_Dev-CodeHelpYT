let curr = new Date();
console.log(curr);

let d = new Date("June 20 2001 12:35");
console.log(d);

d = new Date(2001,10,20,10,23);
console.log(d);

console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());

console.log(d.toDateString());
console.log(d.toJSON());
console.log(d.toTimeString());
console.log(d.toLocaleDateString());
console.log(d.toString());
console.log(d.toLocaleString());
